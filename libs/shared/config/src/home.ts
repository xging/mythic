import { siteConfig } from './site';
import { navigationConfig } from './navigation';
import { featuresConfig } from './features';
import { uiConfig } from './ui';

/**
 * Aggregated config for the Home page.
 * Single flat object — no need to import 4 different configs in the component.
 */
export const homeConfig = {
  // Site
  siteName: siteConfig.name,
  siteTagline: siteConfig.tagline,
  userName: siteConfig.user.name,
  userLevel: siteConfig.user.level,

  // Navigation
  mainNavTitle: navigationConfig.main.title,
  mainNavItems: navigationConfig.main.items,
  secondaryNavTitle: navigationConfig.secondary.title,
  secondaryNavItems: navigationConfig.secondary.items,

  // Sidebar footer
  isFooterEnabled: featuresConfig.sidebar.footer.enabled,
  isSettingsButtonVisible: featuresConfig.sidebar.footer.settingsButton,
  isUserCardVisible: featuresConfig.sidebar.footer.userCard,
  settingsLabel: uiConfig.navigation.settingsLabel,

  // Header
  headerTitle: uiConfig.header.title,
  headerSubtitle: uiConfig.header.subtitle,
  addCharacterLabel: uiConfig.header.addCharacterLabel,
  isAddCharacterButtonEnabled: featuresConfig.headerActions.addCharacterButton,
  isViewToggleEnabled: featuresConfig.headerActions.viewToggle,

  // Filters
  isSortEnabled: featuresConfig.filters.sort,
  sortLabel: uiConfig.filters.sortLabel,
  sortDefaultLabel: uiConfig.filters.sortDefault,

  // Universe tabs
  universeTabsTitle: uiConfig.universeTabs.title,
  isManageButtonEnabled: featuresConfig.universeTabs.manageButton,
  manageLabel: uiConfig.universeTabs.manageLabel,
  allLabel: uiConfig.universeTabs.allLabel,

  // Character grid
  emptyStateText: uiConfig.emptyState.text,
  isPaginationEnabled: featuresConfig.characterGrid.pagination,

  // Details panel
  isDetailsPanelEnabled: featuresConfig.detailsPanel.enabled,
} as const;

export type HomeConfig = typeof homeConfig;
