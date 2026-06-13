/**
 * Feature flags — enables/disables entire sections of the UI.
 * Set `enabled: false` to hide a feature from the interface.
 * This is the first place to check before removing or adding new blocks.
 */
export const featuresConfig = {
  /** General app-wide features */
  app: {
    /** Loading screen shown on initial app load */
    loadingScreen: true,
    /** Page transitions / animations (future use) */
    pageTransitions: false,
  },
  /** Sidebar — main navigation panel */
  sidebar: {
    enabled: true,
    /** Footer section within sidebar (settings + user card) */
    footer: {
      enabled: true,
      settingsButton: true,
      userCard: true,
    },
  },
  /** Character filters bar */
  filters: {
    enabled: true,
    search: true,
    universe: true,
    role: true,
    alignment: true,
    sort: true,
  },
  /** Universe tabs section */
  universeTabs: {
    enabled: true,
    manageButton: true,
  },
  /** Character grid / list */
  characterGrid: {
    enabled: true,
    pagination: true,
  },
  /** Details panel (right sidebar) */
  detailsPanel: {
    enabled: true,
  },
  /** Header actions */
  headerActions: {
    enabled: true,
    addCharacterButton: true,
    viewToggle: true,
  },
} as const;

/** Type for the features config — useful if you want partial overrides later */
export type FeaturesConfig = typeof featuresConfig;
