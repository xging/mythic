/**
 * UI text labels and display settings.
 * Centralized here so they can be easily changed or swapped via CMS later.
 */
export const uiConfig = {
  /** Page header */
  header: {
    title: 'Characters',
    subtitle: 'Explore heroes, villains and legends from across the multiverse.',
    addCharacterLabel: '+ Add Character',
  },
  /** Filters bar labels */
  filters: {
    sortLabel: 'Sort by',
    sortDefault: 'Recently Added',
  },
  /** Universe tabs */
  universeTabs: {
    title: 'Universes',
    manageLabel: 'Manage',
    allLabel: 'All',
  },
  /** Empty state */
  emptyState: {
    text: 'No characters found.',
  },
  /** Navigation */
  navigation: {
    settingsLabel: 'Settings',
  },
} as const;

export type UiConfig = typeof uiConfig;
