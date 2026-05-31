import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';

export function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to D&D Pet Project</h2>
      <p>Manage your characters, one-shots, and campaigns.</p>
      <nav className="home-page__nav">
        <Link to="/characters"><Button>Characters</Button></Link>
        <Link to="/one-shots"><Button variant="secondary">One-Shots</Button></Link>
        <Link to="/campaigns"><Button variant="secondary">Campaigns</Button></Link>
      </nav>
    </div>
  );
}