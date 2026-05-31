import type { OneShot } from '@/features/oneshot';

const MOCK_ONE_SHOTS: OneShot[] = [
  {
    id: '1',
    title: 'The Lost Mine of Phandelver',
    description: 'A classic starter adventure.',
    dungeonMaster: 'DM Alex',
    playerCount: 4,
    levelRange: { min: 1, max: 5 },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function OneShotPage() {
  return (
    <div className="oneshot-page">
      <h2>One-Shots</h2>
      <ul className="oneshot-page__list">
        {MOCK_ONE_SHOTS.map((shot) => (
          <li key={shot.id}>
            <h3>{shot.title}</h3>
            <p>{shot.description}</p>
            <p>DM: {shot.dungeonMaster} &middot; Players: {shot.playerCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}