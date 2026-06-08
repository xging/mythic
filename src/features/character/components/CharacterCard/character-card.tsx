import type { Character } from '@/entities/character/model';
// import type { CSSProperties } from 'react';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: () => void;
}

const colorMap = {
  purple: { accent: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.34)' },
  cyan: { accent: '#18d3d3', glow: 'rgba(24, 211, 211, 0.30)' },
  green: { accent: '#7dd957', glow: 'rgba(125, 217, 87, 0.30)' },
  orange: { accent: '#f97316', glow: 'rgba(249, 115, 22, 0.30)' },
  red: { accent: '#ff304f', glow: 'rgba(255, 48, 79, 0.30)' },
  yellow: { accent: '#f4b400', glow: 'rgba(244, 180, 0, 0.30)' },
  blue: { accent: '#2388ff', glow: 'rgba(35, 136, 255, 0.30)' },
  gray: { accent: '#9ca3af', glow: 'rgba(156, 163, 175, 0.24)' },
} as const;

export const CharacterCard = ({ character, isActive, onClick }: CharacterCardProps) => {
  const color = colorMap[character.color] ?? colorMap.purple;
  const style = {
    '--accent': color.accent,
    '--accent-glow': color.glow,
    '--power': `${character.power}%`,
    '--image-gradient': character.imageGradient,
  } as React.CSSProperties;

  return (
    <article
      className={`character-card ${isActive ? 'selected' : ''}`}
      data-id={character.id}
      onClick={onClick}
      style={style}
    >
      <div className="card-art" />
      <div className="card-symbol">{character.symbol}</div>
      <div className="card-content">
        <h3>{character.name}</h3>
        <p className="card-universe">{character.origin}</p>
        <div className="card-tags">{character.role}</div>
        <div className="power-row">
          <span>Power Level</span>
          <strong className="power-value">{character.power}</strong>
        </div>
        <div className="power-track">
          <div className="power-fill" />
        </div>
      </div>
    </article>
  );
};
