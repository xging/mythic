export const UNIVERSES = [
  'all',
  'My Universe',
  'Fantasy',
  'Sci-Fi',
  'Modern',
  'Anime',
  'Superhero',
  'Others',
] as const;

export const ROLES = [
  'all',
  'Healer',
  'Leader',
  'Scout',
  'Support',
  'Rogue',
  'Tank',
  'Damage',
] as const;

export const ALIGNMENTS = ['all', 'Good', 'Neutral', 'Chaotic', 'Unknown'] as const;

export const UNIVERSE_COLORS: Record<string, string> = {
  'My Universe': 'purple',
  Fantasy: 'cyan',
  'Sci-Fi': 'green',
  Modern: 'orange',
  Anime: 'red',
  Superhero: 'yellow',
  Others: 'gray',
};
