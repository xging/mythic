import { characters } from '@/shared/data/characters';
import { CharacterCard } from '@/features/character/components/CharacterCard/character-card';

export const CharacterPage = () => {
  return (
    <div className="character-page">
      <h2>Characters</h2>
      <div className="character-page__grid">
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
