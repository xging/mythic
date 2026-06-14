import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@mythic/shared/contexts';

/**
 * Automatically shows loading screen during page transitions
 * Add this component inside RouterProvider
 * - First load: 1500ms
 * - Subsequent navigations: 800ms
 */
export const NavigationHandler = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Show loading screen when route changes
    startLoading();

    // Use longer timeout for initial load, shorter for navigation
    const delay = isFirstRender.current ? 1500 : 800;
    isFirstRender.current = false;

    const timer = setTimeout(() => {
      stopLoading();
    }, delay);

    return () => clearTimeout(timer);
  }, [location.pathname, startLoading, stopLoading]);

  return null;
};
