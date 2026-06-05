import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../RootLayout';
import { HomePage } from '@/pages/home/home-page';
import { CharacterPage } from '@/pages/character/character-page';
import { NotFoundPage } from '@/pages/not-found/not-found-page';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
      {
        path: ROUTES.characters,
        element: <CharacterPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
