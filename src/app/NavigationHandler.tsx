import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '@/shared/contexts';

/**
 * Automatically shows loading screen during page transitions
 * Add this component inside RouterProvider
 */
export function NavigationHandler() {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Show loading screen when route changes
    startLoading();

    // Hide loading screen after brief delay to show page transition
    const timer = setTimeout(() => {
      stopLoading();
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname, startLoading, stopLoading]);

  return null;
}
