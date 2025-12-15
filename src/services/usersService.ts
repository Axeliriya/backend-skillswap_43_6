import { supabase } from "../lib/supabase";
import { Subcategory, UpdateUserPayload, User } from "../types/types";

// Вспомогательная функция для получения подкатегории по id (можно вынести в отдельный сервис позже)
async function getSubcategoryById(id: string): Promise<Subcategory | null> {
  const { data } = await supabase
    .from("subcategories")
    .select("id, name, category_id")
    .eq("id", id)
    .single();

  if (!data) return null;
  return {
    id: data.id,
    name: data.name,
    categoryId: data.category_id,
  };
}

// Основная функция — получение полного профиля в нужном формате
export async function getProfileByUserId(userId: string): Promise<User> {
  // 1. Основные данные пользователя
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (userError || !user) {
    throw new Error("Профиль не найден");
  }

  // 2. Навык, который преподаёт
  const { data: skill } = await supabase
    .from("skills_can_teach")
    .select("name, description, category_id, subcategory_id")
    .eq("user_id", userId)
    .single();

  // 3. Фото
  const { data: images } = await supabase
    .from("user_images")
    .select("image_url")
    .eq("user_id", userId)
    .order("order_index", { ascending: true });

  // 4. Что хочет изучать
  const { data: wants } = await supabase
    .from("user_want_to_learn")
    .select("subcategory_id")
    .eq("user_id", userId);

  const subcategoriesWantToLearn = wants
    ? await Promise.all(
        wants.map(async (w) => {
          const sub = await getSubcategoryById(w.subcategory_id);
          return sub || { id: w.subcategory_id, name: "Неизвестно", categoryId: "" };
        })
      )
    : [];

  // 5. Реальный подсчёт лайков (вместо user.likes_count)
  const { count: likesCount } = await supabase
    .from("user_likes")
    .select("id", { count: "exact", head: true })
    .eq("liked_user_id", userId);

  // 6. Кто лайкнул (для проверки isLiked на фронтенде)
  const { data: likedBy } = await supabase
    .from("user_likes")
    .select("liker_user_id")
    .eq("liked_user_id", userId);

  return {
    id: user.id,
    avatarUrl: user.avatar_url || "https://skillswap-api.netlify.app/default-avatar.png",
    name: user.name,
    location: user.location || "Не указан",
    birthDate: user.birth_date || "01.01.2000",
    gender: user.gender || "Не указан",
    skillCanTeach: skill
      ? {
          name: skill.name,
          description: skill.description,
          categoryId: skill.category_id,
          subcategoryId: skill.subcategory_id,
        }
      : {
          name: "",
          description: "",
          categoryId: "",
          subcategoryId: "",
        },
    images:
      images && images.length > 0
        ? images.map((i) => i.image_url)
        : ["https://skillswap-api.netlify.app/default-category.jpg"],
    subcategoriesWantToLearn,
    likesCount: likesCount ?? 0, // ← Вот здесь теперь всегда правда!
    likedByUserIds: likedBy?.map((l) => l.liker_user_id) || [],
    createdAt: user.created_at,
  };
}

// Получить всех пользователей
// export async function getAllUsers(): Promise<User[]> {
//   const { data: users } = await supabase.from("users").select("id");

//   if (!users || users.length === 0) return [];

//   return Promise.all(users.map((u) => getProfileByUserId(u.id)));
// }

export async function getAllUsers(): Promise<User[]> {
  const { data: rawUsers, error } = await supabase.from("users").select(`
      id,
      avatar_url,
      name,
      location,
      birth_date,
      gender,
      created_at,
      skills_can_teach!skills_can_teach_user_id_fkey (
        name,
        description,
        category_id,
        subcategory_id
      ),
      user_images (
        image_url,
        order_index
      ),
      user_want_to_learn (
        subcategory_id
      ),
      user_likes!user_likes_liked_user_id_fkey (
        liker_user_id
      )
    `);

  if (error) {
    console.error("Ошибка загрузки пользователей:", error);
    throw error;
  }
  if (!rawUsers || rawUsers.length === 0) return [];

  // Собираем все subcategory_id из желаемого
  const allWantSubcategoryIds = rawUsers
    .flatMap((u: any) => u.user_want_to_learn?.map((w: any) => w.subcategory_id) || [])
    .filter(Boolean);

  let subcategoryMap: Record<string, Subcategory> = {};

  if (allWantSubcategoryIds.length > 0) {
    const uniqueIds = Array.from(new Set(allWantSubcategoryIds));
    const { data: subcats } = await supabase
      .from("subcategories")
      .select("id, name, category_id")
      .in("id", uniqueIds);

    if (subcats) {
      subcategoryMap = subcats.reduce((acc, sub) => {
        acc[sub.id] = { id: sub.id, name: sub.name, categoryId: sub.category_id };
        return acc;
      }, {} as Record<string, Subcategory>);
    }
  }

  return rawUsers.map((raw: any) => {
    const skill = raw.skills_can_teach; // объект или null
    const images = (raw.user_images || [])
      .sort((a: any, b: any) => a.order_index - b.order_index)
      .map((i: any) => i.image_url);

    const wants = raw.user_want_to_learn || [];

    return {
      id: raw.id,
      avatarUrl: raw.avatar_url || "https://skillswap-api.netlify.app/default-avatar.png",
      name: raw.name,
      location: raw.location || "Не указан",
      birthDate: raw.birth_date || "01.01.2000",
      gender: raw.gender || "Не указан",
      skillCanTeach: skill
        ? {
            name: skill.name,
            description: skill.description,
            categoryId: skill.category_id,
            subcategoryId: skill.subcategory_id,
          }
        : { name: "", description: "", categoryId: "", subcategoryId: "" },
      images:
        images.length > 0
          ? images
          : ["https://skillswap-api.netlify.app/default-subcategory.jpg"],
      subcategoriesWantToLearn: wants.map(
        (w: any) =>
          subcategoryMap[w.subcategory_id] || {
            id: w.subcategory_id,
            name: "Неизвестно",
            categoryId: "",
          }
      ),
      likesCount: raw.user_likes?.length || 0,
      likedByUserIds: raw.user_likes?.map((l: any) => l.liker_user_id) || [],
      createdAt: raw.created_at,
    };
  });
}

