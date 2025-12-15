export type AuthAccount = {
  email: string;
  passwordHash: string;
  userId: string;
  token?: string;
  refreshToken?: string;
};

export type skillCanTeach = {
  name: string;
  description: string;
  categoryId: string;
  subcategoryId: string;
};

export type User = {
  id: string;
  avatarUrl: string;
  name: string;
  location: string;
  birthDate: string;
  gender: "Мужской" | "Женский" | "Не указан";
  skillCanTeach: skillCanTeach;
  images: string[];
  subcategoriesWantToLearn: Subcategory[];
  likesCount: number;
  likedByUserIds: string[];
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
};

export type Subcategory = {
  id: string;
  name: string;
  categoryId: string;
};

export type UpdateUserPayload = Partial<{
  name: string;
  location: string;
  birthDate: string;
  gender: "Мужской" | "Женский" | "Не указан";
  avatarUrl: string;
  skillCanTeach: {
    name: string;
    description: string;
    categoryId: string;
    subcategoryId: string;
  };
  images: string[];
  subcategoriesWantToLearn: Subcategory[];
}>;
