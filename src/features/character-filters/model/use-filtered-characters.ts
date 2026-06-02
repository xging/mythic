import { useMemo } from 'react';
import type { Character, FilterOptions } from '@/entities/character/model';

export const getFilteredCharacters = (
  characters: Character[],
  options: FilterOptions,
): Character[] => {
  const {
    search,
    universe: universeFilter,
    role: roleFilter,
    alignment: alignmentFilter,
    activeUniverseTab,
  } = options;

  return characters.filter((character) => {
    const normalizedSearch = search.trim().toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 ||
      [character.name, character.origin, character.role, character.universe]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch);

    const matchesSelectUniverse = universeFilter === 'all' || character.universe === universeFilter;
    const matchesTabUniverse =
      activeUniverseTab === 'all' || character.universe === activeUniverseTab;
    const matchesRole = roleFilter === 'all' || character.roleFilter === roleFilter;
    const matchesAlignment = alignmentFilter === 'all' || character.alignment === alignmentFilter;

    return (
      matchesSearch &&
      matchesSelectUniverse &&
      matchesTabUniverse &&
      matchesRole &&
      matchesAlignment
    );
  });
};

export const useFilteredCharacters = (
  characters: Character[],
  options: FilterOptions,
): Character[] => {
  return useMemo(() => getFilteredCharacters(characters, options), [characters, options]);
};
