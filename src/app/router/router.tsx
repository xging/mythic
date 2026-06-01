import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/pages/home/home-page';
import { CharacterPage } from '@/pages/character/character-page';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.character,
    element: <CharacterPage />,
  },
]);