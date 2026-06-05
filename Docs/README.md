# Documentation

Welcome to the project documentation! This folder contains comprehensive guides and documentation for the project features.

## 📚 Available Documentation

### [Loading Screen](LOADING_SCREEN.md)

Complete documentation for the NEXUS Loading Screen component, including:

- Architecture and structure
- Automatic and manual loading control
- API reference
- Customization options
- Browser support

### [Loading Screen Examples](EXAMPLES.md)

Practical code examples and patterns for using the loading screen:

- Data fetching patterns
- Button action handlers
- Form submissions
- File uploads
- Multiple async operations
- Best practices

## 🚀 Quick Links

- **Automatic Loading**: The loading screen shows automatically during:
  - App initialization (1.5 seconds)
  - Page navigation (0.8 seconds)

- **Manual Control**: Use `useLoading()` hook in any component to control the loading screen manually

- **Customization**: Modify colors, durations, text, and animations in the style files

## 📖 Getting Started

1. **For basic understanding**, start with [LOADING_SCREEN.md](LOADING_SCREEN.md)
2. **For practical examples**, see [EXAMPLES.md](EXAMPLES.md)
3. **For quick reference**, check the API Reference in [LOADING_SCREEN.md](LOADING_SCREEN.md#api-reference)

## 🎯 Common Tasks

### Show loading during data fetch

See [EXAMPLES.md - Pattern 1: Data Fetching](EXAMPLES.md#pattern-1-data-fetching)

### Show loading during button action

See [EXAMPLES.md - Pattern 2: Button Actions](EXAMPLES.md#pattern-2-button-actions)

### Change loading duration

See [LOADING_SCREEN.md - Customization](LOADING_SCREEN.md#customization)

### Change loading screen appearance

See [LOADING_SCREEN.md - Styling](LOADING_SCREEN.md#styling)

---

For questions or issues, refer to the specific documentation file or the source code in `src/shared/`.
