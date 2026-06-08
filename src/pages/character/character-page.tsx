import { characters } from '@/shared/data/characters';
import { CharacterCard } from '@/entities/character/ui';
import styles from './character-page.module.scss';

export const CharacterPage = () => {
  return (
    <div className={styles.characterPage}>
      <h2>Characters</h2>
      <div className={styles.grid}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isActive={false}
            onClick={() => undefined}
          />
        ))}
      </div>
    </div>
  );
};
