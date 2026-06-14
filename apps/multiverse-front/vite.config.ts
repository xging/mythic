/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint . --config ../../eslint.config.js',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mythic/shared/config': path.resolve(__dirname, '../../libs/shared/config/src'),
      '@mythic/shared/contexts': path.resolve(__dirname, '../../libs/shared/contexts/src'),
      '@mythic/shared/lib': path.resolve(__dirname, '../../libs/shared/lib/src'),
      '@mythic/shared/styles': path.resolve(__dirname, '../../libs/shared/styles/src'),
      '@mythic/shared/types': path.resolve(__dirname, '../../libs/shared/types/src'),
      '@mythic/shared/ui': path.resolve(__dirname, '../../libs/shared/ui/src'),
      '@mythic/entities/character': path.resolve(__dirname, '../../libs/entities/character/src'),
      '@mythic/features/character-filters': path.resolve(
        __dirname,
        '../../libs/features/character-filters/src',
      ),
    },
  },
});
