import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import plugin from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    tailwindcss(),
    plugin(),
    VitePWA({
  registerType: 'autoUpdate',
  manifest: false,
  includeAssets: ['fE.png', 'fE3.png'],
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
  },
  devOptions: {
    enabled: true,
  },
}),
  ],
});