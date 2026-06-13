import { Outlet } from 'react-router-dom';
import { NavigationHandler } from './NavigationHandler';
import { Sidebar } from './Sidebar';

/**
 * Root layout component that wraps all routes.
 * Provides the sidebar navigation and page transition loading.
 */
export const RootLayout = () => {
  return (
    <>
      <NavigationHandler />
      <div className="app-layout">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
