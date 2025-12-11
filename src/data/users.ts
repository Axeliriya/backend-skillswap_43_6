// src/data/users.ts
// Все изображения — страницы/файлы Wikimedia Commons (Special:FilePath).
// Special:FilePath делает редирект на upload.wikimedia.org и обычно доступен без VPN.
// Для avatarUrl использован параметр ?width=200 (быстрая миниатюра).
// Для images — ?width=800 (подходящий размер для превью/галереи).
// Не забудьте при публикации указывать атрибуцию, если это требуется лицензией.

export type SubcategoryWant = {
  id: number;
  name: string;
  category: string;
};

export type TeachSkill = {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  description: string;
};

export type ImageItem = {
  title: string;
  url: string;
};

export type User = {
  id: number;
  avatarUrl: string;
  name: string;
  location: string;
  birthDate: string;
  gender: "Мужской" | "Женский";
  skillCanTeach: TeachSkill;
  images: ImageItem[];
  subcategoriesWantToLearn: SubcategoryWant[];
};

export const users: User[] = [
  {
    id: 1,
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200",
    name: "Алексей Ковалёв",
    location: "Москва",
    birthDate: "12.06.1992",
    gender: "Мужской",
    skillCanTeach: {
      id: 101,
      name: "Игра на барабанах",
      category: "Творчество и искусство",
      subcategory: "Музыка и звук",
      description:
        "Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники, играть ритмы и разбирать песни.",
    },
    images: [
      {
        title: "Игра на барабанах — мастерство и ритм",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=800",
      },
      {
        title: "Барабанщик с ударным набором",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer_holding_a_drum.jpg?width=800",
      },
      {
        title: "Уличный барабанщик (статуя/портрет)",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Drummer.jpg?width=800",
      },
    ],
    subcategoriesWantToLearn: [
      { id: 201, name: "Фотография", category: "Творчество и искусство" },
      { id: 202, name: "Английский язык", category: "Иностранные языки" },
    ],
  },

  {
    id: 2,
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=200",
    name: "Анна Смирнова",
    location: "Санкт-Петербург",
    birthDate: "28.11.1989",
    gender: "Женский",
    skillCanTeach: {
      id: 102,
      name: "Рисование акварелью",
      category: "Творчество и искусство",
      subcategory: "Рисование и иллюстрация",
      description:
        "Люблю акварель за её живость и непредсказуемость. Научу смешивать цвета, работать с водой и делать воздушные заливки.",
    },
    images: [
      {
        title: "Акварель — пейзаж и свет",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Watercolor_Painting_by_Octavius_Oakley.jpg?width=800",
      },
      {
        title: "Акварельная композиция (монсунные тона)",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=800",
      },
      {
        title: "Абстрактная акварель (плёнка и текстура)",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Untitled_%28First_Abstract_Watercolor%29_by_Wassily_Kandinsky.jpg?width=800",
      },
    ],
    subcategoriesWantToLearn: [
      { id: 301, name: "Видеомонтаж", category: "Творчество и искусство" },
      { id: 302, name: "Йога", category: "Здоровье и лайфстайл" },
    ],
  },

  {
    id: 3,
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=200",
    name: "Михаил Фёдоров",
    location: "Новосибирск",
    birthDate: "05.09.1997",
    gender: "Мужской",
    skillCanTeach: {
      id: 103,
      name: "Портретная фотография",
      category: "Творчество и искусство",
      subcategory: "Фотография",
      description:
        "Фотографирую людей больше 7 лет. Научу работать со светом, ставить позы и ловить эмоции.",
    },
    images: [
      {
        title: "Классический портрет — поза и свет",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=800",
      },
      {
        title: "Реставрированный портрет (классическая техника)",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=800",
      },
      {
        title: "Портрет в классическом стиле (Бодлер/карандаш/фото)",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg?width=800",
      },
    ],
    subcategoriesWantToLearn: [
      { id: 401, name: "Испанский язык", category: "Иностранные языки" },
      { id: 402, name: "Креативное письмо", category: "Творчество и искусство" },
      { id: 403, name: "Арт-терапия", category: "Творчество и искусство" },
    ],
  },
];
