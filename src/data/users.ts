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
    id: "0acc8860-a931-4317-801c-895941a82ba9",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Trabajadora_agricola_de_Quemchi_%2C_Cultivando_zanahorias.jpg/120px-Trabajadora_agricola_de_Quemchi_%2C_Cultivando_zanahorias.jpgg",
    name: "Оксана Белова",
    location: "Новосибирск",
    birthDate: "09.03.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #1",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "801",
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/9/98/Dino_park_Zg2.jpg"],
    subcategoriesWantToLearn: [
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "701",
        name: "Вязание",
        categoryId: "7",
      },
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "56565656-aaaa-bbbb-cccc-dddddddddddd",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rainie_Yang.jpg/250px-Rainie_Yang.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Mundo_marino_orca.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Mundo_marino_lobomarino_en_troncomovil.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Prachtgefieder_eines_Blauen_Pfaus.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ocean%C3%A1rio_de_Lisboa_%281%29_-_Mar_2010.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
      {
        id: "105",
        name: "Креативное письмо",
        categoryId: "1",
      },
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
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
    id: "bbbbbbbb-2222-2222-2222-222222222222",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Patty_Wu%27s_signing_with_Wacoal_sports_bra_20120616.jpg/250px-Patty_Wu%27s_signing_with_Wacoal_sports_bra_20120616.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Penguins_Loro_Parque_11.jpg",
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
    likesCount: 1,
    likedByUserIds: ["aaaaaaaa-1111-1111-1111-111111111111"],
    createdAt: "2025-12-15T17:10:31.263939+00:00",
  },
  {
    id: "dddddddd-4444-4444-4444-444444444444",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2008TIBE_Day5_Hall1_ActivityCenter2_MaiSaito_in_Signing.jpg/250px-2008TIBE_Day5_Hall1_ActivityCenter2_MaiSaito_in_Signing.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Atlantis_dolphins_1980s.png",
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Panorama_and_Chair-O-Planes_China_Dinosaurs_Park.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "104",
        name: "Видеомонтаж",
        categoryId: "1",
      },
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T17:10:31.263939+00:00",
  },
  {
    id: "ffffffff-6666-6666-6666-666666666666",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/160730_%EC%98%A4%EB%A7%88%EC%9D%B4%EA%B1%B8_%EC%95%84%EB%A6%B0_%EB%B4%89%ED%99%94%EC%9D%80%EC%96%B4%EC%B6%95%EC%A0%9C_5.jpg/250px-160730_%EC%98%A4%EB%A7%88%EC%9D%B4%EA%B1%B8_%EC%95%84%EB%A6%B0_%EB%B4%89%ED%99%94%EC%9D%80%EC%96%B4%EC%B6%95%EC%A0%9C_5.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Dolphin_Marine_Magic.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Nymphicus_hollandicus_-_Forst_01.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "405",
        name: "UI/UX дизайн",
        categoryId: "4",
      },
      {
        id: "802",
        name: "Маркетинг",
        categoryId: "8",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["11111111-1111-1111-1111-111111111111"],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
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
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/Dolphin_Centre%2C_Tin_Can_Bay%2C_Queensland%2C_2016.jpg",
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
    id: "34343434-9999-9999-9999-999999999999",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/D%27Arcy_Norman%2C_Professional_iPhone_Photographer_%284728847341%29.jpg/250px-D%27Arcy_Norman%2C_Professional_iPhone_Photographer_%284728847341%29.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lake_China_Dinosaurs_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Solingen_-_Vogel-_und_Tierpark_17_ies.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "504",
        name: "Бег и марафоны",
        categoryId: "5",
      },
      {
        id: "303",
        name: "Правильное питание",
        categoryId: "3",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["99999999-7777-7777-7777-777777777777"],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
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
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Loro_Parque_Pinguinarium.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pinguins_%283395163396%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T17:10:31.263939+00:00",
  },
  {
    id: "a1a1a1a1-0001-0001-0001-000000000001",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/CAMERAMAN_AU_COUR_DE_TENNIS.jpg/250px-CAMERAMAN_AU_COUR_DE_TENNIS.jpg",
    name: "Илья Морозов",
    location: "Пермь",
    birthDate: "18.03.1990",
    gender: "Мужской",
    skillCanTeach: {
      name: "Фотография",
      description: "Научу работать со светом и композицией.",
      categoryId: "1",
      subcategoryId: "103",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Wenceslas_Hollar_-_Head_of_a_woman%2C_after_Lorenzo_de_Credi.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Forest_path.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "405",
        name: "UI/UX дизайн",
        categoryId: "4",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["ffffffff-6666-6666-6666-666666666666"],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "99999999-7777-7777-7777-777777777777",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2018-10-10_Sport_climbing_Boys%27_combined_at_2018_Summer_Youth_Olympics_%28Martin_Rulsch%29_086.jpg/250px-2018-10-10_Sport_climbing_Boys%27_combined_at_2018_Summer_Youth_Olympics_%28Martin_Rulsch%29_086.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Solingen_-_Vogel-_und_Tierpark_15_ies.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Ciconia_ciconia_-_Forst_-_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Dolphinsurfresize.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "203",
        name: "Французский язык",
        categoryId: "2",
      },
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
      {
        id: "803",
        name: "Управление проектами",
        categoryId: "8",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "ffffffff-6666-6666-6666-666666666666",
    ],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
  {
    id: "a1a1a1a1-0002-0002-0002-000000000002",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Judith_Drotar_2_%28cropped%29.png/250px-Judith_Drotar_2_%28cropped%29.png",
    name: "Мария Белова",
    location: "Казань",
    birthDate: "07.08.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Итальянская кухня",
      description: "Домашняя паста и соусы с нуля.",
      categoryId: "6",
      subcategoryId: "601",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Wenceslas_Hollar_-_Head_of_a_woman%2C_after_Bijlert.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "303",
        name: "Правильное питание",
        categoryId: "3",
      },
      {
        id: "207",
        name: "Итальянский язык",
        categoryId: "2",
      },
      {
        id: "605",
        name: "Кухня народов мира",
        categoryId: "6",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "34343434-9999-9999-9999-999999999999",
      "99999999-7777-7777-7777-777777777777",
    ],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "a1a1a1a1-0004-0004-0004-000000000004",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Christopher_Street_Day_Bad_Mergentheim_2024_16.jpg/250px-Christopher_Street_Day_Bad_Mergentheim_2024_16.jpg",
    name: "Анна Кузнецова",
    location: "Владимир",
    birthDate: "21.01.1993",
    gender: "Женский",
    skillCanTeach: {
      name: "Медитация",
      description: "Осознанность и стресс-менеджмент.",
      categoryId: "3",
      subcategoryId: "302",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Lampe_Eglantine_de_la_manufacture_Daum_en_collaboration_avec_Jacques_Gruber_et_Hippolyte_Morot_des_ateliers_Majorelle.jpg?width=800",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mr._Ber%C3%A1nek_in_workshop.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "306",
        name: "Здоровый сон",
        categoryId: "3",
      },
      {
        id: "307",
        name: "Дыхательные практики",
        categoryId: "3",
      },
      {
        id: "105",
        name: "Креативное письмо",
        categoryId: "1",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["12121212-8888-8888-8888-888888888888"],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "cccccccc-3333-3333-3333-333333333333",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/British_Columbia_Marijuanna_Party_Election_Party_-_Flickr_-_Kris_Krug.jpg/250px-British_Columbia_Marijuanna_Party_Election_Party_-_Flickr_-_Kris_Krug.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Entrance_China_Dinosaurs_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Solingen_-_Vogel-_und_Tierpark_11_ies.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Dolichotis_patagonum_2010.JPG",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "302",
        name: "Медитация",
        categoryId: "3",
      },
      {
        id: "401",
        name: "Веб-разработка",
        categoryId: "4",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T17:10:31.263939+00:00",
  },
  {
    id: "a1a1a1a1-0008-0008-0008-000000000008",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Foto_Envase_F_brica_%2817%29.jpg/250px-Foto_Envase_F_brica_%2817%29.jpg",
    name: "Артём Фролов",
    location: "Челябинск",
    birthDate: "25.10.1989",
    gender: "Мужской",
    skillCanTeach: {
      name: "Бег и марафоны",
      description: "Подготовка к первым забегам.",
      categoryId: "5",
      subcategoryId: "504",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Running_track.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
      {
        id: "503",
        name: "Плавание",
        categoryId: "5",
      },
      {
        id: "306",
        name: "Здоровый сон",
        categoryId: "3",
      },
      {
        id: "805",
        name: "Личные финансы",
        categoryId: "8",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0005-0005-0005-000000000005",
    ],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "eeeeeeee-5555-5555-5555-555555555555",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Otakuthon_2014-_Pirates_get_turned_on_by_Pok%C3%A9mon_romance_%2814843158737%29.jpg/250px-Otakuthon_2014-_Pirates_get_turned_on_by_Pok%C3%A9mon_romance_%2814843158737%29.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Solingen_-_Vogel-_und_Tierpark_04_ies.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "105",
        name: "Креативное письмо",
        categoryId: "1",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["cccccccc-3333-3333-3333-333333333333"],
    createdAt: "2025-12-15T17:10:31.263939+00:00",
  },
  {
    id: "12121212-8888-8888-8888-888888888888",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jennifer_Hawkins_%286781480330%29.jpg/250px-Jennifer_Hawkins_%286781480330%29.jpg",
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
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/2002-10-26_11-15_%28Andalusien_%26_Lissabon_289%29_Lissabon%2C_Ocean%C3%A1rio.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "302",
        name: "Медитация",
        categoryId: "3",
      },
      {
        id: "307",
        name: "Дыхательные практики",
        categoryId: "3",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T17:24:16.451147+00:00",
  },
  {
    id: "a1a1a1a1-0003-0003-0003-000000000003",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chef_cuisinier.jpg/250px-Chef_cuisinier.jpg",
    name: "Дмитрий Соколов",
    location: "Томск",
    birthDate: "02.12.1987",
    gender: "Мужской",
    skillCanTeach: {
      name: "DevOps",
      description: "CI/CD, Docker, базовый Kubernetes.",
      categoryId: "4",
      subcategoryId: "406",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Vase_%27Monnaie_du_Pape%27%2C_designed_by_Jacques_Gruber%2C_made_by_Daum_Freres_%26_Cie.%2C_Nancy%2C_1894-1896%2C_glass_-_Br%C3%B6han_Museum%2C_Berlin_-_DSC03976.JPG?width=800",
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Vase_Tristan_et_Yseult.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain_landscape.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "404",
        name: "Кибербезопасность",
        categoryId: "4",
      },
      {
        id: "803",
        name: "Управление проектами",
        categoryId: "8",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "a1a1a1a1-0005-0005-0005-000000000005",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Le_cordonnier_5.jpg/250px-Le_cordonnier_5.jpg",
    name: "Виктор Орлов",
    location: "Сочи",
    birthDate: "11.05.1985",
    gender: "Мужской",
    skillCanTeach: {
      name: "Плавание",
      description: "Техника и дыхание для взрослых.",
      categoryId: "5",
      subcategoryId: "503",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Vlastimil_Ber%C3%A1nek%2C_October_2020.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "504",
        name: "Бег и марафоны",
        categoryId: "5",
      },
      {
        id: "303",
        name: "Правильное питание",
        categoryId: "3",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "a1a1a1a1-0006-0006-0006-000000000006",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dominguinhos_de_Morais.jpg/250px-Dominguinhos_de_Morais.jpg",
    name: "Егор Плотников",
    location: "Кострома",
    birthDate: "29.09.1991",
    gender: "Мужской",
    skillCanTeach: {
      name: "Столярное дело",
      description: "Работа с деревом и ручным инструментом.",
      categoryId: "7",
      subcategoryId: "703",
    },
    images: [
      "https://commons.wikimedia.org/wiki/Special:FilePath/Woodworking_tools.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Wooden_table.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "1003",
        name: "Ремонт своими руками",
        categoryId: "10",
      },
      {
        id: "1006",
        name: "Организация пространства",
        categoryId: "10",
      },
      {
        id: "702",
        name: "Гончарное дело",
        categoryId: "7",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "a1a1a1a1-0007-0007-0007-000000000007",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Das_Deutschordensschloss_in_Bad_Mergentheim_beim_Pferdemarkt.jpg/250px-Das_Deutschordensschloss_in_Bad_Mergentheim_beim_Pferdemarkt.jpg",
    name: "Полина Захарова",
    location: "Рязань",
    birthDate: "14.06.1998",
    gender: "Женский",
    skillCanTeach: {
      name: "Английский язык",
      description: "Разговорная практика для начинающих.",
      categoryId: "2",
      subcategoryId: "201",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Glass_art_by_Vlastimil_Ber%C3%A1nek.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/WhiteII.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "203",
        name: "Французский язык",
        categoryId: "2",
      },
      {
        id: "907",
        name: "Литература",
        categoryId: "9",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "a1a1a1a1-0010-0010-0010-000000000010",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Guajar%C3%A1-Mirim%2C_RO_%2854006940190%29.jpg/250px-Guajar%C3%A1-Mirim%2C_RO_%2854006940190%29.jpg",
    name: "Александр Воронов",
    location: "Калуга",
    birthDate: "16.02.1982",
    gender: "Мужской",
    skillCanTeach: {
      name: "История",
      description: "История Европы и России в формате диалога.",
      categoryId: "9",
      subcategoryId: "906",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Design_by_El_Lissitzky_1922.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Rivista_wendingen_%28inversioni%29%2C_1921%2C_n._11%2C_copertina_di_El_Lissitzky_02.jpg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Park_in_autumn.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "907",
        name: "Литература",
        categoryId: "9",
      },
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "a1a1a1a1-0009-0009-0009-000000000009",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/130503-A-CV700-017_%288705339608%29.jpg/250px-130503-A-CV700-017_%288705339608%29.jpg",
    name: "Татьяна Гусева",
    location: "Псков",
    birthDate: "03.04.1986",
    gender: "Женский",
    skillCanTeach: {
      name: "Вязание",
      description: "Вяжем спицами и крючком.",
      categoryId: "7",
      subcategoryId: "701",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Manoa_-_Uslar_Pietri.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Rivista_wendingen_%28inversioni%29%2C_1921%2C_n._11%2C_copertina_di_El_Lissitzky_01.jpg?width=800",
    ],
    subcategoriesWantToLearn: [
      {
        id: "704",
        name: "Шитьё и кройка",
        categoryId: "7",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["56565656-aaaa-bbbb-cccc-dddddddddddd"],
    createdAt: "2025-12-15T18:26:26.794213+00:00",
  },
  {
    id: "1413a76e-3f2b-492b-b132-8e14180b0936",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Herstellung_von_Zigarren_in_Handarbeit.jpg/250px-Herstellung_von_Zigarren_in_Handarbeit.jpg",
    name: "Алина Устюгова",
    location: "Санкт-Петербург",
    birthDate: "04.12.2000",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #10",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "2",
      subcategoryId: "202",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/62/White_snakes_in_Iwakuni_White_Snake_Museum_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/White_snake%27s_house_%2C_%E7%99%BD%E8%9B%87%E6%A8%AA%E5%B1%B1%E8%A6%B3%E8%A6%A7%E6%89%80_-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/White_snake%27s_house_%2C_%E7%99%BD%E8%9B%87%E6%A8%AA%E5%B1%B1%E8%A6%B3%E8%A6%A7%E6%89%80_-_panoramio_%281%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/White_snake_in_Iwakuni_White_Snake_Museum_3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/31/White_snakes_in_Iwakuni_White_Snake_Museum_2.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "555cfc4d-55de-46fc-96e0-77ba993045f0",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Rodrigo_Tagle_Manriquez_Caja_Kndy_Colon.png/250px-Rodrigo_Tagle_Manriquez_Caja_Kndy_Colon.png",
    name: "Анна Васильева",
    location: "Уфа",
    birthDate: "26.06.1992",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #2",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "10",
      subcategoryId: "1001",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Dinosaur_Park_In_Winnipeg.1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Dinosaur_Park_In_Winnipeg.2.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
      {
        id: "501",
        name: "Футбол",
        categoryId: "5",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
    ],
    likesCount: 4,
    likedByUserIds: [
      "11111111-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "ffffffff-6666-6666-6666-666666666666",
      "56565656-aaaa-bbbb-cccc-dddddddddddd",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "148b0ffd-4123-4dd9-92d9-bc1a9761f482",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Evelyn_Cusack_Deputy_Head_of_Forecasting_at_Met_Éireann_addressing_the_audience_at_%27An_Irish_Mountain_Gathering%27.jpg",
    name: "Сания Албановна",
    location: "Самара",
    birthDate: "23.12.1991",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #29",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "2",
      subcategoryId: "201",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Golden-eyed_tree_frog_%28Agalychnis_annae%29_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Litoria_phyllochroa.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/BrockenSnowedTreesInSun.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Passer_montanus_malaccensis_%40_Kuala_Lumpur%2C_Malaysia_%281%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
    ],
    likesCount: 0,
    likedByUserIds: [],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "1432ad2a-0fe6-463e-b88e-3984448ed658",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%22Tailleur%22_ambulant.jpg/250px-%22Tailleur%22_ambulant.jpg",
    name: "Алексей Романов",
    location: "Пермь",
    birthDate: "10.10.1988",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #21",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "4",
      subcategoryId: "405",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/22/GOSAU_JAEG_PAUL_KUNST_301.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Paul-jaeg-von-gosau-kunst-2020nr4.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/81/GOSAU_JAEG_PAUL-KUNST-306.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "405",
        name: "UI/UX дизайн",
        categoryId: "4",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "901",
        name: "Математика",
        categoryId: "9",
      },
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
    ],
    likesCount: 4,
    likedByUserIds: [
      "11111111-1111-1111-1111-111111111111",
      "33333333-3333-3333-3333-333333333333",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "dddddddd-4444-4444-4444-444444444444",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "9a4d217c-b749-4d29-a15c-356e111c575d",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Bundesarchiv_Bild_183-1982-0514-011%2C_VEB_Bekleidung_Sternberg%2C_%22Beste_N%C3%A4herin.jpg/250px-Bundesarchiv_Bild_183-1982-0514-011%2C_VEB_Bekleidung_Sternberg%2C_%22Beste_N%C3%A4herin.jpg",
    name: "Злата Васильева",
    location: "Новосибирск",
    birthDate: " 02.04.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #22",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "801",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/21/J16-011721-d.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Jaeg_farmer_pic.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "901",
        name: "Математика",
        categoryId: "9",
      },
    ],
    likesCount: 8,
    likedByUserIds: [
      "22222222-2222-2222-2222-222222222222",
      "aaaaaaaa-1111-1111-1111-111111111111",
      "cccccccc-3333-3333-3333-333333333333",
      "eeeeeeee-5555-5555-5555-555555555555",
      "99999999-7777-7777-7777-777777777777",
      "34343434-9999-9999-9999-999999999999",
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0003-0003-0003-000000000003",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "57c3b121-b3d5-4e46-89b7-21487f90a013",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/070825-N-4238B-052_-_CDR_Elvira_Hall-Robinson%2C_of_the_USPHS_attached_to_the_MSC_hospital_ship_USNS_Comfort_%28T-AH-20%29%2C_provides_veterinary_care_at_the_Bueanaventura_Coliseum.jpg/250px-thumbnail.jpgg",
    name: "Мария Светлова",
    location: "Тюмень",
    birthDate: "26.02.2005",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #3",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "6",
      subcategoryId: "603",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Dinosaur_Park_In_Winnipeg.3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Cactus_du_jardin_botanique_d%27algar_-_panoramio_%281%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Cactus_du_jardin_botanique_d%27algar_-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Jardin_botanique_%2C_les_cactus_d%27algar_-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Jardin_botanique_les_cactus_d%27algar_-_panoramio.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
      {
        id: "701",
        name: "Вязание",
        categoryId: "7",
      },
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
    ],
    likesCount: 9,
    likedByUserIds: [
      "22222222-2222-2222-2222-222222222222",
      "aaaaaaaa-1111-1111-1111-111111111111",
      "cccccccc-3333-3333-3333-333333333333",
      "eeeeeeee-5555-5555-5555-555555555555",
      "99999999-7777-7777-7777-777777777777",
      "34343434-9999-9999-9999-999999999999",
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0003-0003-0003-000000000003",
      "a1a1a1a1-0005-0005-0005-000000000005",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "6fe402b6-5b9c-4488-85e4-f4dfb0a06c5e",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/%22Pousse-pousseur%22.jpg/250px-%22Pousse-pousseur%22.jpg",
    name: "Антон Петров",
    location: "Краснодар",
    birthDate: "02.12.1994",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #23",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "804",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Antoni_Kamie%C5%84ski_-_Przed_ksi%C4%99garni%C4%85.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Antoni_Kamie%C5%84ski_-_Zabawki_dzieci%C4%99ce.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Kamie%C5%84ski-Bison.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Kamie%C5%84ski-Costume.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Kamie%C5%84ski-Spy_%28cropped%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "ffffffff-6666-6666-6666-666666666666",
      "12121212-8888-8888-8888-888888888888",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "627d789c-2168-4a17-a019-3a0fd0b41193",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Woman_graphic_designer_icons_in_Greece.jpg/250px-Woman_graphic_designer_icons_in_Greece.jpg",
    name: "Камилла Лисянская",
    location: "Казань",
    birthDate: "11.06.1994",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #26",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "3",
      subcategoryId: "301",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Tiger-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Bengal_tiger_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_11.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Panthera_tigris_sumatran_subspecies.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Panthera_tigris_altaica_13_-_Buffalo_Zoo.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "501",
        name: "Футбол",
        categoryId: "5",
      },
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["a1a1a1a1-0008-0008-0008-000000000008"],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "397302eb-be71-4ba4-ad5f-39bc1b37719c",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_food_stall%2C_Djemma_el_Fna%2C_Marrakesh_%285368139922%29.jpg/250px-A_food_stall%2C_Djemma_el_Fna%2C_Marrakesh_%285368139922%29.jpg",
    name: "Артур Азарян",
    location: "Екатеринбург",
    birthDate: "16.04.1985",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #25",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "6",
      subcategoryId: "603",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Lion_%28Panthera_leo%29_old_male_Chobe.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Kalahari_lion_%28Panthera_leo%29_male_cub_4_months.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
    ],
    likesCount: 5,
    likedByUserIds: [
      "a1a1a1a1-0005-0005-0005-000000000005",
      "a1a1a1a1-0007-0007-0007-000000000007",
      "11111111-1111-1111-1111-111111111111",
      "33333333-3333-3333-3333-333333333333",
      "bbbbbbbb-2222-2222-2222-222222222222",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "842353c6-ee63-4aed-8289-b40a3dd25bec",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/A_craftsman_at_work_in_Fes_%285365137988%29.jpg/250px-A_craftsman_at_work_in_Fes_%285365137988%29.jpg",
    name: "Максим Хлебовский",
    location: "Москва",
    birthDate: "15.06.1995",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #24",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "3",
      subcategoryId: "304",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Kamie%C5%84ski-Pilsudksi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Kamie%C5%84ski-Podkowinski_maluj%C4%85cy_Sza%C5%82.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Kamie%C5%84ski-Reymont.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Graficzne_portrety_i_wizerunki_J%C3%B3zefa_Pi%C5%82sudskiego_%2822-390-1%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Antoni_Kamie%C5%84ski_-_Portret_Artura_Oppmana_%281900%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
    ],
    likesCount: 4,
    likedByUserIds: [
      "56565656-aaaa-bbbb-cccc-dddddddddddd",
      "a1a1a1a1-0002-0002-0002-000000000002",
      "a1a1a1a1-0004-0004-0004-000000000004",
      "a1a1a1a1-0006-0006-0006-000000000006",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "52b9b81c-2943-4db2-b8fc-d6628d493989",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Vrouwtje_aan_het_breien.jpg/250px-Vrouwtje_aan_het_breien.jpg",
    name: "Анна Порохова",
    location: "Уфа",
    birthDate: "27.01.1992",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #27",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "2",
      subcategoryId: "202",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Horses_grazing_at_Trunkol_meadow%2C_Jammu_and_Kashmir%2C_India_%28crop%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Parco_Naturale_Tre_Cime_horses_3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
      {
        id: "507",
        name: "Танцы",
        categoryId: "5",
      },
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
    ],
    likesCount: 7,
    likedByUserIds: [
      "a1a1a1a1-0009-0009-0009-000000000009",
      "22222222-2222-2222-2222-222222222222",
      "aaaaaaaa-1111-1111-1111-111111111111",
      "cccccccc-3333-3333-3333-333333333333",
      "eeeeeeee-5555-5555-5555-555555555555",
      "99999999-7777-7777-7777-777777777777",
      "34343434-9999-9999-9999-999999999999",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "9b9b12c7-904d-465b-a104-fd97434428e6",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/USMC-15845.jpg/250px-USMC-15845.jpg",
    name: "Есения Соколова",
    location: "Пермь",
    birthDate: "15.05.1992",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #28",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "5",
      subcategoryId: "501",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Apple-tree_blossoms_2017_G3.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Dragonblood_tree_in_Socotra_2.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "501",
        name: "Футбол",
        categoryId: "5",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
      {
        id: "401",
        name: "Веб-разработка",
        categoryId: "4",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
    ],
    likesCount: 3,
    likedByUserIds: [
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0003-0003-0003-000000000003",
      "a1a1a1a1-0005-0005-0005-000000000005",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "baa3d638-a7ee-489d-b3f4-a056a428a8b3",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sean_Astin_1.jpg/640px-Sean_Astin_1.jpg",
    name: "Иван Чернов",
    location: "Самара",
    birthDate: "06.03.1990",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #11",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "804",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Iwakuni_White_Snake_Museum.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Iwakuni_white_snake_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Gr%C3%BCne_Mamba_Nock.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Serpentarium_Blankenberge_Agkistrodon_contortrix_30042015.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Serpentarium_Blankenberge_Anolis_baracoae_30042015_1.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
    ],
    likesCount: 3,
    likedByUserIds: [
      "11111111-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "ffffffff-6666-6666-6666-666666666666",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "432011f8-b7f2-4424-821d-5236fd819a07",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ali_Stone.jpg/250px-Ali_Stone.jpg",
    name: "Алина Сергеева",
    location: "Самара",
    birthDate: "04.05.2000",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #4",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "1",
      subcategoryId: "101",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/78/La_jardin_botanique_d%27algar_-_panoramio.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Le_jardin_botanique_d%27algar_-_panoramio_%281%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Le_jardin_botanique_d%27algar_-_panoramio_%2811%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "405",
        name: "UI/UX дизайн",
        categoryId: "4",
      },
    ],
    likesCount: 9,
    likedByUserIds: [
      "33333333-3333-3333-3333-333333333333",
      "dddddddd-4444-4444-4444-444444444444",
      "12121212-8888-8888-8888-888888888888",
      "a1a1a1a1-0002-0002-0002-000000000002",
      "a1a1a1a1-0006-0006-0006-000000000006",
      "a1a1a1a1-0007-0007-0007-000000000007",
      "a1a1a1a1-0008-0008-0008-000000000008",
      "a1a1a1a1-0009-0009-0009-000000000009",
      "11111111-1111-1111-1111-111111111111",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "c461a2a3-b41d-4b60-8539-16f23b07756d",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Abdul_in_his_shop_in_MHamid_%282358084602%29.jpg/250px-Abdul_in_his_shop_in_MHamid_%282358084602%29.jpg",
    name: "Дмитрий Олешкин",
    location: "Тюмень",
    birthDate: "07.12.2001",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #30",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "804",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Fr%C3%BChling_bl%C3%BChender_Kirschenbaum.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/007_Hyacinth_macaw_couple_under_Pink_Ip%C3%AA_tree_in_Encontro_das_%C3%81guas_State_Park_Photo_by_Giles_Laurent.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "401",
        name: "Веб-разработка",
        categoryId: "4",
      },
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
      {
        id: "507",
        name: "Танцы",
        categoryId: "5",
      },
    ],
    likesCount: 9,
    likedByUserIds: [
      "a1a1a1a1-0006-0006-0006-000000000006",
      "a1a1a1a1-0007-0007-0007-000000000007",
      "a1a1a1a1-0008-0008-0008-000000000008",
      "a1a1a1a1-0009-0009-0009-000000000009",
      "11111111-1111-1111-1111-111111111111",
      "33333333-3333-3333-3333-333333333333",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "dddddddd-4444-4444-4444-444444444444",
      "ffffffff-6666-6666-6666-666666666666",
    ],
    createdAt: "2025-12-15T20:31:50.744184+00:00",
  },
  {
    id: "cfd5cdbb-6cf9-4507-afd0-1d12bad9c2a8",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Fuliru_tailor_in_Uvira_%28cropped%29.jpg/250px-Fuliru_tailor_in_Uvira_%28cropped%29.jpg",
    name: "Екатерина Ушатова",
    location: "Самара",
    birthDate: "16.09.1987",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #5",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "804",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Le_jardin_botanique_d%27algar_-_panoramio_%284%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Le_jardin_botanique_d%27algar_-_panoramio_%289%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Les_cactus_du_jardin_botanique_d%27algar_-_panoramio_%282%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Les_cactus_du_jardin_botanique_d%27algar_-_panoramio_%281%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "202",
        name: "Испанский язык",
        categoryId: "2",
      },
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
      {
        id: "901",
        name: "Математика",
        categoryId: "9",
      },
    ],
    likesCount: 9,
    likedByUserIds: [
      "bbbbbbbb-2222-2222-2222-222222222222",
      "ffffffff-6666-6666-6666-666666666666",
      "56565656-aaaa-bbbb-cccc-dddddddddddd",
      "a1a1a1a1-0004-0004-0004-000000000004",
      "22222222-2222-2222-2222-222222222222",
      "cccccccc-3333-3333-3333-333333333333",
      "99999999-7777-7777-7777-777777777777",
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0005-0005-0005-000000000005",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "211324b6-65a9-4f94-9991-901dc8bc8a06",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Flickr_-_Official_U.S._Navy_Imagery_-_Navy_diver_checks_the_connection_fittings_to_a_surface_supplied_compressed_air_diving_system.jpg/250px-Flickr_-_Official_U.S._Navy_Imagery_-_Navy_diver_checks_the_connection_fittings_to_a_surface_supplied_compressed_air_diving_system.jpg",
    name: "Амир Зайцев",
    location: "Тюмень",
    birthDate: "01.07.1994",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #6",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "7",
      subcategoryId: "701",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Manacor_-_Ma-15_-_Oliv-art_park_16_ies.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Manacor_-_Ma-15_-_Oliv-art_park_15_ies.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "701",
        name: "Вязание",
        categoryId: "7",
      },
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["aaaaaaaa-1111-1111-1111-111111111111"],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "f3ebb9c3-4bc6-4898-9dd3-32f958eb57cd",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/US_Navy_110804-N-KB666-106_Navy_Diver_3rd_Class_Bryan_Myers%2C_left%2C_gives_the_diver_okay_hand_signal_as_Able_Body_Seaman_Howick_Christie.jpg/250px-US_Navy_110804-N-KB666-106_Navy_Diver_3rd_Class_Bryan_Myers%2C_left%2C_gives_the_diver_okay_hand_signal_as_Able_Body_Seaman_Howick_Christie.jpg",
    name: "Артем Волков",
    location: "Москва",
    birthDate: "18.11.1995",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #12",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "9",
      subcategoryId: "901",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Hunter_with_a_killed_blesbok_in_Namibia.png",
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Seven_Years_in_South_Africa%2C_page_259%2C_a_Yochom_of_the_Kalahari_chasing_a_blessbock.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Wild_scenes_of_a_hunter%27s_life%3B_%281855%29_%2814586540940%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "901",
        name: "Математика",
        categoryId: "9",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
    ],
    likesCount: 10,
    likedByUserIds: [
      "22222222-2222-2222-2222-222222222222",
      "aaaaaaaa-1111-1111-1111-111111111111",
      "cccccccc-3333-3333-3333-333333333333",
      "eeeeeeee-5555-5555-5555-555555555555",
      "99999999-7777-7777-7777-777777777777",
      "34343434-9999-9999-9999-999999999999",
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0003-0003-0003-000000000003",
      "a1a1a1a1-0005-0005-0005-000000000005",
      "a1a1a1a1-0007-0007-0007-000000000007",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "3fda967f-7608-4517-b648-58992b571325",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bundesarchiv_Bild_183-1982-0330-013%2C_VEG_Vockerode%2C_Jugendliche_arbeiten_in_Gew%C3%A4chshaus.jpg/250px-Bundesarchiv_Bild_183-1982-0330-013%2C_VEG_Vockerode%2C_Jugendliche_arbeiten_in_Gew%C3%A4chshaus.jpg",
    name: "Сергей Иванов",
    location: "Новосибирск",
    birthDate: "04.02.1987",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #9",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "6",
      subcategoryId: "603",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Damajayabo_CF9A1297_Stgo_de_Cuba.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Der_Park.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/White_snake_in_Iwakuni_White_Snake_Museum_2.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
      {
        id: "701",
        name: "Вязание",
        categoryId: "7",
      },
    ],
    likesCount: 7,
    likedByUserIds: [
      "22222222-2222-2222-2222-222222222222",
      "cccccccc-3333-3333-3333-333333333333",
      "99999999-7777-7777-7777-777777777777",
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0005-0005-0005-000000000005",
      "aaaaaaaa-1111-1111-1111-111111111111",
      "eeeeeeee-5555-5555-5555-555555555555",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "9f54eb1d-2404-4666-b780-34ee8ffe2884",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Selling_Bread-_at_Kinshasa_DRC.jpg/250px-Selling_Bread-_at_Kinshasa_DRC.jpg",
    name: "Полина Саскабидзе",
    location: "Красноярск",
    birthDate: "19.05.1998",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #7",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "5",
      subcategoryId: "501",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Manacor_-_Ma-15_-_Oliv-art_park_14_ies.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Gran_Piedra_Cuba.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "501",
        name: "Футбол",
        categoryId: "5",
      },
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
      {
        id: "603",
        name: "Выпечка и десерты",
        categoryId: "6",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
    ],
    likesCount: 10,
    likedByUserIds: [
      "eeeeeeee-5555-5555-5555-555555555555",
      "34343434-9999-9999-9999-999999999999",
      "a1a1a1a1-0003-0003-0003-000000000003",
      "a1a1a1a1-0007-0007-0007-000000000007",
      "33333333-3333-3333-3333-333333333333",
      "dddddddd-4444-4444-4444-444444444444",
      "12121212-8888-8888-8888-888888888888",
      "a1a1a1a1-0002-0002-0002-000000000002",
      "a1a1a1a1-0006-0006-0006-000000000006",
      "a1a1a1a1-0009-0009-0009-000000000009",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "2351fd41-231a-4375-8dbb-7f4bfc2d72d1",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Alfheidur_Ingadottir%2C_Island._Nordiska_radets_session_i_Kopenhamn_2011_%281%29.jpg/250px-Alfheidur_Ingadottir%2C_Island._Nordiska_radets_session_i_Kopenhamn_2011_%281%29.jpg",
    name: "Екатерина Петросян",
    location: "Пермь",
    birthDate: "13.11.1987",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #13",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "1",
      subcategoryId: "103",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/de/The_Arctic_prairies_-_a_canoe-journey_of_2%2C000_miles_in_search_of_the_caribou%3B_being_the_account_of_a_voyage_to_the_region_north_of_Aylmer_Lake_%281920%29_%2820325540492%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/00/The_Arctic_prairies_-_a_canoe-journey_of_2%2C000_miles_in_search_of_the_caribou%3B_being_the_account_of_a_voyage_to_the_region_north_of_Aylmer_Lake_%281920%29_%2820339981241%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/01/The_Arctic_prairies_-_a_canoe-journey_of_2%2C000_miles_in_search_of_the_caribou%3B_being_the_account_of_a_voyage_to_the_region_north_of_Aylmer_Lake_%281920%29_%2820340073811%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Saltatorium%2C_salter%2C_or_deer_leap.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
    ],
    likesCount: 4,
    likedByUserIds: [
      "33333333-3333-3333-3333-333333333333",
      "dddddddd-4444-4444-4444-444444444444",
      "12121212-8888-8888-8888-888888888888",
      "a1a1a1a1-0002-0002-0002-000000000002",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "2c07b391-de29-4f84-9a68-a2c3cbdecdc8",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Fish_factory%2C_Aralsk%2C_Kazakhstan.jpg/250px-Fish_factory%2C_Aralsk%2C_Kazakhstan.jpg",
    name: "Дмитрий Зайцев",
    location: "Екатеринбург",
    birthDate: "08.09.1997",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #14",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "4",
      subcategoryId: "401",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Bloodless_Giraffe_Hunt_%28Unblutige_Jagd_auf_Giraffen%29_%281911%29_print_in_high_resolution_by_Moriz_Jung._Original_from_the_MET_Museum._Digitally_enhanced_by_rawpixel.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/08/263_of_%27%28The_Wild_Sports_of_Southern_Africa%3B_Being_the_narrative_of_an_expedition_from_the_Cape_of_Good_Hope_..._to_the_tropic_of_Capricorn.%29%27_%2811019321486%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "401",
        name: "Веб-разработка",
        categoryId: "4",
      },
      {
        id: "801",
        name: "Стартапы",
        categoryId: "8",
      },
    ],
    likesCount: 2,
    likedByUserIds: [
      "56565656-aaaa-bbbb-cccc-dddddddddddd",
      "a1a1a1a1-0004-0004-0004-000000000004",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "86d673d1-ae06-4f4f-be03-4a582345defc",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dentist.1.jpg/250px-Dentist.1.jpg",
    name: "Кристина Распутина",
    location: "Самара",
    birthDate: "21.08.2001",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #15",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "3",
      subcategoryId: "301",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Le_Tour_du_monde-08-p388.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Le_Tour_du_monde-08-p396.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/The_American_Museum_journal_%28c1900-%281918%29%29_%2817974277749%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Le_Tour_du_monde_-_15_%28page_44_crop%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
    ],
    likesCount: 5,
    likedByUserIds: [
      "a1a1a1a1-0006-0006-0006-000000000006",
      "a1a1a1a1-0008-0008-0008-000000000008",
      "11111111-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "ffffffff-6666-6666-6666-666666666666",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "2af464f2-803b-4e69-9346-1dece7bf1ee4",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Costa_Rica_23.DSCN3536-new_%2831015348421%29.jpg/250px-Costa_Rica_23.DSCN3536-new_%2831015348421%29.jpg",
    name: "Тамара Соколова",
    location: "Москва",
    birthDate: "09.12.1995",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #8",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "1",
      subcategoryId: "101",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Izola_%2849746555927%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Karavana_lete%C4%8Dih_mlekarn_v_Mariboru_1958.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Construction_of_a_new_Onion_Tower%2C_Prague_-_7670.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "501",
        name: "Футбол",
        categoryId: "5",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
    ],
    likesCount: 5,
    likedByUserIds: [
      "11111111-1111-1111-1111-111111111111",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "ffffffff-6666-6666-6666-666666666666",
      "56565656-aaaa-bbbb-cccc-dddddddddddd",
      "a1a1a1a1-0004-0004-0004-000000000004",
    ],
    createdAt: "2025-12-15T20:54:56.250987+00:00",
  },
  {
    id: "172dc440-8994-4cc5-bc90-64f21ae56a89",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Jonina_Bjartmarz%2C_miljo-_och_samarbetsminister_Island%2C_under_sessionen_i_Kopenhamn_2006.jpg/250px-Jonina_Bjartmarz%2C_miljo-_och_samarbetsminister_Island%2C_under_sessionen_i_Kopenhamn_2006.jpg",
    name: "Юлия Панина",
    location: "Казань",
    birthDate: "13.02.1987",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #16",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "8",
      subcategoryId: "804",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Seven_Years_in_South_Africa%2C_page_155%2C_return_from_the_Gnu_hunt.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Seven_Years_in_South_Africa%2C_page_156%2C_herd_of_gnus.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Seven_Years_in_South_Africa%2C_page_270%2C_gnu_hunting_by_night.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Seven_Years_in_South_Africa%2C_page_306%2C_hunting_the_rock_rabbit.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
    ],
    likesCount: 4,
    likedByUserIds: [
      "a1a1a1a1-0009-0009-0009-000000000009",
      "22222222-2222-2222-2222-222222222222",
      "cccccccc-3333-3333-3333-333333333333",
      "99999999-7777-7777-7777-777777777777",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "370f702c-72b0-41dc-8cdb-8c8b2c196753",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Zangeres_in_restaurant_Wivex_waar_een_autoshow_wordt_gehouden%2C_Bestanddeelnr_252-9153.jpg/250px-Zangeres_in_restaurant_Wivex_waar_een_autoshow_wordt_gehouden%2C_Bestanddeelnr_252-9153.jpg",
    name: "Анна Васильева",
    location: "Санкт-Петербург",
    birthDate: "13.09.1994",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #17",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "3",
      subcategoryId: "301",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Postcard_of_Celje_%2852%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Pregledovanje_javne_razsvetljave_v_Celju_1960_%282%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Pred_skladi%C5%A1%C4%8Dem_Potro%C5%A1nika_v_Celju_1958.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postcard_of_Celje_%2856%29.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "301",
        name: "Йога",
        categoryId: "3",
      },
      {
        id: "1002",
        name: "Интерьерный дизайн",
        categoryId: "10",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
      {
        id: "901",
        name: "Математика",
        categoryId: "9",
      },
    ],
    likesCount: 3,
    likedByUserIds: [
      "aaaaaaaa-1111-1111-1111-111111111111",
      "eeeeeeee-5555-5555-5555-555555555555",
      "34343434-9999-9999-9999-999999999999",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "e21bed1f-08e9-4cee-999f-b4f8da69ce49",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D8%B1%D8%AC%D9%84_%D9%8A%D9%82%D9%88%D9%85_%D8%A8%D8%B9%D9%85%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%88%D8%B2%D9%86.jpg/250px-%D8%B1%D8%AC%D9%84_%D9%8A%D9%82%D9%88%D9%85_%D8%A8%D8%B9%D9%85%D9%84%D9%8A%D8%A9_%D8%A7%D9%84%D9%88%D8%B2%D9%86.jpg",
    name: "Константин Серегин",
    location: "Тюмень",
    birthDate: "26.06.1986",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #20",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "1",
      subcategoryId: "101",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Bear-Baiting_Billy%27s_Fortune_Punch_22Jan1913.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/William_Haselden%2C_Dropping_the_pilot%2C_1909.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Johnny_Hudgins_drawing_-_Blackbirds_in_London_Pavilion_1927.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "101",
        name: "Музыка и звук",
        categoryId: "1",
      },
      {
        id: "304",
        name: "Фитнес и тренировки",
        categoryId: "3",
      },
    ],
    likesCount: 1,
    likedByUserIds: ["56565656-aaaa-bbbb-cccc-dddddddddddd"],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "cc35c3dc-5541-4da4-afbe-d305bb96ddce",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bundesarchiv_Bild_183-1982-0330-013%2C_VEG_Vockerode%2C_Jugendliche_arbeiten_in_Gew%C3%A4chshaus.jpg/250px-Bundesarchiv_Bild_183-1982-0330-013%2C_VEG_Vockerode%2C_Jugendliche_arbeiten_in_Gew%C3%A4chshaus.jpg",
    name: "Рушания Мухамедова",
    location: "Самара",
    birthDate: "09.05.2001",
    gender: "Женский",
    skillCanTeach: {
      name: "Навык #18",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "2",
      subcategoryId: "201",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Servisna_delavnica_celjskega_Avto-moto_Celje_1960_%282%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/14/%C4%8Cistilec_%C4%8Devljev_v_Celju_1957.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "201",
        name: "Английский язык",
        categoryId: "2",
      },
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
    ],
    likesCount: 3,
    likedByUserIds: [
      "a1a1a1a1-0001-0001-0001-000000000001",
      "a1a1a1a1-0003-0003-0003-000000000003",
      "a1a1a1a1-0005-0005-0005-000000000005",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
  {
    id: "2bf12b3b-f744-4520-8b75-820387424e92",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Work_hard_and_smile.JPG/250px-Work_hard_and_smile.JPG",
    name: "Максим Орлов",
    location: "Москва",
    birthDate: "19.06.1988",
    gender: "Мужской",
    skillCanTeach: {
      name: "Навык #19",
      description: "Описание навыка для тестового пользователя.",
      categoryId: "1",
      subcategoryId: "103",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Izola_%2849746555927%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Karavana_lete%C4%8Dih_mlekarn_v_Mariboru_1958.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Construction_of_a_new_Onion_Tower%2C_Prague_-_7670.jpg",
    ],
    subcategoriesWantToLearn: [
      {
        id: "103",
        name: "Фотография",
        categoryId: "1",
      },
      {
        id: "906",
        name: "История",
        categoryId: "9",
      },
      {
        id: "804",
        name: "Инвестиции",
        categoryId: "8",
      },
      {
        id: "1001",
        name: "Садоводство",
        categoryId: "10",
      },
    ],
    likesCount: 7,
    likedByUserIds: [
      "a1a1a1a1-0007-0007-0007-000000000007",
      "11111111-1111-1111-1111-111111111111",
      "33333333-3333-3333-3333-333333333333",
      "bbbbbbbb-2222-2222-2222-222222222222",
      "dddddddd-4444-4444-4444-444444444444",
      "ffffffff-6666-6666-6666-666666666666",
      "12121212-8888-8888-8888-888888888888",
    ],
    createdAt: "2025-12-15T20:46:55.744682+00:00",
  },
];
