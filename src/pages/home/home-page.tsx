import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { ROUTES } from '@/app/router/routes';
import { CharactersList } from '@/features/character/components';

export function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to D&D Pet Project</h2>
      <p>Manage your characters, one-shots, and campaigns.</p>
      <nav className="home-page__nav">
        <Link to={ROUTES.characters}>
          <Button>Characters</Button>
        </Link>
        <Link to={ROUTES.oneShots}>
          <Button variant="secondary">One-Shots</Button>
        </Link>
        <Link to={ROUTES.campaigns}>
          <Button variant="secondary">Campaigns</Button>
        </Link>
      </nav>
      <section className="home-page__characters">
        <h3>Characters</h3>
        <CharactersList />
      </section>
    </div>
  );
}
