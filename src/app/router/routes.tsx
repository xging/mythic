import type { RouteObject } from 'react-router-dom';
import { Layout } from '@/shared/components';
import { CharactersPage } from '@/pages/characters/CharactersPage';
import { CharacterPage } from '@/pages/CharacterPage';
import { OneShotPage } from '@/pages/OneShotPage';
import { CampaignPage } from '@/pages/CampaignPage';

export const routes: RouteObject[] = [
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
];