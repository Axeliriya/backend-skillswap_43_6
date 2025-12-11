import express from "express";
import {
  getCategories,
  getSubcategories,
  getSubcategoriesByCategory,
  getSubcategoryById,
  getCategoryById,
} from "../controllers/categoriesController";

const router = express.Router();

// Маршруты для категорий
router.get("/", getCategories); // GET /categories
router.get("/:categoryId", getCategoryById); // GET /categories/:categoryId

// Маршруты для подкатегорий
router.get("/subcategories/all", getSubcategories); // GET /categories/subcategories/all
router.get("/subcategories/:subcategoryId", getSubcategoryById); // GET /categories/subcategories/:subcategoryId

// Получить подкатегории конкретной категории
router.get("/:categoryId/subcategories", getSubcategoriesByCategory); // GET /categories/:categoryId/subcategories

export default router;
