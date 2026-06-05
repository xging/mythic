# Loading Screen Documentation

## Overview

A beautiful animated loading screen with a "NEXUS" portal theme that integrates into the app during initialization and data fetching operations.

## Quick Start

The loading screen is automatically integrated into your application:

- **App Initialization** → Shows for 1.5 seconds
- **Page Navigation** → Shows for 0.8 seconds when transitioning between routes
- **Manual Control** → Use `useLoading()` hook for custom loading states

## Components Structure

```
src/shared/
├── ui/
│   └── LoadingScreen/              # Main loading screen component
│       ├── LoadingScreen.tsx        # Main component
│       ├── PortalLogo.tsx           # Animated portal logo
│       ├── LoadingText.tsx          # Title and subtitle
│       ├── LoadingProgress.tsx      # Progress bar
│       └── loading-screen.module.scss # Styles
├── contexts/
│   ├── LoadingContext.ts            # React context definition
│   ├── LoadingProvider.tsx          # Provider component
│   └── useLoading.ts                # Hook to use loading context
└── app/
    ├── NavigationHandler.tsx        # Handles route transitions
    └── RootLayout.tsx               # Root layout with handler
```

## How It Works

### 1. **Automatic Loading**

The loading screen appears automatically during:

- App initialization (1.5s)
- Navigation between pages (0.8s)

This is handled automatically by `NavigationHandler` which listens to route changes.

### 2. **Manual Control**

Use the `useLoading` hook to manually control the loading screen from any component:

```typescript
import { useLoading } from '@/shared/contexts';

function MyComponent() {
  const { startLoading, stopLoading, isLoading } = useLoading();

  const handleFetchData = async () => {
    startLoading();
    try {
      const data = await fetchSomeData();
      // Process data...
    } finally {
      stopLoading();
    }
  };

  return (
    <button onClick={handleFetchData} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Fetch Data'}
    </button>
  );
}
```

## API Reference

### `useLoading()` Hook

Returns an object with the following properties:

```typescript
interface LoadingContextType {
  isLoading: boolean; // Current loading state
  startLoading: () => void; // Start showing loading screen
  stopLoading: () => void; // Stop showing loading screen
  setLoading: (loading: boolean) => void; // Set loading state directly
}
```

### `LoadingProvider`

Wraps your entire application to provide loading context. Already integrated in `App.tsx`.

```typescript
<LoadingProvider>
  <App />
</LoadingProvider>
```

## Styling

All styles are in `loading-screen.module.scss`:

### Colors

- **Purple**: `#8b5cf6` - Primary accent
- **Cyan**: `#22d3ee` - Secondary accent
- **Dark Background**: `#05070d` - Dark theme

### Animations

- **Portal Pulse**: Pulsing glow effect on the portal
- **Orbit Rotations**: Three rotating orbit rings
- **Symbol Drawing**: SVG stroke animation
- **Progress Bar**: Sliding animation
- **Text Blink**: Title opacity animation

### Features

- **Responsive**: Uses `clamp()` for responsive font sizing
- **Accessibility**: Respects `prefers-reduced-motion` preference
- **GPU Accelerated**: Pure CSS animations, no JavaScript

## Customization

### Change Duration

Edit the timeouts in the relevant files:

**App initialization** (src/app/App.tsx):

```typescript
const timer = setTimeout(() => {
  stopLoading();
}, 1500); // Milliseconds
```

**Page navigation** (src/app/NavigationHandler.tsx):

```typescript
const timer = setTimeout(() => {
  stopLoading();
}, 800); // Milliseconds
```

### Change Colors

Edit CSS variables in `loading-screen.module.scss`:

```scss
:root {
  --bg: #05070d;
  --text: #f4f7fb;
  --muted: #9aa4b2;
  --purple: #8b5cf6;
  --cyan: #22d3ee;
}
```

### Change Text

Edit `LoadingText.tsx`:

```typescript
<h1>YOUR TITLE</h1>
<p>Your subtitle</p>
```

Edit `LoadingProgress.tsx`:

```typescript
<span>Your loading message...</span>
```

## Browser Support

Works in all modern browsers:

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Performance

- Uses CSS animations (GPU accelerated)
- No JavaScript animations
- Minimal re-renders via React Context
- Automatic cleanup of timers

## Features

✅ Smooth animations with GPU acceleration  
✅ Responsive design  
✅ Accessibility support (reduced motion)  
✅ Zero additional dependencies (uses React Context)  
✅ TypeScript support  
✅ Easy to customize  
✅ Fixed position overlay  
✅ Auto-dismiss on app load  
✅ Manual control via context hook  
✅ Automatic page transition handling

## Related Files

- [Usage Examples](EXAMPLES.md) - Common patterns and use cases
