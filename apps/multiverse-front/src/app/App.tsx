import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import { LoadingProvider, CharactersProvider, useLoading } from '@dndshka/shared/contexts';
import { LoadingScreen } from '@dndshka/shared/ui';
import { featuresConfig } from '@dndshka/shared/config';

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