// Лайк / анлайк
export async function likeUser(likedUserId: string, likerUserId: string) {
  console.log("=== LIKE REQUEST START ===");
  console.log("Liker:", likerUserId);
  console.log("Liked:", likedUserId);

  if (likedUserId === likerUserId) {
    throw new Error("Нельзя лайкнуть себя");
  }

  // Проверяем существование лайка
  const { data: existing } = await supabase
    .from("user_likes")
    .select("liker_user_id")
    .eq("liker_user_id", likerUserId)
    .eq("liked_user_id", likedUserId)
    .maybeSingle();

  let isLiked: boolean;

  if (existing) {
    await supabase
      .from("user_likes")
      .delete()
      .eq("liker_user_id", likerUserId)
      .eq("liked_user_id", likedUserId);
    isLiked = false;
  } else {
    await supabase
      .from("user_likes")
      .insert({ liker_user_id: likerUserId, liked_user_id: likedUserId });
    isLiked = true;
  }

  // Надёжный подсчёт
  const { count, error: countError } = await supabase
    .from("user_likes")
    .select("*", { count: "exact", head: true })
    .eq("liked_user_id", likedUserId);

  if (countError) {
    console.error("Ошибка при подсчёте лайков:", countError);
    throw new Error("Не удалось обновить счётчик лайков");
  }

  return {
    isLiked,
    likesCount: count ?? 0,
  };
}

export async function updateProfile(
  userId: string,
  payload: UpdateUserPayload
): Promise<User> {
  // 1. Обновляем основную таблицу users (только если есть поля)
  const userUpdates: Record<string, any> = {};

  if (payload.name) userUpdates.name = payload.name;
  if (payload.location) userUpdates.location = payload.location;
  if (payload.birthDate) userUpdates.birth_date = payload.birthDate; // date формат
  if (payload.gender) userUpdates.gender = payload.gender;
  if (payload.avatarUrl) userUpdates.avatar_url = payload.avatarUrl;

  if (Object.keys(userUpdates).length > 0) {
    const { error } = await supabase.from("users").update(userUpdates).eq("id", userId);

    if (error) throw new Error(`Ошибка обновления профиля: ${error.message}`);
  }

  // 2. Обновляем навык (upsert: insert or update on conflict по user_id)
  if (payload.skillCanTeach) {
    const { error } = await supabase.from("skills_can_teach").upsert(
      {
        user_id: userId,
        name: payload.skillCanTeach.name,
        description: payload.skillCanTeach.description,
        category_id: payload.skillCanTeach.categoryId,
        subcategory_id: payload.skillCanTeach.subcategoryId,
      },
      { onConflict: "user_id" }
    ); // upsert по user_id

    if (error) throw new Error(`Ошибка обновления навыка: ${error.message}`);
  }

  // 3. Обновляем изображения (удаляем старые, добавляем новые)
  if (payload.images) {
    // Удаляем старые
    await supabase.from("user_images").delete().eq("user_id", userId);

    // Добавляем новые с order_index
    const newImages = payload.images.map((url, index) => ({
      user_id: userId,
      image_url: url,
      order_index: index,
    }));

    const { error } = await supabase.from("user_images").insert(newImages);

    if (error) throw new Error(`Ошибка обновления изображений: ${error.message}`);
  }

  // 4. Обновляем желаемые подкатегории (удаляем старые, добавляем новые)
  if (payload.subcategoriesWantToLearn) {
    // Удаляем старые
    await supabase.from("user_want_to_learn").delete().eq("user_id", userId);

    // Добавляем новые
    const newWants = payload.subcategoriesWantToLearn.map((sub) => ({
      user_id: userId,
      subcategory_id: sub.id,
    }));

    const { error } = await supabase.from("user_want_to_learn").insert(newWants);

    if (error)
      throw new Error(`Ошибка обновления желаемых подкатегорий: ${error.message}`);
  }

  // Возвращаем обновлённый полный профиль
  return getProfileByUserId(userId);
}

// Пользователи по категории (по тому, что они преподают)
export async function getUsersByCategory(categoryId: string): Promise<User[]> {
  const { data } = await supabase
    .from("skills_can_teach")
    .select("user_id")
    .eq("category_id", categoryId);

  if (!data) return [];

  return Promise.all(data.map((row) => getProfileByUserId(row.user_id)));
}

// Пользователи по подкатегории
export async function getUsersBySubcategory(subcategoryId: string): Promise<User[]> {
  const { data } = await supabase
    .from("skills_can_teach")
    .select("user_id")
    .eq("subcategory_id", subcategoryId);

  if (!data) return [];

  return Promise.all(data.map((row) => getProfileByUserId(row.user_id)));
}
