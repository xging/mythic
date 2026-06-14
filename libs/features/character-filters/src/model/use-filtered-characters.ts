import { useMemo } from 'react';
import type { Character, Universe, Role, Alignment } from '@mythic/entities/character/model';

export const getFilteredCharacters = (
  characters: Character[],
  search: string,
  universe: Universe,
  role: Role,
  alignment: Alignment,
): Character[] => {
  return characters.filter((character) => {
    const normalizedSearch = search.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [character.name, character.origin, character.role, character.universe]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch);

    const matchesUniverse = universe === 'all' || character.universe === universe;
    const matchesRole = role === 'all' || character.roleFilter === role;
    const matchesAlignment = alignment === 'all' || character.alignment === alignment;

    return matchesSearch && matchesUniverse && matchesRole && matchesAlignment;
  });
};

export const useFilteredCharacters = (
  characters: Character[],
  search: string,
  universe: Universe,
  role: Role,
  alignment: Alignment,
): Character[] => {
  return useMemo(
    () => getFilteredCharacters(characters, search, universe, role, alignment),
    [characters, search, universe, role, alignment],
  );
};
