# Заметки по проекту

Аудит кодовой базы. Дата: 2025-06-08.

---

## Критичные / баги

- [ ] **Loading screen на старте** — в `App.tsx` только `stopLoading()` через 1.5 с, `startLoading()` при инициализации не вызывается. Фактически экран показывается через `NavigationHandler` (800 мс), а не 1.5 с, как в `Docs/LOADING_SCREEN.md`.
- [ ] **Два конкурирующих таймера загрузки** — `App.tsx` (1500 мс) и `NavigationHandler.tsx` (800 мс) управляют одним состоянием. Свести логику в одно место.
- [ ] **`useFilteredCharacters` почти не мемоизирует** — в `home-page.tsx` в хук передаётся новый объект `options` на каждый рендер, из-за чего `useMemo` постоянно пересчитывается.
- [ ] **Выбранный персонаж не синхронизируется с фильтрами** — если отфильтровать текущего персонажа, `selectedCharacterId` остаётся прежним.
- [ ] **Отсутствует `favicon.svg`** — в `index.html` указан `/favicon.svg`, в `public/` есть только `icons.svg`.
- [ ] **Стили для `Button` не определены** — компонент использует классы `btn`, `btn--primary` и т.д., но таких стилей в CSS/SCSS нет. Страдает страница 404.
- [ ] **Страницы без стилей** — `character-page` и `not-found-page` не имеют CSS-правил.

---

## Архитектура и дублирование

- [ ] **Дублирование `CharacterCard`** — `entities/character/ui/character-card.tsx` (CSS Modules) vs `features/character/components/CharacterCard/character-card.tsx` (глобальные классы).
- [ ] **Дублирование `CharacterDetails` / `DetailsPanel`** — entity с modules vs feature с глобальными классами. `HomePage` использует entity, feature-компоненты не подключены.
- [ ] **Дублирование `CharacterList` / `CharactersList`** — entity-версия используется, feature-версия — мёртвый код.
- [ ] **`colorMap` скопирован в 4+ файлах** — вынести в `shared/lib` или `entities/character/model`.
- [ ] **Мёртвый код в `features/character/`** — `Toolbar`, `CharactersList`, `DetailsPanel`, `CharacterStats` нигде не импортируются. `Toolbar` с другой моделью фильтров (Classes/Roles/Levels).
- [ ] **Пустой `Providers`** — `app/providers/index.tsx` ничего не оборачивает; TanStack Query не подключён.
- [ ] **Неиспользуемые shared-компоненты** — `MainLayout`, `Container`, хуки `useLocalStorage`, `useMediaQuery`, `useLoadingExample`, утилиты `formatDate`, `generateId`.
- [ ] **Два подхода к стилям** — CSS Modules в entities + огромный `app/styles/index.css` (~1250 строк) с глобальными классами. Плюс неиспользуемый barrel `shared/styles/index.scss`.
- [ ] **Legacy CSS `.page-layout`** (~500 строк в `index.css`) — класс нигде не используется (активен `app-layout`).
- [ ] **Конфликтующий `src/index.css`** — дефолтные стили Vite (светлая тема, `text-align: center` на `#root`) импортируются в `app/styles/index.css` и частично перебивают кастомную тёмную тему.

---

## Зависимости и конфигурация

- [ ] **Tailwind CSS в `package.json`, но не используется** — нет плагина в `vite.config.ts`, нет импорта, нет классов в коде.
- [ ] **TanStack Query установлен, но не используется** — данные захардкожены в `shared/data/characters.ts`.
- [ ] **`clsx` установлен, но используется самописный `cn`** — выбрать одно.
- [ ] **`react-router` и `react-router-dom` оба в dependencies** — обычно достаточно `react-router-dom`.
- [ ] **`eslint-plugin-prettier` и `eslint-config-prettier` не подключены** в `eslint.config.js`.
- [ ] **Два lockfile** — `package-lock.json` и `bun.lock`. Выбрать один пакетный менеджер.
- [ ] **Нет CI/CD** — нет `.github/workflows` для lint/build на PR.

---

## Роутинг и навигация

- [ ] **Две разные страницы персонажей** — `/` (`HomePage`, полный UI) и `/characters` (`CharacterPage`, простая сетка). Непонятно, какая основная.
- [ ] **Навигация в sidebar не работает** — кнопки без `Link`/`navigate`, `route` из `navigationConfig` не используется.
- [ ] **Маршруты объявлены, но не реализованы** — в `routes.ts` есть `character`, `oneShots`, `campaigns`, в роутере только `home`, `characters`, `*`.
- [ ] **`HomePage` не использует layout из роутера** — вся разметка sidebar + main + details внутри страницы, а не в `RootLayout`.
- [ ] **README не соответствует структуре** — в README нет `entities/`, хотя FSD уже частично применён.

---

## UX / доступность

- [ ] **Кнопки-заглушки без логики** — Add Character, Sort, Pagination, View toggle, Manage, Close/Bookmark, табы Abilities/Equipment и т.д.
- [ ] **Pagination захардкожена** — страницы 1–5, 12 без привязки к данным.
- [ ] **`featuresConfig` используется частично** — `featuresConfig.filters.enabled` и отдельные флаги фильтров не проверяются в UI.
- [ ] **Дублирование фильтров universe** — dropdown и табы фильтруют одно и то же разными контролами.
- [ ] **Accessibility** — у sidebar-кнопок нет `aria-current`; search input без `aria-label`; несколько элементов с `href="#"`.
- [ ] **Нет адаптивности для `app-layout`** — трёхколоночная сетка без медиазапросов на мобильных.

---

## Типизация и данные

- [ ] **Слабая типизация фильтров** — `universe`, `role`, `alignment` в `FilterOptions` — `string`, хотя есть константы `UNIVERSES`, `ROLES`, `ALIGNMENTS`.
- [ ] **Данные персонажей не в entity-слое** — по FSD мок-данные логичнее в `entities/character/model`, а не в `shared/data/`.
- [ ] **`attributes: Record<string, number>`** — лучше явный тип для STR/DEX/CON/INT/WIS/CHA.
- [ ] **Нет валидации/схем данных** — при переходе на API добавить Zod или аналог.

---

## Тестирование и качество

- [ ] **Нет тестов** — ни unit, ни e2e. Минимум: `getFilteredCharacters`, рендер фильтров, роутинг.
- [ ] **Нет `test` script** в `package.json`.
- [ ] **Нет Storybook / визуальных тестов**.

---

## Мелкие улучшения

- [ ] Закомментированный код в `character-card.tsx` (feature) и `useLoadingExample.ts`.
- [ ] Дублирование `id="searchInput"` — потенциальный конфликт при нескольких input на странице.
- [ ] `index.html` title — `dnd-pet-project` вместо названия из `siteConfig`.
- [ ] `LoadingProvider` стартует с `isLoading: false` — для явного initial load лучше `true` или `startLoading()` при mount.
- [ ] Документация узкая — подробно описан только Loading Screen.

---

## Рекомендуемый порядок работ

| Приоритет | Задача                                                                          |
| --------- | ------------------------------------------------------------------------------- |
| 1         | Убрать дублирование компонентов (один `CharacterCard`, один `CharacterDetails`) |
| 2         | Выбрать одну стратегию стилей (CSS Modules / глобальный CSS / Tailwind)         |
| 3         | Почистить мёртвый код и неиспользуемые зависимости                              |
| 4         | Починить роутинг и sidebar-навигацию                                            |
| 5         | Объединить `/` и `/characters` или чётко разделить роли страниц                 |
| 6         | Добавить тесты для фильтрации и базовый CI                                      |
