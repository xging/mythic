export interface NavItem {
  label: string;
  icon: string;
  /** Used as aria-label */
  ariaLabel: string;
  /** Whether this item is currently visible/enabled */
  enabled: boolean;
  /** Optional route path for future routing */
  route?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

/**
 * Sidebar navigation configuration.
 * Set `enabled: false` to hide a section from the sidebar.
 * Order matters — items are rendered in the order they appear.
 */
export const navigationConfig: {
  main: NavGroup;
  secondary: NavGroup;
} = {
  main: {
    title: 'Explore',
    items: [
      {
        label: 'Explore',
        icon: '◉',
        ariaLabel: 'Explore',
        enabled: true,
        route: '/explore',
      },
      {
        label: 'Universes',
        icon: '◎',
        ariaLabel: 'Universes',
        enabled: true,
        route: '/universes',
      },
      {
        label: 'Characters',
        icon: '♙',
        ariaLabel: 'Characters',
        enabled: true,
        route: '/characters',
      },
      {
        label: 'Teams',
        icon: '☍',
        ariaLabel: 'Teams',
        enabled: true,
        route: '/teams',
      },
      {
        label: 'Stories',
        icon: '⌘',
        ariaLabel: 'Stories',
        enabled: true,
        route: '/stories',
      },
      {
        label: 'Locations',
        icon: '⌖',
        ariaLabel: 'Locations',
        enabled: true,
        route: '/locations',
      },
      {
        label: 'Items',
        icon: '▣',
        ariaLabel: 'Items',
        enabled: true,
        route: '/items',
      },
      {
        label: 'Timeline',
        icon: '⊕',
        ariaLabel: 'Timeline',
        enabled: true,
        route: '/timeline',
      },
    ],
  },
  secondary: {
    title: 'My Space',
    items: [
      {
        label: 'My Characters',
        icon: '♙',
        ariaLabel: 'My Characters',
        enabled: true,
        route: '/my-characters',
      },
      {
        label: 'My Campaigns',
        icon: '✥',
        ariaLabel: 'My Campaigns',
        enabled: true,
        route: '/my-campaigns',
      },
      {
        label: 'Saved',
        icon: '▱',
        ariaLabel: 'Saved',
        enabled: true,
        route: '/saved',
      },
      {
        label: 'Notes',
        icon: '▤',
        ariaLabel: 'Notes',
        enabled: true,
        route: '/notes',
      },
    ],
  },
};
