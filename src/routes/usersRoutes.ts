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

const router = express.Router();

// Маршруты фильтрации
router.get("/category/:categoryId", getUsersByCategory); // GET /users/category/:categoryId
router.get("/subcategory/:subcategoryId", getUsersBySubcategory); // GET /users/subcategory/:subcategoryId

// Основные маршруты
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.post("/:id/like", likeUser);
router.post("/", createUser);

export default router;
