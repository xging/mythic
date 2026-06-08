# D&D Pet Project

A web application for managing D&D characters, one-shots, and campaigns.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- React Router 7
- Sass (SCSS Modules)

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting & Formatting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Fix issues
npm run format      # Format code
```

## Project Structure

The project follows the [Feature-Sliced Design (FSD)](https://feature-sliced.design/) methodology.

```
src/
├── app/             # Application configuration
│   ├── router/      # Routing configuration
│   ├── styles/      # Global styles (CSS custom properties, layout)
│   ├── App.tsx      # Root app component
│   ├── RootLayout.tsx  # Layout with sidebar + outlet
│   ├── Sidebar.tsx  # Sidebar navigation
│   └── NavigationHandler.tsx # Loading screen on navigation
├── pages/           # Page components
│   ├── home/        # Main characters page (/)
│   ├── placeholder/ # Stub pages for future sections
│   └── not-found/   # 404 page
├── entities/        # Business entities
│   └── character/   # Character model, types, UI components
├── features/        # Feature modules
│   └── character-filters/ # Search, universe/role/alignment filters
└── shared/          # Shared utilities and components
    ├── ui/          # Reusable UI components (Button, LoadingScreen)
    ├── lib/         # Utility functions
    ├── types/       # TypeScript types
    ├── config/      # App configuration (navigation, features, home)
    ├── contexts/    # React contexts (LoadingProvider)
    ├── data/        # Mock data
    └── styles/      # Shared SCSS variables and mixins
```

## Key Design Decisions

- **CSS Modules** for component-level styling
- **Feature-Sliced Design** for scalable architecture
- **Single source of truth** for color maps and shared constants
- **Sidebar navigation** driven by `navigationConfig` with `<Link>` for routing

## License

MIT
