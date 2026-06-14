import { Link, useLocation } from 'react-router-dom';
import { homeConfig } from '@mythic/shared/config/home';
import { navigationConfig } from '@mythic/shared/config/navigation';

const {
  siteName,
  siteTagline,
  userName,
  userLevel,
  mainNavTitle,
  secondaryNavTitle,
  isFooterEnabled,
  isSettingsButtonVisible,
  isUserCardVisible,
  settingsLabel,
} = homeConfig;

export const Sidebar = () => {
  const { pathname } = useLocation();

  const renderNavItem = (
    item: { label: string; icon: string; ariaLabel: string; route?: string },
    activeClass?: string,
  ) => {
    const isActive = item.route ? pathname === item.route : false;
    const className = `nav-link ${activeClass ?? ''} ${isActive ? 'active' : ''}`;

    if (item.route) {
      return (
        <Link
          key={item.label}
          to={item.route}
          className={className}
          aria-label={item.ariaLabel}
          aria-current={isActive ? 'page' : undefined}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </Link>
      );
    }
    return (
      <button key={item.label} type="button" className={className} aria-label={item.ariaLabel}>
        <span className="nav-icon">{item.icon}</span>
        {item.label}
      </button>
    );
  };

  return (
    <aside className="sidebar">
      <Link className="logo" to="/" aria-label="Home">
        <div className="logo-mark">◇</div>
        <div>
          <strong>{siteName}</strong>
          <span>{siteTagline}</span>
        </div>
      </Link>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <p className="nav-title">{mainNavTitle}</p>
        {navigationConfig.main.items
          .filter((item) => item.enabled)
          .map((item) =>
            renderNavItem(item, item.label === 'Characters' ? 'active-purple' : undefined),
          )}
      </nav>

      <nav className="sidebar-nav sidebar-nav-secondary" aria-label="User space">
        <p className="nav-title">{secondaryNavTitle}</p>
        {navigationConfig.secondary.items
          .filter((item) => item.enabled)
          .map((item) => renderNavItem(item))}
      </nav>

      {isFooterEnabled && (
        <div className="sidebar-footer">
          {isSettingsButtonVisible && (
            <button type="button" className="nav-link">
              <span className="nav-icon">⚙</span>
              {settingsLabel}
            </button>
          )}

          {isUserCardVisible && (
            <div className="user-mini">
              <div className="avatar" />
              <div>
                <strong>{userName}</strong>
                <span>Level {userLevel}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
};
