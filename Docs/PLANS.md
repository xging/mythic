# 🏗️ D&D Pet Project — Архитектурный план

> **Дата:** 10.06.2026
> **Стек:** React 19, TypeScript 6, React Router 7, TanStack Query, FSD, SCSS Modules
> **Репозиторий:** [github.com/xging/dndshka](https://github.com/xging/dndshka)

---

## 📦 Текущее состояние проекта

### Существующая архитектура (FSD)

```
src/
├── app/
│   ├── router/router.tsx          — Роутинг (React Router 7)
│   ├── App.tsx                    — Провайдеры + корневой компонент
│   └── styles/                    — Глобальные стили
├── pages/
│   ├── home/                      — Главная (список персонажей + фильтры)
│   ├── character-create/          — Создание персонажа
│   ├── not-found/                 — 404
│   └── placeholder/               — Заглушки для нереализованных страниц
├── entities/
│   └── character/
│       ├── model/ ─ types.ts, data.ts, characters.ts, index.ts
│       └── ui/    ─ CharacterCard, CharacterList, CharacterDetails
├── features/
│   └── character-filters/
│       ├── model/ ─ useFilteredCharacters
│       └── ui/    ─ SearchInput, RoleFilter, AlignmentFilter
├── shared/
│   ├── config/   ─ features.ts, navigation.ts, site.ts, ui.ts
│   ├── contexts/ ─ LoadingContext, CharactersContext
│   ├── lib/      ─ color-map.ts
│   ├── ui/       ─ Button, LoadingScreen
│   └── styles/   ─ SCSS переменные, миксины, медиа
└── main.tsx
```

### Текущие возможности

| Фича                                   | Статус         |
| -------------------------------------- | -------------- |
| Просмотр списка персонажей             | ✅ Реализовано |
| Фильтрация (universe, role, alignment) | ✅ Реализовано |
| Поиск по имени                         | ✅ Реализовано |
| Создание персонажа через форму         | ✅ Реализовано |
| Карточка персонажа                     | ✅ Реализовано |
| Детальная панель (сайдбар)             | ✅ Реализовано |
| Feature flags (featuresConfig)         | ✅ Реализовано |
| Storybook                              | ✅ Настроен    |
| Loading screen                         | ✅ Реализовано |

---

## 📦 План реализации новых фич

### Шаг 1: Установка зависимостей

```bash
npm install @tanstack/react-query
```

### Шаг 2: Настройка TanStack Query

**`src/app/providers/QueryProvider.tsx`** — QueryClientProvider + настройки

- QueryClient с `defaultOptions: { queries: { staleTime: 5 * 60 * 1000 } }`
- Подключить в `App.tsx`

### Шаг 3: Mock API слой

**`src/shared/api/`**

| Файл            | Назначение                                                         |
| --------------- | ------------------------------------------------------------------ |
| `client.ts`     | Базовый клиент с имитацией асинхронности (setTimeout)              |
| `characters.ts` | `getCharacters()`, `getCharacterById(id)`, `createCharacter(data)` |
| `rarity.ts`     | Функции для системы редкости                                       |
| `inventory.ts`  | Функции для инвентаря                                              |
| `battle.ts`     | Функции для симулятора боя                                         |

**Принципы:**

- Все функции возвращают `Promise`
- Используют мок-данные из `entities/*/model/`
- В будущем легко заменяются на реальные fetch/axios запросы

### Шаг 4: LocalStorage persistence

**`src/shared/lib/storage.ts`**

Утилиты:

```ts
getFromStorage<T>(key: string, fallback: T): T
setToStorage<T>(key: string, value: T): void
removeFromStorage(key: string): void
```

Список ключей для хранения:

- `dnd_characters` — созданные пользователем персонажи
- `dnd_favorites` — массив ID избранных
- `dnd_teams` — команды
- `dnd_inventory` — инвентарь

### Шаг 5: Система редкости (Rarity System)

**`src/entities/rarity/`**

| Файл                   | Назначение                                                                |
| ---------------------- | ------------------------------------------------------------------------- |
| `model/types.ts`       | `type Rarity = 'common' \| 'uncommon' \| 'rare' \| 'epic' \| 'legendary'` |
| `model/data.ts`        | Конфиг: цвета, шансы выпадения, множители статов                          |
| `model/constants.ts`   | RARITY_COLORS, RARITY_CHANCES, STAT_MULTIPLIERS                           |
| `lib/random-rarity.ts` | `getRandomRarity(): Rarity` — генерация с весами                          |

**Добавить поле `rarity: Rarity` в `Character`.**

Шансы выпадения:
| Редкость | Шанс |
|----------|------|
| Common | 40% |
| Uncommon | 30% |
| Rare | 18% |
| Epic | 10% |
| Legendary | 2% |

### Шаг 6: Избранное (Favorites)

**`src/features/favorites/`**

| Файл                     | Назначение                                                       |
| ------------------------ | ---------------------------------------------------------------- |
| `model/use-favorites.ts` | Хук: `{ favorites, toggleFavorite, isFavorite, clearFavorites }` |
| `ui/FavoriteButton.tsx`  | Кнопка сердечко (заполненное/пустое)                             |

**Интеграция:**

- `CharacterCard` + `FavoriteButton`
- `CharacterDetails` + `FavoriteButton`
- Сохранение в localStorage

### Шаг 7: Генерация случайного персонажа

**`src/features/random-character/`**

| Файл                            | Назначение                                                           |
| ------------------------------- | -------------------------------------------------------------------- |
| `model/use-random-character.ts` | Хук: генерация случайного персонажа                                  |
| `model/random-name.ts`          | Списки имён (по вселенным/расам)                                     |
| `model/random-attributes.ts`    | Распределение статов (например, стандартный массив 15,14,13,12,10,8) |
| `ui/GenerateRandomButton.tsx`   | Кнопка на странице создания                                          |

**Генерация включает:**

- Случайное имя из списка (по вселенной)
- Случайная роль
- Случайная вселенная
- Случайная редкость
- Случайное распределение атрибутов
- Случайное описание (из шаблонов)

### Шаг 8: Сортировка

**Дополнить `src/features/character-filters/`**

- Обновить `useFilteredCharacters` — добавить параметры `sortBy`, `sortOrder`
- Добавить `SortSelect` в UI фильтров

**Варианты сортировки:**

- Name (A-Z, Z-A)
- Power Level (High-Low, Low-High)
- Universe
- Role
- Rarity (если редкость добавлена)

### Шаг 9: Dynamic Route — Детальная страница персонажа

**`src/pages/character-detail/`**

| Файл                           | Назначение                                |
| ------------------------------ | ----------------------------------------- |
| `character-detail-page.tsx`    | Страница с полной информацией о персонаже |
| `character-detail.module.scss` | Стили                                     |

**Роутер:** `path: '/characters/:id'`

**Функционал:**

- Загрузка персонажа по ID через `useQuery`
- Отображение: имя, вселенная, роль, атрибуты, описание, теги, связи
- Редкость (визуальный индикатор)
- Кнопка "Избранное"
- Кнопка "Сравнить"
- Кнопка "Назад"

### Шаг 10: Сравнение персонажей

**`src/features/compare/`**

| Файл                        | Назначение                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------- |
| `model/use-compare.ts`      | Хук: `{ compareList, addToCompare, removeFromCompare, clearCompare, isInCompare }` |
| `ui/ComparePanel.tsx`       | Панель сравнения (радар/таблица статов)                                            |
| `ui/AddToCompareButton.tsx` | Кнопка добавления                                                                  |

**`src/pages/compare/compare-page.tsx`**

**Функционал:**

- Добавление до 2 (или 3) персонажей
- Сравнение атрибутов (STR, DEX, CON, INT, WIS, CHA)
- Сравнение power level
- Выделение "лучшего" по каждому параметру

### Шаг 11: Инвентарь / Артефакты

**`src/entities/inventory/`**

| Файл                   | Назначение                                                          |
| ---------------------- | ------------------------------------------------------------------- |
| `model/types.ts`       | `Artifact { id, name, description, rarity, statBonus, icon, type }` |
| `model/artifacts.ts`   | Мок-данные (15-20 артефактов)                                       |
| `ui/ArtifactCard.tsx`  | Карточка артефакта с отображением редкости                          |
| `ui/InventoryGrid.tsx` | Сетка артефактов                                                    |

**`src/features/inventory/`**

| Файл                     | Назначение                                                                 |
| ------------------------ | -------------------------------------------------------------------------- |
| `model/use-inventory.ts` | Хук: `{ inventory, addArtifact, removeArtifact, equipArtifact, equipped }` |
| `ui/InventoryPanel.tsx`  | Панель инвентаря на странице персонажа                                     |

**Типы артефактов:**

- Weapon (оружие) — +STR/+DEX
- Armor (броня) — +CON
- Amulet (амулет) — +INT/+WIS
- Ring (кольцо) — +CHA
- Consumable (расходник) — одноразовый эффект

### Шаг 12: Команды персонажей

**`src/entities/team/`**

| Файл              | Назначение                                                |
| ----------------- | --------------------------------------------------------- |
| `model/types.ts`  | `Team { id, name, description, characterIds, createdAt }` |
| `model/teams.ts`  | Мок-данные                                                |
| `ui/TeamCard.tsx` | Карточка команды (список участников, общий power)         |

**`src/features/teams/`**

| Файл                    | Назначение                              |
| ----------------------- | --------------------------------------- |
| `model/use-teams.ts`    | Хук: CRUD команды + localStorage        |
| `ui/TeamForm.tsx`       | Форма создания/редактирования           |
| `ui/TeamMemberSlot.tsx` | Слот для добавления персонажа в команду |

**`src/pages/teams/teams-page.tsx`**

**Ограничения:**

- Максимум 6 персонажей в команде
- У команды есть общий power level (сумма или среднее)

### Шаг 13: Симулятор боя

**`src/features/battle-simulator/`**

| Файл                     | Назначение                                               |
| ------------------------ | -------------------------------------------------------- |
| `model/battle-engine.ts` | Чистая функция: симуляция раунда/всего боя               |
| `model/types.ts`         | `BattleState`, `BattleRound`, `BattleLog`, `Combatant`   |
| `model/formulas.ts`      | Формулы: урон, инициатива, защита, крит                  |
| `model/use-battle.ts`    | Хук: управление состоянием боя (start, nextRound, reset) |
| `ui/BattleSetup.tsx`     | Выбор режима (1v1, team vs team) + выбор участников      |
| `ui/BattleArena.tsx`     | Анимация пошагового боя                                  |
| `ui/BattleResult.tsx`    | Результат с детальной статистикой                        |

**`src/pages/battle/battle-page.tsx`**

**Формулы боя:**

```
Инициатива = DEX + модификатор редкости
Урон = (атакующий стат * множитель редкости) - (защита * 0.5)
Крит. шанс = DEX / 200
Крит. урон = урон * 2
Защита = CON + броня
Здоровье = CON * 10 + уровень * 5
```

### Шаг 14: Реструктуризация роутера

**Обновлённые маршруты (`src/app/router/router.tsx`):**

| Путь                  | Компонент             | Статус   |
| --------------------- | --------------------- | -------- |
| `/`                   | `HomePage`            | ✅ Есть  |
| `/characters/create`  | `CharacterCreatePage` | ✅ Есть  |
| `/characters/:id`     | `CharacterDetailPage` | 🆕 Новый |
| `/characters/compare` | `ComparePage`         | 🆕 Новый |
| `/teams`              | `TeamsPage`           | 🆕 Новый |
| `/battle`             | `BattlePage`          | 🆕 Новый |
| `/inventory`          | `InventoryPage`       | 🆕 Новый |
| `*`                   | `NotFoundPage`        | ✅ Есть  |

---

## 🗂️ Итоговая структура папок после реализации

```
src/
├── app/
│   ├── providers/
│   │   └── QueryProvider.tsx        🆕
│   ├── router/router.tsx
│   ├── App.tsx
│   └── styles/
├── pages/
│   ├── home/
│   ├── character-create/
│   ├── character-detail/            🆕
│   ├── compare/                     🆕
│   ├── teams/                       🆕
│   ├── battle/                      🆕
│   ├── inventory/                   🆕
│   ├── not-found/
│   └── placeholder/
├── entities/
│   ├── character/                   ✅ (существует)
│   ├── rarity/                      🆕
│   ├── inventory/                   🆕
│   └── team/                        🆕
├── features/
│   ├── character-filters/           ✅ + апдейт (сортировка)
│   ├── favorites/                   🆕
│   ├── random-character/            🆕
│   ├── compare/                     🆕
│   ├── inventory/                   🆕
│   ├── teams/                       🆕
│   └── battle-simulator/            🆕
└── shared/
    ├── api/                         🆕
    ├── config/
    ├── contexts/
    ├── lib/                         + storage.ts
    ├── ui/
    └── styles/
```

---

## ⚡ Порядок реализации (приоритет)

| #   | Задача                                          | Зависимости      | Примерное время |
| --- | ----------------------------------------------- | ---------------- | --------------- |
| 1   | Установка @tanstack/react-query + QueryProvider | —                | 15 мин          |
| 2   | Mock API слой (shared/api)                      | #1               | 30 мин          |
| 3   | LocalStorage утилиты (shared/lib/storage.ts)    | —                | 15 мин          |
| 4   | **Генерация случайного персонажа**              | #3 (сохранение)  | 1 час           |
| 5   | **Система редкости** + интеграция               | —                | 1 час           |
| 6   | **Dynamic route + CharacterDetailPage**         | #2               | 1.5 часа        |
| 7   | **Сортировка**                                  | —                | 30 мин          |
| 8   | **Избранное (Favorites)**                       | #3               | 1 час           |
| 9   | **Сравнение персонажей**                        | #2, #6           | 2 часа          |
| 10  | **Инвентарь / Артефакты**                       | #3, #5           | 3 часа          |
| 11  | **Команды персонажей**                          | #3, #6           | 2 часа          |
| 12  | **Симулятор боя**                               | #2, #5, #10, #11 | 4 часа          |

---

## 🔧 Технические решения

### TanStack Query + Mock API

```ts
// shared/api/characters.ts
import { getFromStorage, setToStorage } from '@/shared/lib/storage';

const STORAGE_KEY = 'dnd_characters';

export const getCharacters = async (): Promise<Character[]> => {
  await delay(300);
  return getFromStorage(STORAGE_KEY, initialCharacters);
};

export const getCharacterById = async (id: string): Promise<Character | null> => {
  const characters = await getCharacters();
  return characters.find((c) => c.id === id) ?? null;
};

export const createCharacter = async (data: Omit<Character, 'id'>): Promise<Character> => {
  await delay(500);
  const newCharacter: Character = { ...data, id: crypto.randomUUID() };
  const characters = getFromStorage(STORAGE_KEY, initialCharacters);
  setToStorage(STORAGE_KEY, [...characters, newCharacter]);
  return newCharacter;
};
```

### LocalStorage как cache + persistence

```
CharactersContext
  ↓
useQuery('characters', getCharacters)
  ↓
getCharacters() → localStorage → mock data (если нет сохранённых)
  ↓
при addCharacter → createCharacter() → localStorage + invalidateQueries
```

### Feature flags для новых фич

Обновить `src/shared/config/features.ts`:

```ts
export const featuresConfig = {
  // ... существующие флаги
  favorites: { enabled: true },
  rarity: { enabled: true },
  compare: { enabled: true },
  teams: { enabled: true },
  battle: { enabled: true },
  inventory: { enabled: true },
  randomCharacter: { enabled: true },
};
```

---

## 🔥 Открытые вопросы

1. **Бой:** пошаговый (как в JRPG) или автоматический симулятор с логом?
2. **Артефакты:** сколько максимум экипировано на персонажа? (предлагаю: 4 слота)
3. **Команды:** максимальный размер команды? (предлагаю 4-6)
4. **Сравнение:** 2 или 3 персонажа одновременно? (предлагаю 2, иконки + таблица)
