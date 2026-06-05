import type { Character } from '@/entities/character/model';
import { CharacterCard } from './character-card';
import styles from './character-list.module.scss';

interface CharacterListProps {
  characters: Character[];
  selectedCharacterId: string | null;
  onCharacterSelect: (id: string) => void;
}

export const CharacterList = ({
  characters,
  selectedCharacterId,
  onCharacterSelect,
}: CharacterListProps) => {
  return (
    <div className={styles.charactersList}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isActive={selectedCharacterId === character.id}
          onClick={() => onCharacterSelect(character.id)}
        />
      ))}
    </div>
  );
};
