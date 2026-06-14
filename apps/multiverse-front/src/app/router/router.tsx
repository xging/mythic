import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../RootLayout';
import { HomePage } from '@/pages/home/home-page';
import { CharacterCreatePage } from '@/pages/character-create/character-create-page';
import { PlaceholderPage } from '@/pages/placeholder/placeholder-page';
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
        path: ROUTES.oneShots,
        element: <PlaceholderPage title="One-Shots" />,
      },
      {
        path: ROUTES.campaigns,
        element: <PlaceholderPage title="Campaigns" />,
      },
      {
        path: ROUTES.character,
        element: <PlaceholderPage title="Character Details" />,
      },
      {
        path: '/characters/create',
        element: <CharacterCreatePage />,
      },
      {
        path: '/explore',
        element: <PlaceholderPage title="Explore" />,
      },
      {
        path: '/universes',
        element: <PlaceholderPage title="Universes" />,
      },
      {
        path: '/teams',
        element: <PlaceholderPage title="Teams" />,
      },
      {
        path: '/stories',
        element: <PlaceholderPage title="Stories" />,
      },
      {
        path: '/locations',
        element: <PlaceholderPage title="Locations" />,
      },
      {
        path: '/items',
        element: <PlaceholderPage title="Items" />,
      },
      {
        path: '/timeline',
        element: <PlaceholderPage title="Timeline" />,
      },
      {
        path: '/my-characters',
        element: <PlaceholderPage title="My Characters" />,
      },
      {
        path: '/my-campaigns',
        element: <PlaceholderPage title="My Campaigns" />,
      },
      {
        path: '/saved',
        element: <PlaceholderPage title="Saved" />,
      },
      {
        path: '/notes',
        element: <PlaceholderPage title="Notes" />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
