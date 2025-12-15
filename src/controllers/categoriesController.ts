import { Request, Response } from "express";
import { supabase } from "../lib/supabase";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("id, name")
      .order("id");

    if (error) throw error;

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Ошибка при получении категорий" });
  }
};

export const getSubcategories = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("subcategories")
      .select("id, name, category_id")
      .order("id");

    if (error) throw error;

    // Приводим к формату твоего типа Subcategory
    const formatted = data.map((s) => ({
      id: s.id,
      name: s.name,
      categoryId: s.category_id,
    }));

    res.status(200).json(formatted);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Ошибка при получении подкатегорий" });
  }
};

export const getCategoriesTree = async (req: Request, res: Response) => {
  try {
    const { data: cats, error: catError } = await supabase
      .from("categories")
      .select("id, name")
      .order("id");

    if (catError) throw catError;

    const { data: subs, error: subError } = await supabase
      .from("subcategories")
      .select("id, name, category_id")
      .order("id");

    if (subError) throw subError;

    const tree = cats.map((cat) => ({
      id: cat.id,
      name: cat.name,
      subcategories: subs
        .filter((s) => s.category_id === cat.id)
        .map((s) => ({
          id: s.id,
          name: s.name,
          categoryId: s.category_id,
        })),
    }));

    res.status(200).json(tree);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: err.message || "Ошибка при построении дерева категорий" });
  }
};

export const getSubcategoriesByCategory = async (
  req: Request<{ categoryId: string }>,
  res: Response
) => {
  const { categoryId } = req.params;

  try {
    const { data, error, count } = await supabase
      .from("subcategories")
      .select("id, name, category_id")
      .eq("category_id", categoryId)
      .order("id");

    if (error) throw error;
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: `Подкатегории для категории с ID ${categoryId} не найдены`,
      });
    }

    const formatted = data.map((s) => ({
      id: s.id,
      name: s.name,
      categoryId: s.category_id,
    }));

    res.status(200).json(formatted);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getSubcategoryById = async (
  req: Request<{ subcategoryId: string }>,
  res: Response
) => {
  const { subcategoryId } = req.params;

  try {
    const { data, error } = await supabase
      .from("subcategories")
      .select("id, name, category_id")
      .eq("id", subcategoryId)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: `Подкатегория с ID ${subcategoryId} не найдена`,
      });
    }

    res.status(200).json({
      id: data.id,
      name: data.name,
      categoryId: data.category_id,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategoryById = async (
  req: Request<{ categoryId: string }>,
  res: Response
) => {
  const { categoryId } = req.params;

  try {
    const { data, error } = await supabase
      .from("categories")
      .select("id, name")
      .eq("id", categoryId)
      .single();

    if (error || !data) {
      return res.status(404).json({
        message: `Категория с ID ${categoryId} не найдена`,
      });
    }

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
