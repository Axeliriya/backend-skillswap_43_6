import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
  getUsersByCategory,
  getUsersBySubcategory,
  likeUser,
  updateUser,
} from "../controllers/usersController";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Публичные роуты (гости могут всё это смотреть)
router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/category/:categoryId", getUsersByCategory);
router.get("/subcategory/:subcategoryId", getUsersBySubcategory);

// Регистрация тоже публичная (новый пользователь создаётся через /auth/register, но оставим и этот на случай)
router.post("/", createUser);

// Защищённые роуты — только авторизованные
router.use(authMiddleware);
router.put("/:id", updateUser);
router.post("/:id/like", likeUser);

export default router;
