# ARS DESIGN

Сайт компании ARS DESIGN (Ницца) — на Next.js (App Router), TypeScript, SCSS Modules. Двуязычный: `/` — французская версия, `/ru` — русская.

## Разработка

```bash
npm install
npm run dev
```

Откроется на http://localhost:3000.

## Сборка и запуск

```bash
npm run build
npm run start
```

## Переменные окружения

`NEXT_PUBLIC_SITE_URL` — абсолютный адрес сайта (используется в SEO-метаданных, JSON-LD, sitemap.xml, robots.txt). Пока домена нет, используется заглушка `http://localhost:3000`. См. `.env.example`.

## Деплой

Сайт разворачивается на VPS как обычное Node-приложение (PM2 + Nginx). Пошаговая инструкция — в [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).
