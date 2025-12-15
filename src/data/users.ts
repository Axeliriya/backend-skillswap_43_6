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
    id: "11111111-1111-1111-1111-111111111111",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200",
    name: "Алексей Ковалёв",
    location: "Москва",
    birthDate: "12.06.1992",
    gender: "Мужской",
    skillCanTeach: {
      name: "Игра на барабанах",
      description:
        "Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники, играть ритмы и разбирать песни.",
      categoryId: "1",
      subcategoryId: "101",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer_holding_a_drum.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Drummer.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["22222222-2222-2222-2222-222222222222"],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=200",
    name: "Михаил Фёдоров",
    location: "Новосибирск",
    birthDate: "05.09.1997",
    gender: "Мужской",
    skillCanTeach: {
      name: "Портретная фотография",
      description:
        "Фотографирую людей больше 7 лет. Научу работать со светом, ставить позы и ловить эмоции.",
      categoryId: "1",
      subcategoryId: "103",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%89tienne_Carjat%2C_Portrait_of_Charles_Baudelaire%2C_circa_1862.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
      {
        id: "105",
        name: "Креативное письмо",
        categoryId: "1",
      },
      {
        id: "106",
        name: "Арт-терапия",
        categoryId: "1",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "11111111-1111-1111-1111-111111111111",
      "22222222-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=200",
    name: "Анна Смирнова",
    location: "Санкт-Петербург",
    birthDate: "28.11.1989",
    gender: "Женский",
    skillCanTeach: {
      name: "Рисование акварелью",
      description:
        "Люблю акварель за её живость и непредсказуемость. Научу смешивать цвета, работать с водой и делать воздушные заливки.",
      categoryId: "1",
      subcategoryId: "102",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Watercolor_Painting_by_Octavius_Oakley.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Artist_painting_watercolor_%28Unsplash%29.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Untitled_%28First_Abstract_Watercolor%29_by_Wassily_Kandinsky.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "104",
        name: "Видеомонтаж",
        categoryId: "1",
      },
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T08:49:21.796311+00:00",
  },
  {
    id: "aaaaaaaa-1111-1111-1111-111111111111",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_a_Man.jpg?width=200",
    name: "Иван Петров",
    location: "Казань",
    birthDate: "18.03.1990",
    gender: "Мужской",
    skillCanTeach: {
      name: "Фотография",
      description:
        "Помогаю освоить портретную и уличную фотографию, работу со светом и композицией.",
      categoryId: "1",
      subcategoryId: "103",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jules_Verne_by_%C3%89tienne_Carjat.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "101", name: "Музыка и звук", categoryId: "1" },
      { id: "202", name: "Испанский язык", categoryId: "2" },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-14T10:12:00.000Z",
  },
  {
    id: "bbbbbbbb-2222-2222-2222-222222222222",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Woman_portrait_1910.jpg?width=200",
    name: "Мария Соколова",
    location: "Екатеринбург",
    birthDate: "07.08.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Рисование и иллюстрация",
      description: "Обучаю академическому рисунку, скетчингу и работе с цветом.",
      categoryId: "1",
      subcategoryId: "102",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Watercolor_Painting_by_Octavius_Oakley.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "104", name: "Креативное письмо", categoryId: "1" },
      { id: "301", name: "Йога", categoryId: "4" },
    ],
    likesCount: 1,
    likedByUserIds: ["aaaaaaaa-1111-1111-1111-111111111111"],
    createdAt: "2025-12-14T11:30:00.000Z",
  },
  {
    id: "cccccccc-3333-3333-3333-333333333333",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Man_portrait_photograph.jpg?width=200",
    name: "Дмитрий Орлов",
    location: "Самара",
    birthDate: "02.12.1987",
    gender: "Мужской",
    skillCanTeach: {
      name: "Видеомонтаж",
      description: "Монтаж видео для YouTube и соцсетей, работа с Premiere Pro.",
      categoryId: "1",
      subcategoryId: "105",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Video_editing_workstation.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Film_editing_room.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Video_camera_setup.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "201", name: "Английский язык", categoryId: "2" },
      { id: "302", name: "Фитнес", categoryId: "4" },
      { id: "401", name: "Публичные выступления", categoryId: "3" },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-14T12:45:00.000Z",
  },
  {
    id: "dddddddd-4444-4444-4444-444444444444",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Young_woman_portrait.jpg?width=200",
    name: "Елена Морозова",
    location: "Пермь",
    birthDate: "21.05.1993",
    gender: "Женский",
    skillCanTeach: {
      name: "Актёрское мастерство",
      description: "Сценическая речь, уверенность и работа с эмоциями.",
      categoryId: "1",
      subcategoryId: "106",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Actors_rehearsal.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Theatre_stage_rehearsal.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "104", name: "Креативное письмо", categoryId: "1" },
      { id: "103", name: "Фотография", categoryId: "1" },
      { id: "202", name: "Испанский язык", categoryId: "2" },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-14T13:10:00.000Z",
  },
  {
    id: "eeeeeeee-5555-5555-5555-555555555555",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Man_portrait_engraving.jpg?width=200",
    name: "Андрей Волков",
    location: "Томск",
    birthDate: "11.01.1985",
    gender: "Мужской",
    skillCanTeach: {
      name: "Бизнес-навыки",
      description: "Консультации по запуску малого бизнеса и управлению проектами.",
      categoryId: "5",
      subcategoryId: "501",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Business_meeting.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "201", name: "Английский язык", categoryId: "2" },
      { id: "105", name: "Видеомонтаж", categoryId: "1" },
    ],
    likesCount: 1,
    likedByUserIds: ["cccccccc-3333-3333-3333-333333333333"],
    createdAt: "2025-12-14T14:00:00.000Z",
  },
  {
    id: "ffffffff-6666-6666-6666-666666666666",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_a_woman_1905.jpg?width=200",
    name: "Ольга Романова",
    location: "Санкт-Петербург",
    birthDate: "09.11.1991",
    gender: "Женский",
    skillCanTeach: {
      name: "Графический дизайн",
      description: "Обучаю основам графического дизайна, композиции и работе в Figma.",
      categoryId: "1",
      subcategoryId: "107",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Graphic_design_workspace.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Typography_samples.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "405", name: "UI/UX дизайн", categoryId: "4" },
      { id: "802", name: "Маркетинг", categoryId: "8" },
    ],
    likesCount: 1,
    likedByUserIds: ["11111111-1111-1111-1111-111111111111"],
    createdAt: "2025-12-15T09:10:00.000Z",
  },

  {
    id: "99999999-7777-7777-7777-777777777777",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Man_portrait_photo_1890.jpg?width=200",
    name: "Сергей Лебедев",
    location: "Новосибирск",
    birthDate: "27.04.1988",
    gender: "Мужской",
    skillCanTeach: {
      name: "Веб-разработка",
      description: "Frontend и backend основы: HTML, CSS, JavaScript и REST API.",
      categoryId: "4",
      subcategoryId: "401",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Web_development_workspace.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Laptop_with_code.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Programming_code_on_screen.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "203", name: "Французский язык", categoryId: "2" },
      { id: "304", name: "Фитнес и тренировки", categoryId: "3" },
      { id: "803", name: "Управление проектами", categoryId: "8" },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "ffffffff-6666-6666-6666-666666666666",
    ],
    createdAt: "2025-12-15T09:25:00.000Z",
  },

  {
    id: "12121212-8888-8888-8888-888888888888",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Woman_portrait_smiling.jpg?width=200",
    name: "Наталья Иванова",
    location: "Тула",
    birthDate: "15.02.1996",
    gender: "Женский",
    skillCanTeach: {
      name: "Йога",
      description: "Практики для начинающих, дыхание, расслабление и баланс.",
      categoryId: "3",
      subcategoryId: "301",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Yoga_pose_outdoor.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "302", name: "Медитация", categoryId: "3" },
      { id: "307", name: "Дыхательные практики", categoryId: "3" },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T09:40:00.000Z",
  },

  {
    id: "34343434-9999-9999-9999-999999999999",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Man_outdoor_portrait.jpg?width=200",
    name: "Павел Никитин",
    location: "Краснодар",
    birthDate: "30.07.1984",
    gender: "Мужской",
    skillCanTeach: {
      name: "Футбол",
      description: "Индивидуальные тренировки, техника и физическая подготовка.",
      categoryId: "5",
      subcategoryId: "501",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Football_training_session.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Football_dribbling.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "504", name: "Бег и марафоны", categoryId: "5" },
      { id: "303", name: "Правильное питание", categoryId: "3" },
    ],
    likesCount: 1,
    likedByUserIds: ["99999999-7777-7777-7777-777777777777"],
    createdAt: "2025-12-15T09:55:00.000Z",
  },

  {
    id: "56565656-aaaa-bbbb-cccc-dddddddddddd",
    avatarUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Woman_reading_book_portrait.jpg?width=200",
    name: "Екатерина Смирнова",
    location: "Ярославль",
    birthDate: "04.09.1994",
    gender: "Женский",
    skillCanTeach: {
      name: "Литература",
      description: "Разбор художественных текстов и развитие критического мышления.",
      categoryId: "9",
      subcategoryId: "907",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Reading_book_at_home.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bookshelf_library.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Woman_reading_classic_book.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Literature_study.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      { id: "201", name: "Английский язык", categoryId: "2" },
      { id: "906", name: "История", categoryId: "9" },
      { id: "105", name: "Креативное письмо", categoryId: "1" },
      { id: "801", name: "Стартапы", categoryId: "8" },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T10:10:00.000Z",
  },
];
