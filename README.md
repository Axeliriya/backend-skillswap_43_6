# SkillSwap API — Готовое серверless API

API для приложения обмена навыками (SkillSwap).  
Развёрнуто на **Netlify Functions** с использованием Express.js и TypeScript.

**Базовый URL:**  
`https://skillswap-api.netlify.app`

Все маршруты начинаются с `/users`.

Данные хранятся в памяти (демо-версия). После редеплоя изменения сбрасываются.

## Эндпоинты

| Метод | Путь         | Описание                         | Параметры пути | Тело запроса                 | Ответ (успех)                    |
| ----- | ------------ | -------------------------------- | -------------- | ---------------------------- | -------------------------------- |
| GET   | `/users`     | Получить всех пользователей      | —              | —                            | `200` → массив пользователей     |
| GET   | `/users/:id` | Получить пользователя по ID      | `:id` (число)  | —                            | `200` → объект пользователя      |
| PUT   | `/users/:id` | Обновить пользователя (частично) | `:id` (число)  | Частичные поля `User` (JSON) | `200` → обновлённый пользователь |

### Ошибки

- `404` → `{ "message": "Пользователь не найден" }`

### Доступные ID пользователей

1, 2, 3

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

## Примеры использования

### Прямые ссылки в браузере

- Все пользователи: https://skillswap-api.netlify.app/users
- Пользователь №1: https://skillswap-api.netlify.app/users/1
- Пользователь №2: https://skillswap-api.netlify.app/users/2
- Пользователь №3: https://skillswap-api.netlify.app/users/3

### cURL

```bash
# Все пользователи
curl https://skillswap-api.netlify.app/users

# Один пользователь
curl https://skillswap-api.netlify.app/users/1

# Обновить имя пользователя с ID=1
curl -X PUT https://skillswap-api.netlify.app/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Алексей Новый"}'
```

### JavaScript (fetch)

```js
const BASE = "https://skillswap-api.netlify.app";

// Все пользователи
fetch(`${BASE}/users`)
  .then((res) => res.json())
  .then((data) => console.log(data));

// Один пользователь
fetch(`${BASE}/users/1`)
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

### Axios

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://skillswap-api.netlify.app",
});

// Пример использования
async function loadUsers() {
  const { data: users } = await api.get("/users");
  console.log("Всего пользователей:", users.length);

  const { data: user } = await api.get("/users/1");
  console.log("Имя:", user.name);
  console.log("Город:", user.location);
  console.log("Навык:", user.skillCanTeach.name);
}

loadUsers();
```

## Полезные утилиты для фронтенда

### Расчёт возраста по `birthDate`

```js
function getAge(birthDateStr) {
  const [day, month, year] = birthDateStr.split('.').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < day)) age--;
  return age;
}

function declensionOfYears(age) {
  if (age % 10 === 1 && age % 100 !== 11) return `${age} год`;
  if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) return `${age} года`;
  return `${age} лет`;
}

// Пример
const user = /* данные из API */;
const ageText = declensionOfYears(getAge(user.birthDate));
console.log(`Возраст: ${ageText}`); // "Возраст: 33 года"
```
