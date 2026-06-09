import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterList } from './character-list';
import type { Character } from '../model';

const mockCharacters: Character[] = [
  {
    id: '1',
    name: 'Arcane Sentinel',
    universe: 'Fantasy',
    origin: 'Ethereal Realm',
    role: 'Tank',
    roleFilter: 'tank',
    alignment: 'Good',
    power: 85,
    color: 'purple',
    symbol: '◇',
    imageGradient: 'linear-gradient(135deg, #1a0533, #2d1b69)',
    about: 'A mystical guardian from the Ethereal Realm.',
    attributes: { STR: 18, DEX: 10, CON: 16, INT: 12, WIS: 14, CHA: 10 },
    tags: ['Guardian', 'Magic', 'Shield'],
    links: ['View Lore', 'View Abilities'],
  },
  {
    id: '2',
    name: 'Nova-7',
    universe: 'Sci-Fi',
    origin: 'Cygnus Station',
    role: 'Scout',
    roleFilter: 'scout',
    alignment: 'Neutral',
    power: 72,
    color: 'cyan',
    symbol: '◎',
    imageGradient: 'linear-gradient(135deg, #0a2e38, #0d4a5c)',
    about: 'An advanced reconnaissance droid.',
    attributes: { STR: 8, DEX: 20, CON: 10, INT: 16, WIS: 18, CHA: 6 },
    tags: ['Droid', 'Stealth', 'Scout'],
    links: ['View Lore', 'View Abilities'],
  },
  {
    id: '3',
    name: 'Inferno Blaze',
    universe: 'Anime',
    origin: 'Flame Continent',
    role: 'Damage',
    roleFilter: 'damage',
    alignment: 'Chaotic',
    power: 92,
    color: 'red',
    symbol: '✦',
    imageGradient: 'linear-gradient(135deg, #3a0a0a, #6b1a1a)',
    about: 'A fiery warrior consumed by passion.',
    attributes: { STR: 16, DEX: 14, CON: 12, INT: 8, WIS: 10, CHA: 14 },
    tags: ['Fire', 'Berserker', 'Anime'],
    links: ['View Lore', 'View Abilities'],
  },
];

const meta = {
  title: 'entities/character/CharacterList',
  component: CharacterList,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onCharacterSelect: { action: 'selected' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    characters: mockCharacters,
    selectedCharacterId: null,
    onCharacterSelect: () => {},
  },
};

export const WithSelection: Story = {
  args: {
    characters: mockCharacters,
    selectedCharacterId: '1',
    onCharacterSelect: () => {},
  },
};

export const Empty: Story = {
  args: {
    characters: [],
    selectedCharacterId: null,
    onCharacterSelect: () => {},
  },
};
