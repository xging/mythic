import { characters } from '@/shared/data/characters';
import { CharacterCard } from '@/features/character/components/CharacterCard/character-card';
import styles from './characters-list.module.scss';

export function CharactersList() {
  const handleCharacterClick = (id: string) => {
    // TODO: navigate to character details or open panel
    console.log(`Character clicked: ${id}`);
  };

  return (
    <div className={styles.charactersList}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isActive={false}
          onClick={() => handleCharacterClick(character.id)}
        />
      ))}
    </div>
  );
}
