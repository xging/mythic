import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import { LoadingProvider, CharactersProvider, useLoading } from '@/shared/contexts';
import { LoadingScreen } from '@/shared/ui';
import { featuresConfig } from '@/shared/config';

const AppContent = () => {
  const { isLoading } = useLoading();

  const isLoadingScreenEnabled = featuresConfig.app.loadingScreen;

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
      <CharactersProvider>
        <AppContent />
      </CharactersProvider>
    </LoadingProvider>
  );
};
