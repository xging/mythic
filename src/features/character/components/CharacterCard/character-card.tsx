import { CharacterStats } from './character-stats';
import type { Character } from '@/features/character/types/character';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: () => void;
}

export function CharacterCard({ character, isActive, onClick }: CharacterCardProps) {
  return (
    <div
      className={`character-card ${isActive ? 'active' : ''}`}
      data-id={character.id}
      onClick={onClick}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url('${character.image}')` }}
      >
        <span className="favorite">♡</span>
        <span className="level">Lvl {character.level}</span>
      </div>
      <div className="card-body">
        <h3>{character.name}</h3>
        <div className="meta">
          {character.race} • {character.className}
        </div>
        <div className={`role ${character.role}`}>{character.role}</div>
        <CharacterStats stats={character.stats} />
      </div>
    </div>
  );
}
