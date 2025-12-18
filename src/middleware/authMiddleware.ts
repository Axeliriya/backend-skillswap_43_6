import { Request, Response, NextFunction } from "express";
import { supabase } from "../lib/supabase";

interface LocalsWithUserId extends Record<string, any> {
  userId?: string;
}

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No authorization header or invalid format" });
  }

  const token = authHeader.split(" ")[1];

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  res.locals.userId = data.user.id;

  next();
}
