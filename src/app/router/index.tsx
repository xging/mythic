import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/shared/components';
import { CharactersPage } from '@/pages/characters/CharactersPage';
import { CharacterPage } from '@/pages/CharacterPage';
import { OneShotPage } from '@/pages/OneShotPage';
import { CampaignPage } from '@/pages/CampaignPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersPage />,
  },
  {
    path: '/characters',
    element: (
      <Layout>
        <CharacterPage />
      </Layout>
    ),
  },
  {
    path: '/one-shots',
    element: (
      <Layout>
        <OneShotPage />
      </Layout>
    ),
  },
  {
    path: '/campaigns',
    element: (
      <Layout>
        <CampaignPage />
      </Layout>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}