import type { CSSProperties } from 'react';
import type { Character } from '@mythic/entities/character';
import { Card } from '@mythic/shared/ui';
import { colorMap } from '@mythic/shared/lib';
import { Dumbbell, Wind, Shield, Brain, Eye, Sparkles } from 'lucide-react';

import styles from './character-card.module.scss';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: () => void;
}

const attributeIcons = {
  STR: Dumbbell,
  DEX: Wind,
  CON: Shield,
  INT: Brain,
  WIS: Eye,
  CHA: Sparkles,
} as const;

export const CharacterCard = ({ character, isActive, onClick }: CharacterCardProps) => {
  const color = colorMap[character.color] ?? colorMap.purple;

  const style = {
    '--accent': color.accent,
    '--accent-glow': color.glow,
    '--power': `${character.power}%`,
    '--image-gradient': character.imageGradient,
  } as CSSProperties;

  const heroImagePlaceholder = '/assets/hero-placeholder.png';

  return (
    <Card
      isSelected={isActive}
      onClick={onClick}
      data-id={character.id}
      style={style}
      className={styles.characterCard}
    >
      <div className={styles.cardArt} style={{ backgroundImage: `url(${heroImagePlaceholder})` }} />

      <div className={styles.cardOverlay} />

      <div className={styles.cardTop}>
        <span className={styles.cardSymbol}>{character.symbol}</span>

        <div className={styles.powerBadge}>
          <span>Power</span>
          <strong>{character.power}</strong>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{character.name}</h3>
        <p className={styles.cardUniverse}>{character.origin}</p>

        <div className={styles.cardMeta}>
          <span className={styles.cardTag}>{character.role}</span>

          {Object.entries(character.attributes).map(([key, value]) => {
            const Icon = attributeIcons[key as keyof typeof attributeIcons];

            return (
              <span key={key} className={styles.cardTag}>
                <Icon size={13} strokeWidth={2} />
                {value}
              </span>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
