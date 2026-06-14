# 🚀 Nx Monorepo — руководство

## 📁 Структура монорепозитория

```
dnd-pet-project/
├── apps/
│   └── multiverse-front/     ← React + Vite (D&D проект)
│       ├── src/
│       │   ├── app/          ← Router, App, RootLayout, Sidebar
│       │   ├── pages/        ← home, character-create, etc.
│       │   └── main.tsx
│       ├── project.json      ← Nx project config
│       └── vite.config.ts
├── libs/
│   ├── shared/
│   │   ├── config/           ← features, navigation, ui, site config
│   │   ├── contexts/         ← CharactersContext, LoadingContext
│   │   ├── lib/              ← color-map, cn, storage
│   │   ├── styles/           ← SCSS variables, mixins
│   │   ├── types/            ← общие типы
│   │   └── ui/               ← Button, LoadingScreen, Container
│   ├── entities/
│   │   └── character/        ← model (types, data) + ui (Card, List, Details)
│   └── features/
│       └── character-filters/← model + ui (SearchInput, RoleFilter, etc.)
├── nx.json                   ← Nx конфигурация
├── package.json              ← Корневой (workspaces + скрипты)
├── tsconfig.base.json        ← Базовый TS конфиг
└── Docs/
    └── MONOREPO_GUIDE.md     ← Этот файл
```

## 🔧 Основные команды

```bash
# Разработка
npm run dev              # nx run multiverse-front:dev
npm run build            # nx run multiverse-front:build
npm run lint             # nx run multiverse-front:lint
npm run format           # prettier --write .
npm run preview          # nx run multiverse-front:preview
npm run storybook        # nx run multiverse-front:storybook
npm run build-storybook  # nx run multiverse-front:build-storybook

# Nx
npm run nx:graph         # показать граф зависимостей
npx nx run-many -t build # собрать все проекты
npx nx reset             # сбросить кэш Nx
```

## 📦 Создание новой библиотеки

### Вариант 1: Вручную (рекомендуется для простых либ)

1. Создать директорию `libs/<group>/<name>/`
2. Добавить `project.json` (скопировать из существующей либы)
3. Добавить код в `src/`
4. Добавить алиас в `tsconfig.base.json` и `vite.config.ts`

### Вариант 2: Через Nx генератор

```bash
npx nx g @nx/react:lib my-lib --directory=libs/shared/my-lib
```

## 🆕 Добавление нового приложения

```bash
# Создать новый React + Vite проект
npx nx g @nx/react:app my-new-app --directory=apps/my-new-app

# Или создать вручную (скопировать multiverse-front)
```

## 🔗 Импорты

### Из библиотек (libs)

```ts
import { Button } from '@mythic/shared/ui';
import { featuresConfig } from '@mythic/shared/config';
import { CharactersProvider } from '@mythic/shared/contexts';
import { colorMap } from '@mythic/shared/lib';
import { Character } from '@mythic/entities/character';
import { useFilteredCharacters } from '@mythic/features/character-filters';
```

### Локальные импорты (внутри приложения)

```ts
import { router } from '@/app/router/router';
import { HomePage } from '@/pages/home/home-page';
```

### В SCSS файлах (для libs)

```scss
// libs/entities/character/src/ui/character-card.module.scss
@use '../../../../shared/styles/src' as *;
```

## 🌱 Как добавить новый проект (для другой тематики)

1. Создать папку `apps/my-other-front/`
2. Скопировать структуру из `apps/multiverse-front/`
3. Подключить нужные библиотеки из `libs/`
4. Настроить `project.json`
5. Запустить: `nx run my-other-front:dev`

## ⏺ Как создать админку для текущего проекта

1. Создать `apps/multiverse-admin/`
2. Переиспользовать `libs/shared/*`, `libs/entities/*`, `libs/features/*`
3. Написать свои page-компоненты
4. Добавить свои фичи в `libs/features/`

## ✅ Feature flags

Feature flags живут в `libs/shared/config/src/features.ts` и доступны всем приложениям:

```ts
import { featuresConfig } from '@mythic/shared/config';
const isEnabled = featuresConfig.app.loadingScreen;
```

## 🧹 Полезные советы

- **Не дублируйте код** — если логика нужна в двух проектах, выносите её в `libs/`
- **SCSS пути** — в `libs/` пути до `shared/styles` надо считать от корня монорепозитория
- **Новые зависимости** — устанавливайте через `npm install --legacy-peer-deps`
- **Storybook** — конфиг живёт в `apps/multiverse-front/.storybook/`

## 📊 Граф зависимостей

```bash
npx nx graph
```

Показывает, какие библиотеки от каких зависят. Помогает найти циклические зависимости.

---

## 🔄 Миграция с FSD на Nx

При миграции Feature-Sliced Design проекта на Nx:

1. **`src/app/`** → остаётся в `apps/multiverse-front/src/app/`
2. **`src/pages/`** → остаётся в `apps/multiverse-front/src/pages/`
3. **`src/shared/*`** → переносится в `libs/shared/*`
4. **`src/entities/*`** → переносится в `libs/entities/*`
5. **`src/features/*`** → переносится в `libs/features/*`
6. Старые файлы удаляются
7. Импорты меняются с `@/shared/...` на `@mythic/shared/...`
