import { Outlet } from 'react-router-dom';
import { NavigationHandler } from './NavigationHandler';

/**
 * Root layout component that wraps all routes
 * Includes NavigationHandler for page transition loading
 */
export const RootLayout = () => {
  return (
    <>
      <NavigationHandler />
      <Outlet />
    </>
  );
};
