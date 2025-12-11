import { User, users } from "../data/users";
import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response): void => {
  res.status(200).json(users);
};

export const getUserById = (req: Request<{ id: string }>, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  res.status(200).json(user);
};

export const updateUser = (req: Request<{ id: string }>, res: Response) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  const updates: Partial<User> = req.body;
  users[userIndex] = { ...users[userIndex], ...updates };

  res.status(200).json(users[userIndex]);
};
