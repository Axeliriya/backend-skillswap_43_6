// src/routes/categoriesRoutes.js
import express from "express";
import {
  getCategories,
  getSubcategories, // ← теперь это все подкатегории
  getSubcategoriesByCategory,
  getSubcategoryById,
  getCategoryById,
  getCategoriesTree,
} from "../controllers/categoriesController";

const router = express.Router();

// Важно: сначала маршруты с :param, потом общие!

// Подкатегории
router.get("/subcategories/:subcategoryId", getSubcategoryById);
router.get("/subcategories", getSubcategories);

// Категории
router.get("/", getCategories);
router.get("/tree", getCategoriesTree);
router.get("/:categoryId", getCategoryById);
router.get("/:categoryId/subcategories", getSubcategoriesByCategory);

export default router;
