import type { CSSProperties } from 'react';
import type { Character } from '@/entities/character/model';
import { colorMap } from '@/shared/lib/color-map';
import styles from './character-details.module.scss';

interface CharacterDetailsProps {
  character: Character | null;
}

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  if (!character) return null;

  const color = colorMap[character.color] ?? colorMap.purple;
  const style = {
    '--accent': color.accent,
    '--accent-glow': color.glow,
    '--image-gradient': character.imageGradient,
    '--power': `${character.power}%`,
  } as CSSProperties;

  return (
    <article className={styles.detailsCard} style={style}>
      <section className={styles.detailsHero}>
        <button className={styles.closeButton} aria-label="Close details" type="button">
          ×
        </button>
        <button className={styles.bookmarkButton} aria-label="Save character" type="button">
          ▱
        </button>
        <div className={styles.detailsHeroContent}>
          <h2>{character.name}</h2>
          <div className={styles.universeLabel}>
            <span className={styles.dot} />
            {character.universe}
          </div>
          <div className={styles.classLabel}>{character.role}</div>
        </div>
      </section>

      <div className={styles.detailsBody}>
        <section className={styles.detailsSection}>
          <h3>Power Level</h3>
          <div className={styles.detailsPower}>
            <strong>{character.power}</strong>
            <div className={styles.powerTrack}>
              <div className={styles.powerFill} />
            </div>
          </div>
        </section>

        <nav className={styles.detailsTabs} aria-label="Character details navigation">
          <button type="button" className={`${styles.detailsTab} ${styles.active}`}>
            Overview
          </button>
          <button type="button" className={styles.detailsTab}>
            Abilities
          </button>
          <button type="button" className={styles.detailsTab}>
            Equipment
          </button>
          <button type="button" className={styles.detailsTab}>
            Relations
          </button>
          <button type="button" className={styles.detailsTab}>
            Notes
          </button>
        </nav>

        <section className={styles.detailsSection}>
          <h3>About</h3>
          <p>{character.about}</p>
        </section>

        <section className={styles.detailsSection}>
          <h3>Attributes</h3>
          <div className={styles.attributesGrid}>
            {Object.entries(character.attributes).map(([key, value]) => (
              <div className={styles.attribute} key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.detailsSection}>
          <h3>Tags</h3>
          <div className={styles.tagsList}>
            {character.tags.map((tag) => (
              <span key={tag} className={styles.tagPill}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.detailsSection}>
          <h3>Links</h3>
          <div className={styles.linksList}>
            {character.links.map((link) => (
              <button key={link} type="button" className={styles.linkItem}>
                {link}
              </button>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
};
