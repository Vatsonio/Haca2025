<!-- README.md -->

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
</head>

<br />
<p align="center">
  <img src="./public/banner.jpg" alt="Project Banner" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);" />
</p>

<h1 align="center" class="title">PETS</h1>
<p align="center" class="subtitle">"Друзі, які завжди поруч"</p>

---

<p align="center">
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="vite" />
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="react" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="typescript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="tailwind" />
  </a>
  <a href="https://shadcn.dev/">
    <img src="https://img.shields.io/badge/shadcn-F43F5E?style=flat-square&logo=shadcn&logoColor=white" alt="shadcn" />
  </a>
</p>

---

## Зміст

- [Опис проєкту](#опис-проєкту)
- [Технології](#технології)
- [Функціонал](#функціонал)
- [Скріншоти](#скріншоти)
- [Запуск проєкту](#запуск-проєкту)
- [Автори](#автори)

---

## Опис проєкту

**PETS** — це соціальна платформа, мета якої — об'єднати волонтерів, притулки та небайдужих людей, щоб допомогти постраждалим тваринам під час війни. Це не лише сервіс оголошень, а ціла екосистема взаємодії, підтримки та турботи.

---

## Технології

- **React** + **Vite**
- **TypeScript**
- **TailwindCSS**
- **Shadcn UI**
- **React Router DOM**
- **Zod** (валідація)
- **React Hot Toast** (нотифікації)
- **json-server** (локальна БД для розробки)

---

## Функціонал

### 🔐 Аутентифікація

- Реєстрація/авторизація через Email/Password та Google
- Відновлення паролю
- Збереження токена в localStorage

### 👤 Профіль користувача

- Редагування профілю (без ролі)
- Зміна пароля
- Завантаження аватарки

### 🧑‍🤝‍🧑 Ролі

- **Волонтер** — створює оголошення, допомагає тваринам, зв'язується з притулками
- **Притулок** — приймає заявки на усиновлення, створює оголошення про тварин

### 📢 Оголошення

- CRUD функціонал: створення, редагування, видалення, перегляд
- Фільтрація за категоріями: Всі / Волонтер / Притулок
- Пошук по назві тварини, притулку або волонтеру
- Додавання в обране

### 🐶 Сторінка тварини

- Інформація про тварину
- Відгуки і коментарі

### 🏠 Сторінка притулку

- Інформація про притулок
- Відгуки, коментарі
- Заявка на усиновлення

### 📰 Блог та новини

- Читання статей і новин
- Створення, редагування, видалення власних матеріалів

### 📄 Сторінка "Про нас"

- Інформація про команду, проєкт, партнерів

---

## Скріншоти

<p align="center">
  <img src="image-2.png" width="60%" />
  <img src="image-3.png" width="60%" />
  <img src="image-4.png" width="60%" />
  <img src="image-5.png" width="60%" />
  <img src="image-8.png" width="60%" />
  <img src="image-9.png" width="60%" />
  <img src="image-10.png" width="60%" />
  <img src="image-11.png" width="60%" />
</p>

---

## Запуск проєкту

> Необхідно мати встановлений `pnpm` та `Node.js`

### 1. Встановити pnpm:

```bash
npm install -g pnpm
```

### 2. Клонувати репозиторій:

```bash
git clone https://github.com/Vatsonio/Haca2025.git
```

### 3. Перейти в директорію проєкту:

```bash
cd Haca2025
```

### 4. Встановити залежності:

```bash
pnpm install
```

### 5. Запустити сервер бази даних (json-server):

```bash
pnpm add -D json-server
pnpm run server
```

### 6. Запустити застосунок:

```bash
pnpm run dev
```

---

## Автори

> Команда, яка дійсно любить тварин і хоче змінити світ. Якщо ви хочете долучитися або маєте ідеї — пишіть!
