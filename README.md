# SkillSwap API — Backend на Netlify Functions

Backend для приложения обмена навыками (SkillSwap).  
Реализовано на **Express.js** + **TypeScript**, развёрнутое на **Netlify Functions**.

База данных — массив в памяти (для демо-версии). Все изменения сбрасываются при редеплое.

## Базовый URL

После деплоя API доступно по адресу вашего сайта Netlify:

```
https://your-site-name.netlify.app
```

Все маршруты начинаются с `/users`.

## Эндпоинты

| Метод | Путь         | Описание                         | Параметры пути | Тело запроса                 | Ответ (успех)                    |
| ----- | ------------ | -------------------------------- | -------------- | ---------------------------- | -------------------------------- |
| GET   | `/users`     | Получить всех пользователей      | —              | —                            | `200` → массив пользователей     |
| GET   | `/users/:id` | Получить пользователя по ID      | `:id` (число)  | —                            | `200` → объект пользователя      |
| PUT   | `/users/:id` | Обновить пользователя (частично) | `:id` (число)  | Частичные поля `User` (JSON) | `200` → обновлённый пользователь |

### Ошибки

- `404` — `{ "message": "Пользователь не найден" }`

### Текущие ID пользователей

1, 2, 3 (можно добавить новых в `src/data/users.ts`)

## Структура объекта `User`

```json
{
  "id": 1,
  "avatarUrl": "string",
  "name": "string",
  "location": "string",
  "birthDate": "string (DD.MM.YYYY)",
  "gender": "Мужской" | "Женский",
  "skillCanTeach": {
    "id": 101,
    "name": "string",
    "category": "string",
    "subcategory": "string",
    "description": "string"
  },
  "images": [
    {
      "title": "string",
      "url": "string"
    }
  ],
  "subcategoriesWantToLearn": [
    {
      "id": 201,
      "name": "string",
      "category": "string"
    }
  ]
}
```

## CORS

Разрешены запросы с любого источника (`Access-Control-Allow-Origin: *`).

## Примеры запросов

### cURL

```bash
# Все пользователи
curl https://your-site-name.netlify.app/users

# Пользователь по ID
curl https://your-site-name.netlify.app/users/1

# Обновить имя пользователя с ID=1
curl -X PUT https://your-site-name.netlify.app/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Алексей Новый"}'
```

### JavaScript (fetch)

```js
const BASE = "https://your-site-name.netlify.app";

// Все пользователи
fetch(`${BASE}/users`)
  .then((res) => res.json())
  .then((data) => console.log(data));

// Один пользователь
fetch(`${BASE}/users/2`)
  .then((res) => res.json())
  .then((user) => console.log(user.name));

// Обновление
fetch(`${BASE}/users/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Алексей (обновлён)" }),
})
  .then((res) => res.json())
  .then((updated) => console.log("Обновлено:", updated.name));
```

### Axios (пример для фронтенда)

```js
import axios from "axios";

const API = axios.create({
  baseURL: "https://your-site-name.netlify.app",
});

async function demo() {
  const all = await API.get("/users");
  console.log("Всего пользователей:", all.data.length);

  const user = await API.get("/users/1");
  console.log("Имя:", user.data.name);

  const updated = await API.put("/users/1", { name: "Новое имя" });
  console.log("После обновления:", updated.data.name);
}

demo();
```

## Локальная разработка

```bash
npm install
npm run dev    # запуск с tsx (hot-reload)
```

Локально сервер работает на `http://localhost:8000`.

## Деплой на Netlify

1. Подключите репозиторий к Netlify.
2. Настройки билда (Build settings):
   - **Publish directory**: `.` (точка)
   - **Functions directory**: `netlify/functions`

Netlify автоматически соберёт функции из `netlify/functions/api.ts` с помощью esbuild.

## Структура проекта (основные файлы)

```
netlify/
└── functions/
    └── api.ts              # serverless-http handler
src/
├── app.ts                  # Express app
├── routes/usersRoutes.ts
├── controllers/usersController.ts
└── data/users.ts           # Данные пользователей (в памяти)
netlify.toml
package.json
tsconfig.json
```
