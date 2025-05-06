import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ⚠️ Replace 'hello' with your actual GitHub repo name
export default defineConfig({
  base: '/hello/',
  plugins: [react()],
});
