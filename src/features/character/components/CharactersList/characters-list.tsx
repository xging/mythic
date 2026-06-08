import type { Character } from '@/entities/character/model';
import { CharacterCard } from '@/features/character/components/CharacterCard/character-card';
import styles from './characters-list.module.scss';

interface CharactersListProps {
  characters: Character[];
  selectedCharacterId: string | null;
  onCharacterSelect: (id: string) => void;
}

export const CharactersList = ({
  characters,
  selectedCharacterId,
  onCharacterSelect,
}: CharactersListProps) => {
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
