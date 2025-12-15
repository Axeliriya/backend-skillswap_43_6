import { Request, Response } from "express";
import * as usersService from "../services/usersService";
import { UpdateUserPayload } from "../types/types";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersService.getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Ошибка сервера" });
  }
};

export const getUserById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = await usersService.getProfileByUserId(req.params.id);
    if (!user) return res.status(404).json({ message: "Пользователь не найден" });
    res.status(200).json(user);
  } catch (err: any) {
    res.status(404).json({ message: err.message || "Пользователь не найден" });
  }
};

export const updateUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const userId = req.params.id;
    const payload = req.body as UpdateUserPayload;

    if (res.locals.userId !== userId) {
      return res.status(403).json({ message: "Можно обновлять только свой профиль" });
    }

    if (!payload || Object.keys(payload).length === 0) {
      return res.status(400).json({ message: "Требуются данные для обновления" });
    }

    const updatedProfile = await usersService.updateProfile(userId, payload);

    res.status(200).json(updatedProfile);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Ошибка обновления профиля" });
  }
};

export const likeUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const likerId = res.locals.userId;
    if (!likerId) return res.status(400).json({ message: "Требуется likerId" });

    const result = await usersService.likeUser(req.params.id, likerId);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsersByCategory = async (
  req: Request<{ categoryId: string }>,
  res: Response
) => {
  try {
    const users = await usersService.getUsersByCategory(req.params.categoryId);
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getUsersBySubcategory = async (
  req: Request<{ subcategoryId: string }>,
  res: Response
) => {
  try {
    const users = await usersService.getUsersBySubcategory(req.params.subcategoryId);
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
