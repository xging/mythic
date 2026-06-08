import { useMemo } from 'react';
import type { Character } from '@/entities/character/model';

export const getFilteredCharacters = (
  characters: Character[],
  search: string,
  universeFilter: string,
  roleFilter: string,
  alignmentFilter: string,
  activeUniverseTab: string,
): Character[] => {
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
  search: string,
  universeFilter: string,
  roleFilter: string,
  alignmentFilter: string,
  activeUniverseTab: string,
): Character[] => {
  return useMemo(
    () =>
      getFilteredCharacters(
        characters,
        search,
        universeFilter,
        roleFilter,
        alignmentFilter,
        activeUniverseTab,
      ),
    [characters, search, universeFilter, roleFilter, alignmentFilter, activeUniverseTab],
  );
};
