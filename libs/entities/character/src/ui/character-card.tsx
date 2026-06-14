import type { Character } from '@mythic/entities/character/model';
import { colorMap } from '@mythic/shared/lib/color-map';
import styles from './character-card.module.scss';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: () => void;
}

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
      className={`${styles.characterCard} ${isActive ? styles.selected : ''}`}
      data-id={character.id}
      onClick={onClick}
      style={style}
    >
      <div className={styles.cardArt} />
      <div className={styles.cardSymbol}>{character.symbol}</div>
      <div className={styles.cardContent}>
        <h3>{character.name}</h3>
        <p className={styles.cardUniverse}>{character.origin}</p>
        <div className={styles.cardTags}>{character.role}</div>
        <div className={styles.powerRow}>
          <span>Power Level</span>
          <strong className={styles.powerValue}>{character.power}</strong>
        </div>
        <div className={styles.powerTrack}>
          <div className={styles.powerFill} />
        </div>
      </div>
    </article>
  );
};
