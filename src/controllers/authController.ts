import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User, users } from "../data/users";
import * as usersService from "../services/usersService";
import normalizeEmail from "../utils/normalizeEmail";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/jwt";
import {
  findAccountByEmail,
  findAccountByRefreshToken,
  saveAccount,
} from "../utils/helpers";

/* 
  Примечание:
  - В этом контроллере пароли хранятся в захешированном виде через bcrypt.
  - Токены сейчас — простые случайные строки (dev). В будущем замените generateToken на JWT.
*/

/* -------------------- Контроллеры -------------------- */

export function checkEmail(req: Request, res: Response) {
  const raw = req.query.email;
  const email = normalizeEmail(raw);
  if (!email) {
    return res
      .status(400)
      .json({ message: "Отсутствует или некорректный параметр email" });
  }

  const exists = !!findAccountByEmail(email);
  return res.status(200).json({ exists });
}

export async function register(req: Request, res: Response) {
  try {
    const body = req.body;
    if (!body || typeof body !== "object") {
      return res
        .status(400)
        .json({ message: "Тело запроса отсутствует или некорректно" });
    }

    const credentials = body.credentials;
    const userPayload = body.user;

    if (
      !credentials ||
      typeof credentials.email !== "string" ||
      typeof credentials.password !== "string"
    ) {
      return res.status(400).json({ message: "Требуются email и пароль" });
    }

    const email = normalizeEmail(credentials.email);
    const password = credentials.password;

    if (!email) {
      return res.status(400).json({ message: "Некорректный email" });
    }

    // Проверяем уникальность email в auth-хранилище
    if (findAccountByEmail(email)) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким email уже существует" });
    }

    const newUser = await usersService.createUser(userPayload);

    // Хешируем пароль и сохраняем аккаунт в auth-хранилище
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "10", 10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const accessToken = signAccessToken({ userId: newUser.id });
    const refreshToken = signRefreshToken({ userId: newUser.id });

    const account = {
      email,
      passwordHash: hashedPassword,
      userId: newUser.id,
      token: accessToken,
      refreshToken,
    };

    saveAccount(account);

    return res.status(201).json({ user: newUser, token: accessToken, refreshToken });
  } catch (err: any) {
    console.error("Ошибка регистрации:", err);
    return res.status(500).json({ message: "Внутренняя ошибка сервера при регистрации" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email: rawEmail, password } = req.body || {};
    const email = normalizeEmail(rawEmail);

    if (!email || typeof password !== "string") {
      return res.status(400).json({ message: "Требуются email и пароль" });
    }

    const account = findAccountByEmail(email);
    if (!account) {
      // Не раскрываем, существует ли email публично — только "неверные учётные данные"
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    // Сравниваем пароль с хешем
    const match = await bcrypt.compare(password, account.passwordHash);
    if (!match) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    const user = users.find((u: any) => u.id === account.userId) as any;
    if (!user) {
      return res.status(500).json({ message: "Связанный пользователь не найден" });
    }

    // Генерируем JWT access + refresh
    const newAccessToken = signAccessToken({ userId: user.id });
    const newRefreshToken = signRefreshToken({ userId: user.id });

    account.token = newAccessToken;
    account.refreshToken = newRefreshToken;
    saveAccount(account);

    return res
      .status(200)
      .json({ user, token: newAccessToken, refreshToken: newRefreshToken });
  } catch (err: any) {
    console.error("Ошибка в login:", err);
    return res.status(500).json({ message: "Внутренняя ошибка сервера при входе" });
  }
}

export function refreshTokenHandler(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body || {};
    if (!refreshToken || typeof refreshToken !== "string") {
      return res.status(400).json({ message: "Отсутствует refreshToken" });
    }

    // 1) Проверяем JWT валидность и вытаскиваем payload (userId внутри)
    const payload = verifyRefreshToken(refreshToken);
    if (!payload || typeof payload === "string") {
      return res.status(401).json({ message: "Неверный или просроченный refreshToken" });
    }

    // Ожидаем, что payload содержит userId
    // @ts-ignore
    const userIdFromToken = (payload as any).userId;
    if (!userIdFromToken) {
      return res.status(401).json({ message: "Неверный refreshToken (нет userId)" });
    }

    // 2) Находим аккаунт по сохранённому refreshToken (или по userId)
    const account = findAccountByRefreshToken(refreshToken);
    if (!account) {
      // Защита: если в нашей базе нет такого refreshToken — отклоняем
      return res.status(401).json({ message: "Refresh token не найден" });
    }

    // Дополнительная проверка: userId из токена и из аккаунта совпадают
    if (account.userId !== userIdFromToken) {
      return res
        .status(401)
        .json({ message: "Неверный refresh token (несовпадающий user)" });
    }

    // 3) Всё ок — ротация токенов
    const newAccessToken = signAccessToken({ userId: account.userId });
    const newRefreshToken = signRefreshToken({ userId: account.userId });

    account.token = newAccessToken;
    account.refreshToken = newRefreshToken;
    saveAccount(account);

    return res.status(200).json({ token: newAccessToken, refreshToken: newRefreshToken });
  } catch (err: any) {
    console.error("Ошибка в refreshTokenHandler:", err);
    return res
      .status(500)
      .json({ message: "Внутренняя ошибка сервера при обновлении токена" });
  }
}

export function logout(req: Request, res: Response) {
  try {
    const { email: rawEmail } = req.body || {};
    const email = normalizeEmail(rawEmail);
    if (!email) {
      return res.status(400).json({ message: "Отсутствует email для выхода" });
    }

    const account = findAccountByEmail(email);
    if (!account) {
      // Если аккаунта нет — считаем, что уже вышли
      return res.status(200).json({ message: "Сессия завершена" });
    }

    // Обнуляем токены (без удаления записи учётной записи)
    account.token = "";
    account.refreshToken = "";
    saveAccount(account);

    return res.status(200).json({ message: "Вы успешно вышли" });
  } catch (err: any) {
    console.error("Ошибка в logout:", err);
    return res.status(500).json({ message: "Внутренняя ошибка при выходе" });
  }
}
