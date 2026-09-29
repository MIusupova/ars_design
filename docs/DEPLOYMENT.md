# Запуск на Hostinger VPS

Инструкция на потом — когда куплен домен и есть доступ к VPS.

1. Купить домен, направить его A-запись на IP вашего VPS.
2. На VPS: установить Node.js 22 LTS, затем `npm i -g pm2`, а также Nginx и Certbot.
3. Склонировать репозиторий в `/var/www/ars-design`.
4. Скопировать `.env.example` в `.env.production` и вписать туда реальный домен:
   `NEXT_PUBLIC_SITE_URL=https://ваш-домен.com`
5. `npm ci && npm run build`
6. `pm2 start ecosystem.config.js && pm2 save && pm2 startup` (последняя команда — чтобы сайт поднимался сам после перезагрузки сервера). Сайт слушает порт 3001 — если на VPS уже есть другой Node-сайт, проверьте `pm2 list`, чтобы не столкнуться портами.
7. Скопировать `deploy/nginx.conf` в `/etc/nginx/sites-available/ars-design`, подставить туда реальный домен вместо `your-domain.com`, создать симлинк в `sites-enabled`, затем `nginx -t && systemctl reload nginx`.
8. `certbot --nginx -d ваш-домен.com -d www.ваш-домен.com` — бесплатный SSL-сертификат.
9. Проверить: сайт открывается по `https://ваш-домен.com` и `https://ваш-домен.com/ru`, `/sitemap.xml` и `/robots.txt` отдают правильный домен. После этого отправить `sitemap.xml` в Google Search Console.

**Важно:** если домен или адрес сайта потом изменится — правки в `.env.production` мало, нужно заново собрать проект: `npm run build && pm2 restart ars-design`. Значение `NEXT_PUBLIC_SITE_URL` "запекается" в сборку на шаге `build`, а не читается заново при каждом запуске.
