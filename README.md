# SkillSwap API — Документация

**Базовый URL:** `https://skillswap-api.netlify.app`  
CORS: открыт полностью (`Access-Control-Allow-Origin: *`).

API построен на Express.js + TypeScript, работает через Netlify Functions.  
Данные хранятся в Supabase (PostgreSQL + Auth).  
Аутентификация — через Supabase Auth (JWT access + refresh токены).

---

## Содержание

1. [Краткое описание](#краткое-описание)
2. [Аутентификация](#аутентификация)
3. [Пользователи (users)](#пользователи-users)
4. [Категории и подкатегории](#категории-и-подкатегории)
5. [Примеры ответов API](#примеры-ответов-api)
6. [Рекомендации по клиенту (Axios)](#рекомендации-по-клиенту-axios)
7. [Полезные утилиты для фронтенда](#полезные-утилиты-для-фронтенда)

---

## Краткое описание

SkillSwap — приложение для обмена навыками.  
Пользователи указывают:

- **skillCanTeach** — чему могут научить (один навык с названием, описанием, категорией и подкатегорией)
- **subcategoriesWantToLearn** — чему хотят научиться (несколько подкатегорий)

Категории и подкатегории — фиксированные справочники в базе.  
Лайки работают как toggle (поставить / снять).

---

## Аутентификация

Все защищённые роуты требуют заголовок:

```
Authorization: Bearer <access_token>
```

### Эндпоинты auth

| Метод | Путь                | Тело запроса                         | Описание                                               |
| ----- | ------------------- | ------------------------------------ | ------------------------------------------------------ |
| POST  | `/auth/check-email` | `{ "email": "test@example.com" }`    | Проверка, занят ли email (`{ exists: true/false }`)    |
| POST  | `/auth/register`    | `{ email, password, user: { ... } }` | Регистрация + создание профиля                         |
| POST  | `/auth/login`       | `{ email, password }`                | Вход                                                   |
| POST  | `/auth/refresh`     | `{ refreshToken }`                   | Обновление access-токена                               |
| POST  | `/auth/logout`      | —                                    | Выход (на сервере просто ответ, клиент очищает токены) |

### Пример регистрации (POST `/auth/register`)

```json
{
  "email": "maria@example.com",
  "password": "mysecret123",
  "user": {
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
    "subcategoriesWantToLearn": [{ "id": "201" }, { "id": "301" }]
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

Логин (`POST /auth/login`) возвращает тот же формат.

---

## Пользователи (users)

### Эндпоинты users

| Метод | Путь                                | Требует токен? | Описание                                                |
| ----- | ----------------------------------- | -------------- | ------------------------------------------------------- |
| GET   | `/users`                            | Нет            | Все пользователи                                        |
| GET   | `/users/:id`                        | Нет            | Профиль по ID                                           |
| PUT   | `/users/:id`                        | Да             | Обновить свой профиль (поля те же, что при регистрации) |
| POST  | `/users/:id/like`                   | Да             | Поставить / снять лайк                                  |
| GET   | `/users/category/:categoryId`       | Нет            | Пользователи, которые учат навык из категории           |
| GET   | `/users/subcategory/:subcategoryId` | Нет            | Пользователи, которые учат конкретную подкатегорию      |

### Лайк (toggle)

`POST /users/:id/like`  
Тело: не требуется (likerId берётся из токена)

Ответ:

```json
{ "isLiked": true } // или false, если сняли лайк
```

Поле `likesCount` в профиле обновляется автоматически триггером.

---

## Категории и подкатегории

Справочники хранятся в Supabase и неизменяемы.

### Эндпоинты categories

| Метод | Путь                                       | Описание                          |
| ----- | ------------------------------------------ | --------------------------------- |
| GET   | `/categories`                              | Все категории                     |
| GET   | `/categories/tree`                         | Дерево категорий с подкатегориями |
| GET   | `/categories/:categoryId`                  | Одна категория                    |
| GET   | `/categories/:categoryId/subcategories`    | Подкатегории конкретной категории |
| GET   | `/categories/subcategories`                | Все подкатегории (flat список)    |
| GET   | `/categories/subcategories/:subcategoryId` | Одна подкатегория                 |

### Пример ответа `/categories/tree`

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
  // остальные 9 категорий
]
```

---

## Примеры ответов API

### GET `/users` (фрагмент)

```json
[
  {
    "id": "uuid-1234",
    "avatarUrl": "https://.../A_drummer.jpg?width=200",
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
      "https://.../A_drummer.jpg?width=800",
      "https://.../A_drummer_holding_a_drum.jpg?width=800"
    ],
    "subcategoriesWantToLearn": [
      { "id": "103", "name": "Фотография", "categoryId": "1" },
      { "id": "201", "name": "Английский язык", "categoryId": "2" }
    ],
    "likesCount": 3,
    "likedByUserIds": ["uuid-5678", "uuid-9012"],
    "createdAt": "2025-01-15T10:30:00.000Z"
  }
  // ...
]
```

### GET `/users/:id`

Тот же объект, но один пользователь.

### GET `/categories`

```json
[
  { "id": "1", "name": "Творчество и искусство" },
  { "id": "2", "name": "Иностранные языки" }
  // ... до 10
]
```

---

## Рекомендации по клиенту (Axios)

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://skillswap-api.netlify.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Примеры
api.get("/categories/tree");
api.get("/users");
api.post("/auth/login", { email, password });
api.post("/auth/register", payload);
api.post("/users/some-id/like"); // likerId из токена
```

---

## Полезные утилиты для фронтенда

### Расчёт возраста и склонение лет

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
