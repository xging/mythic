import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Character } from '@dndshka/entities/character/model';
import { characters as initialCharacters } from '@dndshka/entities/character/model/characters';

interface CharactersContextValue {
  characters: Character[];
  addCharacter: (character: Character) => void;
}

const CharactersContext = createContext<CharactersContextValue | null>(null);

export const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);

  const addCharacter = (character: Character) => {
    setCharacters((prev) => [...prev, character]);
  };

  return (
    <CharactersContext.Provider value={{ characters, addCharacter }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = (): CharactersContextValue => {
  const ctx = useContext(CharactersContext);
  if (!ctx) {
    throw new Error('useCharacters must be used within a CharactersProvider');
  }
  return ctx;
};
