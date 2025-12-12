import { Request, Response } from "express";
import { categories, subcategories } from "../data/categories";

export const getCategories = (req: Request, res: Response) => {
  res.status(200).json(categories);
};

// Получить все подкатегории
export const getSubcategories = (req: Request, res: Response) => {
  res.status(200).json(subcategories);
};

export const getCategoriesTree = (req: Request, res: Response) => {
  const tree = categories.map((cat) => ({
    ...cat,
    subcategories: subcategories.filter((sub) => sub.categoryId === cat.id),
  }));
  res.status(200).json(tree);
};

// Получить подкатегории по ID категории
export const getSubcategoriesByCategory = (
  req: Request<{ categoryId: string }>,
  res: Response
) => {
  const categoryId = req.params.categoryId;
  const filteredSubcategories = subcategories.filter(
    (sub) => sub.categoryId === categoryId
  );

  if (filteredSubcategories.length === 0) {
    return res.status(404).json({
      message: `Подкатегории для категории с ID ${categoryId} не найдены`,
    });
  }

  res.status(200).json(filteredSubcategories);
};

// Получить подкатегорию по ID
export const getSubcategoryById = (
  req: Request<{ subcategoryId: string }>,
  res: Response
) => {
  const subcategoryId = req.params.subcategoryId;
  const subcategory = subcategories.find((sub) => sub.id === subcategoryId);

  if (!subcategory) {
    return res.status(404).json({
      message: `Подкатегория с ID ${subcategoryId} не найдена`,
    });
  }

  res.status(200).json(subcategory);
};

// Получить категорию по ID
export const getCategoryById = (req: Request<{ categoryId: string }>, res: Response) => {
  const categoryId = req.params.categoryId;
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return res.status(404).json({
      message: `Категория с ID ${categoryId} не найдена`,
    });
  }

  res.status(200).json(category);
};
