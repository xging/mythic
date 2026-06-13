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
        lintCommand: 'eslint .',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@dndshka/shared/config': path.resolve(__dirname, '../../libs/shared/config/src'),
      '@dndshka/shared/contexts': path.resolve(__dirname, '../../libs/shared/contexts/src'),
      '@dndshka/shared/lib': path.resolve(__dirname, '../../libs/shared/lib/src'),
      '@dndshka/shared/styles': path.resolve(__dirname, '../../libs/shared/styles/src'),
      '@dndshka/shared/types': path.resolve(__dirname, '../../libs/shared/types/src'),
      '@dndshka/shared/ui': path.resolve(__dirname, '../../libs/shared/ui/src'),
      '@dndshka/entities/character': path.resolve(__dirname, '../../libs/entities/character/src'),
      '@dndshka/features/character-filters': path.resolve(
        __dirname,
        '../../libs/features/character-filters/src',
      ),
    },
  },
});
