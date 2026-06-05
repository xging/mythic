import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import { router } from './router/router';
import { LoadingProvider, useLoading } from '@/shared/contexts';
import { LoadingScreen } from '@/shared/ui';
import { featuresConfig } from '@/shared/config';

const AppContent = () => {
  const { isLoading, stopLoading } = useLoading();

  const isLoadingScreenEnabled = featuresConfig.app.loadingScreen;

  // Auto-hide loading screen after app initialization (first load only)
  useEffect(() => {
    if (!isLoadingScreenEnabled) {
      stopLoading();
      return;
    }

    const timer = setTimeout(() => {
      stopLoading();
    }, 1500);

    return () => clearTimeout(timer);
  }, [isLoadingScreenEnabled, stopLoading]);

  return (
    <>
      {isLoadingScreenEnabled && <LoadingScreen isVisible={isLoading} />}
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
