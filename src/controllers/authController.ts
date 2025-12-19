import { Request, Response } from "express";
import { supabase } from "../lib/supabase";
import { normalizeEmail } from "../utils/normalizeEmail.js";
import * as usersService from "../services/usersService.js";
import { Subcategory } from "../types/types";

export const getEmails = async (req: Request, res: Response) => {
  try {
    // Для получения ВСЕХ email используем просто .select()
    const { data, error } = await supabase.from("registered_emails").select("email");

    if (error) {
      console.error("Ошибка при получении email из БД:", error);
      return res.status(500).json({
        message: "Ошибка сервера при получении email",
        error: error.message,
      });
    }

    // data будет массивом email объектов
    return res.status(200).json({
      emails: data || [],
      count: data ? data.length : 0,
    });
  } catch (err: any) {
    console.error("Необработанная ошибка в getEmails:", err);
    res.status(500).json({
      message: "Внутренняя ошибка сервера",
      error: err.message,
    });
  }
};
export async function checkEmail(req: Request, res: Response) {
  try {
    const { email } = req.body;

    if (!email || typeof email !== "string") {
      return res.status(400).json({
        message: "Email обязателен",
        receivedBody: req.body,
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Проверяем в Supabase
    const { data, error } = await supabase
      .from("registered_emails")
      .select("email")
      .eq("email", normalizedEmail);

    if (error) {
      return res.status(500).json({
        message: "Ошибка сервера",
        error: error.message,
      });
    }

    const exists = Array.isArray(data) && data.length > 0;
    console.log("Result:", { email: normalizedEmail, exists });

    return res.status(200).json({
      exists: exists,
      email: normalizedEmail,
      message: exists ? "Email уже зарегистрирован" : "Email доступен",
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Внутренняя ошибка сервера",
      error: err.message,
    });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const { email: rawEmail, password, user } = req.body;

    if (!rawEmail || typeof rawEmail !== "string") {
      return res.status(400).json({ message: "Email обязателен" });
    }

    const email = normalizeEmail(rawEmail);

    if (email === "") {
      return res.status(400).json({ message: "Email пустой" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Пароль минимум 6 символов" });
    }

    // Регистрация в Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return res.status(400).json({ message: authError?.message });
    }

    if (!authData.user || !authData.session) {
      return res.status(500).json({ message: "Ошибка создания сессии пользователя" });
    }

    const userId = authData.user.id;

    const { error: insertError } = await supabase.from("users").insert({
      id: authData.user.id,
      name: user?.name || "Новый пользователь",
      location: user?.location || "",
      birth_date: user?.birthDate || null,
      gender: user?.gender || "Не указан",
      avatar_url: user?.avatarUrl || null,
    });

    if (insertError) {
      console.error("Ошибка создания профиля в users:", insertError);
      return res.status(500).json({ message: "Не удалось создать профиль" });
    }

    if (user.skillCanTeach?.name) {
      await supabase.from("skills_can_teach").insert({
        user_id: userId,
        name: user.skillCanTeach.name,
        description: user.skillCanTeach.description,
        category_id: user.skillCanTeach.categoryId,
        subcategory_id: user.skillCanTeach.subcategoryId,
      });
    }

    if (user.subcategoriesWantToLearn?.length) {
      const rows = user.subcategoriesWantToLearn.map((s: Subcategory) => ({
        user_id: userId,
        subcategory_id: s.id,
      }));

      await supabase.from("user_want_to_learn").insert(rows);
    }

    if (user.images?.length) {
      const rows = user.images.map((url: string) => ({
        user_id: userId,
        url,
      }));

      await supabase.from("user_images").insert(rows);
    }

    const profile = await usersService.getProfileByUserId(authData.user.id);

    return res.status(201).json({
      user: profile,
      token: authData.session.access_token,
      refreshToken: authData.session.refresh_token,
    });
  } catch (err: any) {
    console.error("Ошибка регистрации:", err);
    return res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email: rawEmail, password } = req.body;

    const email = normalizeEmail(rawEmail);

    if (!email || !password) {
      return res.status(400).json({ message: "Требуются email и пароль" });
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user || !data.session) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    const profile = await usersService.getProfileByUserId(data.user.id);

    return res.status(200).json({
      user: profile,
      token: data.session.access_token,
      refreshToken: data.session.refresh_token,
    });
  } catch (err: any) {
    console.error("Ошибка входа:", err);
    return res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
}

export async function refreshTokenHandler(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({ message: "Требуется refreshToken" });
    }

    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: refreshToken,
    });

    if (error || !data.session) {
      return res.status(401).json({ message: "Неверный или просроченный refreshToken" });
    }

    return res.status(200).json({
      token: data.session.access_token,
      refreshToken: data.session.refresh_token,
    });
  } catch (err: any) {
    console.error("Ошибка обновления токена:", err);
    return res.status(500).json({ message: "Ошибка сервера" });
  }
}

export async function logout(req: Request, res: Response) {
  // На сервере logout не нужен — просто клиент очищает токены
  return res.status(200).json({ message: "Вы успешно вышли" });
}
