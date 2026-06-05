import type { Character } from '@/features/character/types/character';
import type { CSSProperties } from 'react';

interface DetailsPanelProps {
  character: Character | null;
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

export const DetailsPanel = ({ character }: DetailsPanelProps) => {
  if (!character) return null;

  const color = colorMap[character.color] ?? colorMap.purple;
  const style = {
    '--accent': color.accent,
    '--accent-glow': color.glow,
    '--image-gradient': character.imageGradient,
  } as CSSProperties;

  return (
    <article className="details-card" style={style}>
      <section className="details-hero">
        <button className="close-button" aria-label="Close details" type="button">
          ×
        </button>
        <button className="bookmark-button" aria-label="Save character" type="button">
          ▱
        </button>
        <div className="details-hero-content">
          <h2>{character.name}</h2>
          <div className="universe-label">
            <span className={`dot ${character.color}`} />
            {character.universe}
          </div>
          <div className="class-label">{character.role}</div>
        </div>
      </section>

      <div className="details-body">
        <section className="details-section">
          <h3>Power Level</h3>
          <div className="details-power">
            <strong>{character.power}</strong>
            <div className="power-track">
              <div className="power-fill" />
            </div>
          </div>
        </section>

        <nav className="details-tabs" aria-label="Character details navigation">
          <button type="button" className="details-tab active">
            Overview
          </button>
          <button type="button" className="details-tab">
            Abilities
          </button>
          <button type="button" className="details-tab">
            Equipment
          </button>
          <button type="button" className="details-tab">
            Relations
          </button>
          <button type="button" className="details-tab">
            Notes
          </button>
        </nav>

        <section className="details-section">
          <h3>About</h3>
          <p>{character.about}</p>
        </section>

        <section className="details-section">
          <h3>Attributes</h3>
          <div className="attributes-grid">
            {Object.entries(character.attributes).map(([key, value]) => (
              <div className="attribute" key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="details-section">
          <h3>Tags</h3>
          <div className="tags-list">
            {character.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="details-section">
          <h3>Links</h3>
          <div className="links-list">
            {character.links.map((link) => (
              <a href="#" className="link-item" key={link}>
                <span>⌁</span>
                <strong>{link}</strong>
                <span>→</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
