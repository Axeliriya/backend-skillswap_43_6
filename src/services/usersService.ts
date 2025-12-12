import { v4 as uuidv4 } from "uuid";
import { User, users } from "../data/users";
import { subcategories } from "../data/categories";

type CreateUserPayload = Partial<User> & { name?: string; skillCanTeach?: any };

export async function createUser(payload: CreateUserPayload) {
  // Валидация минимальных полей (имя, skillCanTeach.name, categoryId/subcategoryId)
  if (!payload.name || !payload.skillCanTeach?.name) {
    throw new Error("Обязательные поля: name и skillCanTeach.name");
  }

  const { categoryId, subcategoryId } = payload.skillCanTeach;
  if (!categoryId || !subcategoryId) {
    throw new Error("Укажите categoryId и subcategoryId для skillCanTeach");
  }

  // Проверяем, что такая подкатегория существует и принадлежит категории
  const subExists = subcategories.some(
    (s) => s.id === subcategoryId && s.categoryId === categoryId
  );
  if (!subExists) {
    throw new Error("Указанная подкатегория не найдена или не принадлежит категории");
  }

  // Если есть subcategoriesWantToLearn — валидируем каждую
  if (payload.subcategoriesWantToLearn) {
    for (const want of payload.subcategoriesWantToLearn) {
      const ok = subcategories.some(
        (s) => s.id === want.id && s.categoryId === want.categoryId
      );
      if (!ok)
        throw new Error(`Подкатегория для изучения не найдена: ${want.name || want.id}`);
    }
  }

  const newId = uuidv4();
  const newUser: User = {
    id: newId,
    likesCount: 0,
    likedByUserIds: [],
    avatarUrl:
      payload.avatarUrl ||
      "https://i.pinimg.com/736x/62/01/0d/62010d848b790a2336d1542fcda51789.jpg",
    location: payload.location || "Не указан",
    birthDate: payload.birthDate || "01.01.2000",
    gender: payload.gender || "Не указан",
    images: Array.isArray(payload.images) ? payload.images : [],
    subcategoriesWantToLearn: payload.subcategoriesWantToLearn || [],
    name: payload.name || "Без имени",
    skillCanTeach: {
      name: payload.skillCanTeach.name,
      description: payload.skillCanTeach.description || "",
      categoryId: payload.skillCanTeach.categoryId,
      subcategoryId: payload.skillCanTeach.subcategoryId,
    },
  } as User;

  // Сохранение в глобальном массиве users (in-memory)
  users.push(newUser);

  return newUser;
}
