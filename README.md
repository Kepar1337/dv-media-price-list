# DV Media Group — Рекламний прайс-лист

Виробничий Next.js сайт для рекламного прайс-листа мережі Telegram-каналів DV Media Group.

## Технічний стек

- **Next.js 15** (App Router)
- **TypeScript**
- **React 19**
- Самостійно хостовані шрифти через `next/font/google`
- Статична сторінка + серверний API-маршрут `/api/lead`

## Локальне налаштування

### 1. Встановити залежності

```bash
npm install
```

### 2. Запустити dev-сервер

```bash
npm run dev
```

Сайт доступний за адресою [http://localhost:3000](http://localhost:3000).

### 3. Перевірити prod-збірку

```bash
npm run build
npm run start
```

## Змінні середовища

Контактна форма зараз логує заявки на сервері (`console.log`). Щоб підключити реальну відправку, додайте змінні у `.env.local` та на Vercel:

```env
# Telegram bot
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Email (якщо використовуєте Resend)
RESEND_API_KEY=your_resend_key
```

Файл `.env.local` не комітиться (є у `.gitignore`).

## Деплой на Vercel

### Через Vercel CLI

```bash
npx vercel --prod
```

### Через GitHub

1. Запушити репозиторій на GitHub.
2. Підключити репозиторій у [vercel.com](https://vercel.com).
3. Vercel автоматично визначить Next.js.
4. Build Command: `npm run build` (автоматично).
5. Output Directory: `.next` (автоматично).
6. Додати змінні середовища у Vercel Dashboard → Settings → Environment Variables.

## Структура проекту

```
app/
  layout.tsx          — root layout, метадані, шрифти, lang="uk"
  page.tsx            — головна сторінка (server component)
  api/lead/route.ts   — API-маршрут для контактної форми

components/
  Header.tsx          — sticky header з навігацією
  Hero.tsx            — hero секція зі статистикою
  AdFormats.tsx       — 4 рекламних формати
  ChannelList.tsx     — каталог каналів з фільтрацією та сортуванням [client]
  ChannelCard.tsx     — картка одного каналу з цінами
  Packages.tsx        — комбіновані пакети
  Services.tsx        — перелік послуг
  FAQ.tsx             — accordion з питаннями [client]
  Contacts.tsx        — прямі контакти + форма-бриф [client]
  Footer.tsx          — footer

data/
  pricing.ts          — всі дані сайту (TypeScript-типи + контент)

lib/
  format.ts           — fmt() для форматування чисел у uk-UA

styles/
  globals.css         — дизайн-система (dark premium, glass surfaces)

project/              — оригінальний прототип (не деплоїться)
```

## Контактна форма — майбутні інтеграції

API-маршрут `app/api/lead/route.ts` структурований для підключення:

- **Telegram bot** — надсилання повідомлення в чат менеджера
- **Email** — через [Resend](https://resend.com) або Nodemailer
- **CRM** — Pipedrive, HubSpot тощо через REST API
- **Google Sheets** — через `googleapis` пакет

Код-коментарі з прикладами є безпосередньо у `route.ts`.

## Дані та контент

Весь контент знаходиться у `data/pricing.ts`:
- Дані бренду
- Hero статистика
- Рекламні формати
- 13 Telegram-каналів з цінами
- Пакети (орієнтовні — потребують уточнення)
- Послуги
- FAQ
- Контакти

Для оновлення цін або додавання каналів — редагуйте лише `data/pricing.ts`.
