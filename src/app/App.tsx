import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import { router } from './router/router';
import { LoadingProvider, useLoading } from '@/shared/contexts';
import { LoadingScreen } from '@/shared/ui';

const AppContent = () => {
  const { isLoading, stopLoading } = useLoading();

  // Auto-hide loading screen after app initialization (first load only)
  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);

    return () => clearTimeout(timer);
  }, [stopLoading]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <RouterProvider router={router} />
    </>
  );
};

export const App = () => {
  return (
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  );
};
