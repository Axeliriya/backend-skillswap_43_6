import { Subcategory } from "./categories";

export type TeachSkill = {
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
  skillCanTeach: TeachSkill;
  images: string[];
  subcategoriesWantToLearn: Subcategory[];
  likesCount: number;
  likedByUserIds: string[];
  createdAt: string;
};

export const users: User[] = [
  {
    id: "1",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200",
    name: "Алексей Ковалёв",
    location: "Москва",
    birthDate: "12.06.1992",
    gender: "Мужской",
    skillCanTeach: {
      name: "Игра на барабанах",
      categoryId: "1",
      subcategoryId: "101",
      description:
        "Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники, играть ритмы и разбирать песни.",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer_holding_a_drum.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Drummer.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "103", name: "Фотография", categoryId: "1" },
      { id: "201", name: "Английский язык", categoryId: "2" },
    ],
    likesCount: 1,
    likedByUserIds: ["2"],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },

  {
    id: "2",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=200",
    name: "Анна Смирнова",
    location: "Санкт-Петербург",
    birthDate: "28.11.1989",
    gender: "Женский",
    skillCanTeach: {
      name: "Рисование акварелью",
      categoryId: "1",
      subcategoryId: "102",
      description:
        "Люблю акварель за её живость и непредсказуемость. Научу смешивать цвета, работать с водой и делать воздушные заливки.",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Watercolor_Painting_by_Octavius_Oakley.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Untitled_%28First_Abstract_Watercolor%29_by_Wassily_Kandinsky.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "104", name: "Видеомонтаж", categoryId: "1" },
      { id: "301", name: "Йога", categoryId: "3" },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },

  {
    id: "3",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=200",
    name: "Михаил Фёдоров",
    location: "Новосибирск",
    birthDate: "05.09.1997",
    gender: "Мужской",
    skillCanTeach: {
      name: "Портретная фотография",
      categoryId: "1",
      subcategoryId: "103",
      description:
        "Фотографирую людей больше 7 лет. Научу работать со светом, ставить позы и ловить эмоции.",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "202", name: "Испанский язык", categoryId: "2" },
      { id: "105", name: "Креативное письмо", categoryId: "1" },
      { id: "106", name: "Арт-терапия", categoryId: "1" },
    ],
    likesCount: 2,
    likedByUserIds: ["1", "2"],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },
];
