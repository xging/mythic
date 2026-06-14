import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import { LoadingProvider, CharactersProvider, useLoading } from '@dndshka/shared/contexts';
import { featuresConfig } from '@dndshka/shared/config';
import { NexusLoadingScreen } from '../widgets/loading-screen';

const AppContent = () => {
  const { isLoading } = useLoading();

  const isLoadingScreenEnabled = featuresConfig.app.loadingScreen;

  return (
    <>
      {isLoadingScreenEnabled && <NexusLoadingScreen isVisible={isLoading} />}
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
