# SkillSwap API — Документация

API для приложения обмена навыками.  
Работает на **Netlify Functions** (Express.js + TypeScript).  
Все данные в памяти (для демо/MVP), после редеплоя сбрасываются.

**Базовый URL:**  
`https://skillswap-api.netlify.app`

CORS открыт полностью (`Access-Control-Allow-Origin: *`).

## Основные эндпоинты — Пользователи

| Метод | Путь                                | Описание                                  | Пример прямой ссылки                                                        |
| ----- | ----------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------- |
| GET   | `/users`                            | Все пользователи                          | [Открыть](https://skillswap-api.netlify.app/users)                          |
| GET   | `/users/:id`                        | Пользователь по ID                        | [Пример ID=1](https://skillswap-api.netlify.app/users/1)                    |
| POST  | `/users`                            | Создать нового пользователя (регистрация) | —                                                                           |
| PUT   | `/users/:id`                        | Обновить профиль                          | —                                                                           |
| POST  | `/users/:id/like`                   | Поставить/снять лайк (toggle)             | —                                                                           |
| GET   | `/users/category/:categoryId`       | Все, кто учит навыку из категории         | [Категория 1](https://skillswap-api.netlify.app/users/category/1)           |
| GET   | `/users/subcategory/:subcategoryId` | Все, кто учит конкретному навыку          | [Подкатегория 103](https://skillswap-api.netlify.app/users/subcategory/103) |

## Эндпоинты — Категории и подкатегории (справочники)

| Метод | Путь                                       | Описание                                   | Прямая ссылка                                                                      |
| ----- | ------------------------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| GET   | `/categories`                              | Все категории                              | [Открыть](https://skillswap-api.netlify.app/categories)                            |
| GET   | `/categories/:categoryId`                  | Одна категория по ID                       | [ID=1](https://skillswap-api.netlify.app/categories/1)                             |
| GET   | `/categories/:categoryId/subcategories`    | Все подкатегории выбранной категории       | [Творчество](https://skillswap-api.netlify.app/categories/1/subcategories)         |
| GET   | `/categories/subcategories/all`            | Все подкатегории сразу (удобно для поиска) | [Все подкатегории](https://skillswap-api.netlify.app/categories/subcategories/all) |
| GET   | `/categories/subcategories/:subcategoryId` | Одна подкатегория                          | [ID=103](https://skillswap-api.netlify.app/categories/subcategories/103)           |

## Создание пользователя

`POST https://skillswap-api.netlify.app/users`

```json
{
  "name": "Мария Иванова",
  "location": "Екатеринбург",
  "birthDate": "15.03.1995",
  "gender": "Женский",
  "avatarUrl": "https://example.com/avatar.jpg",
  "skillCanTeach": {
    "name": "Вязание крючком",
    "description": "Научу с нуля за 3 занятия",
    "categoryId": "7",
    "subcategoryId": "701"
  },
  "images": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  "subcategoriesWantToLearn": [
    { "id": "201", "categoryId": "2" },
    { "id": "301", "categoryId": "3" }
  ]
}
```

Ответ: `201 Created` + полный объект созданного пользователя с `id`.

## Лайк (toggle)

`POST https://skillswap-api.netlify.app/users/:id/like`

```json
{ "likerId": "a1b2c3d4-..." }
```

Ответ:

```json
{ "likesCount": 5, "isLiked": true }
```

## Примеры ответов API (реальные данные с сервера)

### 1. GET /users — все пользователи

```json
[
  {
    "id": "1",
    "avatarUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200",
    "name": "Алексей Ковалёв",
    "location": "Москва",
    "birthDate": "12.06.1992",
    "gender": "Мужской",
    "skillCanTeach": {
      "name": "Игра на барабанах",
      "description": "Привет! Я играю на барабанах уже больше 10 лет...",
      "categoryId": "1",
      "subcategoryId": "101"
    },
    "images": [
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer_holding_a_drum.jpg?width=800",
      "https://commons.wikimedia.org/wiki/Special:FilePath/Drummer.jpg?width=800"
    ],
    "subcategoriesWantToLearn": [
      { "id": "103", "name": "Фотография", "categoryId": "1" },
      { "id": "201", "name": "Английский язык", "categoryId": "2" }
    ],
    "likesCount": 1,
    "likedByUserIds": ["2"]
  }
  //все пользователи
]
```

### 2. GET /users/1 — конкретный пользователь

```json
{
  "id": "1",
  "avatarUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/A_drummer.jpg?width=200",
  "name": "Алексей Ковалёв",
  "location": "Москва",
  "birthDate": "12.06.1992",
  "gender": "Мужской",
  "skillCanTeach": {
    "name": "Игра на барабанах",
    "description": "Привет! Я играю на барабанах уже больше 10 лет...",
    "categoryId": "1",
    "subcategoryId": "101"
  },
  "images": [],
  "subcategoriesWantToLearn": [],
  "likesCount": 1,
  "likedByUserIds": ["2"]
}
```

### 3. GET /categories — все категории

```json
[
  { "id": "1", "name": "Творчество и искусство" },
  { "id": "2", "name": "Иностранные языки" },
  { "id": "3", "name": "Здоровье и лайфстайл" },
  { "id": "4", "name": "Технологии и IT" },
  { "id": "5", "name": "Спорт и активный отдых" },
  { "id": "6", "name": "Кулинария и выпечка" },
  { "id": "7", "name": "Ремесла и handmade" },
  { "id": "8", "name": "Бизнес и финансы" },
  { "id": "9", "name": "Наука и образование" },
  { "id": "10", "name": "Дом и сад" }
]
```

### 4. GET /categories/1/subcategories — подкатегории «Творчество и искусство»

```json
[
  { "id": "101", "name": "Музыка и звук", "categoryId": "1" },
  { "id": "102", "name": "Рисование и иллюстрация", "categoryId": "1" },
  { "id": "103", "name": "Фотография", "categoryId": "1" },
  { "id": "104", "name": "Видеомонтаж", "categoryId": "1" },
  { "id": "105", "name": "Креативное письмо", "categoryId": "1" },
  { "id": "106", "name": "Арт-терапия", "categoryId": "1" },
  { "id": "107", "name": "Графический дизайн", "categoryId": "1" },
  { "id": "108", "name": "Актёрское мастерство", "categoryId": "1" }
]
```

### 5. POST /users — ответ после успешного создания

```json
{
  "id": "c0a80121-7a9f-4c89-b1f4-8e3f9d7e8b2a",
  "avatarUrl": "https://i.pinimg.com/736x/62/01/0d/62010d848b790a2336d1542fcda51789.jpg",
  "name": "Мария Иванова",
  "location": "Екатеринбург",
  "birthDate": "15.03.1995",
  "gender": "Женский",
  "skillCanTeach": {
    "name": "Вязание крючком",
    "description": "Научу с нуля за 3 занятия",
    "categoryId": "7",
    "subcategoryId": "701"
  },
  "images": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  "subcategoriesWantToLearn": [
    { "id": "201", "categoryId": "2" },
    { "id": "301", "categoryId": "3" }
  ],
  "likesCount": 0,
  "likedByUserIds": []
}
```

### 6. POST /users/1/like — ответ после лайка

```json
{
  "likesCount": 2,
  "isLiked": true
}
```

## Полезные утилиты для фронтенда

### Расчёт возраста

```js
function getAge(birthDateStr) {
  const [d, m, y] = birthDateStr.split(".").map(Number);
  const birth = new Date(y, m - 1, d);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d)) age--;
  return age;
}

function declensionOfYears(age) {
  if (age % 10 === 1 && age % 100 !== 11) return `${age} год`;
  if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100))
    return `${age} года`;
  return `${age} лет`;
}

// Использование
console.log(declensionOfYears(getAge("12.06.1992"))); // "33 года"
```

### Axios-инстанс (рекомендуется)

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://skillswap-api.netlify.app",
});

// Примеры
api.get("/categories"); // все категории
api.get("/categories/1/subcategories"); // подкатегории Творчества
api.post("/users", newUserData); // создание пользователя
api.post(`/users/${userId}/like`, { likerId: myId });
```
