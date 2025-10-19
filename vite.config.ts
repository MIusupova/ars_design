// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ars_design/', // например: '/ars-design/'
  plugins: [react()],
});
