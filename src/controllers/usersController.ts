import { User, users } from "../data/users";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { subcategories } from "../data/categories";

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

export const getUserById = (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  res.status(200).json(user);
};

export const createUser = (req: Request, res: Response) => {
  const newUserData: Omit<User, "id" | "likesCount" | "likedByUserIds"> = req.body;

  if (!newUserData.name || !newUserData.skillCanTeach?.name) {
    return res
      .status(400)
      .json({ message: "Обязательные поля: имя и чему можете научить" });
  }

  const { categoryId, subcategoryId } = newUserData.skillCanTeach;
  if (!categoryId || !subcategoryId) {
    return res
      .status(400)
      .json({ message: "Укажите категорию и подкатегорию для навыка" });
  }

  const subcategoryExists = subcategories.some(
    (sub) => sub.id === subcategoryId && sub.categoryId === categoryId
  );

  if (!subcategoryExists) {
    return res.status(400).json({
      message:
        "Указанная подкатегория не существует или не принадлежит указанной категории",
    });
  }

  if (newUserData.subcategoriesWantToLearn) {
    for (const wantToLearn of newUserData.subcategoriesWantToLearn) {
      const subcatExists = subcategories.some(
        (sub) => sub.id === wantToLearn.id && sub.categoryId === wantToLearn.categoryId
      );

      if (!subcatExists) {
        return res.status(400).json({
          message: `Подкатегория "${wantToLearn.name}" (ID: ${wantToLearn.id}) не существует`,
        });
      }
    }
  }

  const newId = uuidv4();

  const newUser: User = {
    id: newId,
    likesCount: 0,
    likedByUserIds: [],
    avatarUrl:
      newUserData.avatarUrl ||
      "https://i.pinimg.com/736x/62/01/0d/62010d848b790a2336d1542fcda51789.jpg",
    location: newUserData.location || "Не указан",
    birthDate: newUserData.birthDate || "01.01.2000",
    gender: newUserData.gender || "Не указан",
    images: newUserData.images || [],
    subcategoriesWantToLearn: newUserData.subcategoriesWantToLearn || [],
    name: newUserData.name,
    skillCanTeach: {
      name: newUserData.skillCanTeach.name,
      description: newUserData.skillCanTeach.description || "",
      categoryId: newUserData.skillCanTeach.categoryId,
      subcategoryId: newUserData.skillCanTeach.subcategoryId,
    },
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

export const updateUser = (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  const updates: Partial<User> = req.body;

  if (updates.skillCanTeach) {
    const { categoryId, subcategoryId } = updates.skillCanTeach;
    if (categoryId || subcategoryId) {
      const finalCategoryId = categoryId || users[userIndex].skillCanTeach.categoryId;
      const finalSubcategoryId =
        subcategoryId || users[userIndex].skillCanTeach.subcategoryId;

      const subcategoryExists = subcategories.some(
        (sub) => sub.id === finalSubcategoryId && sub.categoryId === finalCategoryId
      );

      if (!subcategoryExists) {
        return res.status(400).json({
          message:
            "Указанная подкатегория не существует или не принадлежит указанной категории",
        });
      }
    }
  }

  users[userIndex] = { ...users[userIndex], ...updates };

  res.status(200).json(users[userIndex]);
};

export const likeUser = (req: Request<{ id: string }>, res: Response) => {
  const userId = req.params.id;
  const likerId = req.body.likerId;

  if (!likerId) {
    return res.status(400).json({ message: "Требуется likerId" });
  }

  if (likerId === userId) {
    return res.status(400).json({ message: "Нельзя лайкнуть себя" });
  }

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  const alreadyLiked = user.likedByUserIds.includes(likerId);

  if (alreadyLiked) {
    user.likedByUserIds = user.likedByUserIds.filter((id) => id !== likerId);
    user.likesCount -= 1;
  } else {
    user.likedByUserIds.push(likerId);
    user.likesCount += 1;
  }

  res.status(200).json({
    likesCount: user.likesCount,
    isLiked: !alreadyLiked,
  });
};

export const getUsersByCategory = (
  req: Request<{ categoryId: string }>,
  res: Response
) => {
  const categoryId = req.params.categoryId;
  const filteredUsers = users.filter(
    (user) => user.skillCanTeach.categoryId === categoryId
  );

  res.status(200).json(filteredUsers);
};

export const getUsersBySubcategory = (
  req: Request<{ subcategoryId: string }>,
  res: Response
) => {
  const subcategoryId = req.params.subcategoryId;
  const filteredUsers = users.filter(
    (user) => user.skillCanTeach.subcategoryId === subcategoryId
  );

  res.status(200).json(filteredUsers);
};
