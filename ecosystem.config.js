// Конфиг для PM2 — менеджера процессов, который держит Next.js запущенным
// на VPS постоянно и сам перезапускает сайт при падении или перезагрузке сервера.
// Запуск: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'ars-design',
      cwd: '/var/www/ars-design',
      script: 'npm',
      args: 'run start -- -p 3001',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      env: { NODE_ENV: 'production' },
    },
  ],
};
