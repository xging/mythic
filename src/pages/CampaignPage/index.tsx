import type { Campaign } from '@/features/campaign';

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    name: 'Curse of Strahd',
    description: 'A gothic horror campaign set in Barovia.',
    dungeonMaster: 'DM Sarah',
    characters: [],
    sessions: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function CampaignPage() {
  return (
    <div className="campaign-page">
      <h2>Campaigns</h2>
      <div className="campaign-page__list">
        {MOCK_CAMPAIGNS.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <h3>{campaign.name}</h3>
            <p>{campaign.description}</p>
            <p>DM: {campaign.dungeonMaster}</p>
          </div>
        ))}
      </div>
    </div>
  );
}