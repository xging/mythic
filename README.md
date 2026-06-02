# D&D Pet Project

A web application for managing D&D characters, one-shots, and campaigns.

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- TailwindCSS 4
- React Router 7
- TanStack Query 5

## Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
npm install
# or
bun install
```

### Development

```bash
npm run dev
# or
bun dev
```

### Build

```bash
npm run build
# or
bun build
```

### Linting & Formatting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Fix issues
npm run format      # Format code
```

## Project Structure

```
src/
├── app/           # Application configuration
│   ├── providers/ # Context providers
│   ├── router/    # Routing configuration
│   └── styles/    # Global styles
├── pages/         # Page components
├── features/      # Feature modules
├── shared/        # Shared utilities and components
│   ├── ui/        # Reusable UI components
│   ├── lib/       # Utility functions
│   ├── types/     # TypeScript types
│   └── styles/    # Shared styles
└── main.tsx       # Application entry point
```

## License

MIT
