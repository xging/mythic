import type { Character } from '@/features/character/types/character';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: () => void;
}

function statMarkup(stats: Record<string, number>) {
  return Object.entries(stats)
    .map(
      ([key, value]) =>
        `<div class="stat">${key}<strong>${value}</strong></div>`
    )
    .join("");
}

export function CharacterCard({ character, isActive, onClick }: CharacterCardProps) {
  return (
    <article
      className={`character-card ${isActive ? "active" : ""}`}
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
        <div
          className="stats"
          dangerouslySetInnerHTML={{ __html: statMarkup(character.stats) }}
        />
      </div>
    </article>
  );
}