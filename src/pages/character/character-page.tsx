import { CharacterCard } from '@/features/character/components';
import type { Character } from '@/features/character/types/character';

const MOCK_CHARACTERS: Character[] = [
  {
    id: '1',
    name: 'Thorgar Ironfist',
    race: 'Dwarf',
    className: 'Fighter',
    level: 5,
    role: 'Tank',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    stats: { STR: 17, DEX: 12, CON: 16, INT: 10, WIS: 12, CHA: 8 },
    about:
      'A battle-hardened dwarf who stands firm as a shield for his allies and has no patience for cowardice.',
    backstory:
      'Thorgar earned his name in the mines and on the battlefield, forging his honor through every hard-won victory.',
    traits: ['Steadfast', 'Loyal', 'Grim'],
    ideals: ['Duty before self', 'Strength protects the weak'],
    strengths: ['High durability', 'Reliable frontliner', 'Resilient'],
    weaknesses: ['Slow to adapt', 'Stubborn', 'Harsh'],
    tags: ['Tank', 'Dwarf', 'Fighter', 'Melee'],
  },
];

export function CharacterPage() {
  return (
    <div className="character-page">
      <h2>Characters</h2>
      <div className="character-page__grid">
        {MOCK_CHARACTERS.map((character) => (
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
}

export type { Character };