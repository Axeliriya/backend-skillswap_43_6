import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt";

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Требуется авторизация" });
  }

  const token = auth.split(" ")[1];
  const payload = verifyAccessToken(token);
  if (!payload || typeof payload === "string") {
    return res.status(401).json({ message: "Неверный или просроченный токен" });
  }

  res.locals.userId = (payload as any).userId;
  next();
}
