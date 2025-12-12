# SkillSwap API — Документация

**Базовый URL:** `https://skillswap-api.netlify.app`
CORS: открыт полностью (`Access-Control-Allow-Origin: *`).
Данные хранятся в памяти — после redeploy всё сбрасывается (MVP / demo).

---

## Содержание

1. [Краткое описание](#краткое-описание)
2. [Аутентификация (JWT)](#аутентификация-jwt)

   - [Эндпоинты auth](#эндпоинты-auth)
   - [Пример регистрации](#пример-регистрации-post-authregister)

3. [Пользователи (users)](#пользователи-users)

   - [Эндпоинты users](#эндпоинты-users)
   - [Пример: создание пользователя (POST /users)](#пример-создания-пользователя-post-users)
   - [Лайк (toggle)](#лайк-toggle)

4. [Категории и подкатегории (справочник)](#категории-и-подкатегории-справочник)

   - [Эндпоинты categories](#эндпоинты-categories)
   - [Пример ответа /categories/tree](#пример-ответа-categoriestree)

5. [Примеры реальных ответов API](#примеры-реальных-ответов-api)
6. [Axios-инстанс с автоматическим токеном (рекомендация)](#axios-инстанс-с-автоматическим-токеном-рекомендация)
7. [Полезные утилиты для фронтенда](#полезные-утилиты-для-фронтенда)

   - [Расчёт возраста и склонение лет](#расчёт-возраста-и-склонение-лет)

---

## Краткое описание

SkillSwap API — это API для приложения обмена навыками. Оно реализовано как сервер (Express.js + TypeScript) и хостится в виде Netlify Functions (demo). Данные хранятся в памяти, поэтому сервер предназначен для разработки и тестирования (MVP). Концепция:

- Пользователи указывают, чему могут научить (skillCanTeach) и чему хотят научиться (subcategoriesWantToLearn).
- Категории/подкатегории — справочники, используются в выпадающих списках и для фильтрации.
- Аутентификация — JWT (access + refresh). В демо — простая схема; в проде — рекомендуются улучшения (хранение хешей refresh, HttpOnly cookies и т.д.).

---

## Аутентификация (JWT)

Все модифицирующие роуты (создать/обновить/лайк) требуют заголовок:

```
Authorization: Bearer <access_token>
```

### Эндпоинты auth

| Метод | Путь                          | Описание                                                     |
| ----- | ----------------------------- | ------------------------------------------------------------ |
| GET   | `/auth/check-email?email=...` | Проверить, занят ли email (возвращает `{ exists: boolean }`) |
| POST  | `/auth/register`              | Регистрация + создание профиля (см. ниже)                    |
| POST  | `/auth/login`                 | Вход — `{ email, password }`                                 |
| POST  | `/auth/refresh`               | Обновить access-токен — `{ refreshToken }`                   |
| POST  | `/auth/logout`                | Выход — `{ email }` (аннулирует токены)                      |

**Примечание:** В демо refresh- и access-токены подписаны и верифицируются; для продакшена рекомендуется использовать разные секреты для access/refresh (`JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET`) и хранить refresh-токены в защищённом виде (хеш).

### Пример регистрации (POST /auth/register)

Тело запроса:

```json
{
  "credentials": {
    "email": "maria@example.com",
    "password": "mysecret123"
  },
  "user": {
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
    "images": ["https://example.com/1.jpg"],
    "subcategoriesWantToLearn": [
      { "id": "201", "categoryId": "2" },
      { "id": "301", "categoryId": "3" }
    ]
  }
}
```

Успешный ответ (`201 Created`):

```json
{
  "user": {
    /* полный профиль пользователя */
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

Логин (`POST /auth/login`) возвращает тот же формат `{ user, token, refreshToken }`.

---

## Пользователи (users)

### Эндпоинты users

| Метод | Путь                                | Описание                                       |
| ----- | ----------------------------------- | ---------------------------------------------- |
| GET   | `/users`                            | Все пользователи                               |
| GET   | `/users/:id`                        | Получить пользователя по ID                    |
| POST  | `/users`                            | Создать пользователя (админ/импорт/интеграции) |
| PUT   | `/users/:id`                        | Обновить профиль (требует токен)               |
| POST  | `/users/:id/like`                   | Лайк / снять лайк (toggle) — требует токен     |
| GET   | `/users/category/:categoryId`       | Все, кто учит навыку из категории              |
| GET   | `/users/subcategory/:subcategoryId` | Все, кто учит конкретной подкатегории          |

Примеры открытых ссылок:

- Все пользователи: `https://skillswap-api.netlify.app/users`
- Пользователь по ID: `https://skillswap-api.netlify.app/users/1`

### Пример: создание пользователя (POST /users)

Тело (пример):

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

Ответ: `201 Created` + полный объект пользователя с `id`, `likesCount: 0`, `likedByUserIds: []`.

### Лайк (toggle)

`POST /users/:id/like`
Тело:

```json
{ "likerId": "a1b2c3d4-..." }
```

Ответ (пример):

```json
{ "likesCount": 5, "isLiked": true }
```

---

## Категории и подкатегории (справочник)

Категории и подкатегории — канонические сущности на бэкенде. Фронтенд запрашивает их для выпадающих списков, а пользователи сохраняют ссылки (id), не произвольные строки.

### Эндпоинты categories

| Метод | Путь                                       | Описание                                        |
| ----- | ------------------------------------------ | ----------------------------------------------- |
| GET   | `/categories`                              | Все категории                                   |
| GET   | `/categories/tree`                         | Дерево категорий + подкатегории (удобно для UI) |
| GET   | `/categories/:id`                          | Одна категория по ID                            |
| GET   | `/categories/:id/subcategories`            | Подкатегории категории                          |
| GET   | `/categories/subcategories/all`            | Все подкатегории (flat)                         |
| GET   | `/categories/subcategories/:subcategoryId` | Одна подкатегория                               |

### Пример ответа GET `/categories/tree`

```json
[
  {
    "id": "1",
    "name": "Творчество и искусство",
    "subcategories": [
      { "id": "101", "name": "Музыка и звук", "categoryId": "1" },
      { "id": "102", "name": "Рисование и иллюстрация", "categoryId": "1" },
      { "id": "103", "name": "Фотография", "categoryId": "1" }
      // ...
    ]
  }
  // остальные категории
]
```

---

## Примеры реальных ответов API

### GET /users (фрагмент)

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
  // ...
]
```

### GET /users/1 (пример)

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

### GET /categories (фрагмент)

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

---

## Axios-инстанс с автоматическим токеном (рекомендуется)

Пример клиентского инстанса, который подставляет access-token из `localStorage`:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://skillswap-api.netlify.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Примеры использования
api.get("/categories/tree");
api.get("/users");
api.post("/auth/login", { email, password });
api.post("/auth/register", payload);
api.post(`/users/1/like`, { likerId: myUserId });
```

---

## Полезные утилиты для фронтенда

### Расчёт возраста по строке `DD.MM.YYYY` и склонение лет

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

// Пример
declensionOfYears(getAge("12.06.1992")); // "33 года"
```
