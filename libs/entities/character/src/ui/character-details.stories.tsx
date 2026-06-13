import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterDetails } from './character-details';
import type { Character } from '../model';

const mockCharacter: Character = {
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
  about:
    'A mystical guardian from the Ethereal Realm, wielding ancient arcane powers to protect the multiverse from dimensional threats.',
  attributes: { STR: 18, DEX: 10, CON: 16, INT: 12, WIS: 14, CHA: 10 },
  tags: ['Guardian', 'Magic', 'Shield', 'Ethereal'],
  links: ['View Lore', 'View Abilities', 'Relations'],
};

const meta = {
  title: 'entities/character/CharacterDetails',
  component: CharacterDetails,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    character: { control: 'object' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCharacter: Story = {
  args: {
    character: mockCharacter,
  },
};

export const NullCharacter: Story = {
  args: {
    character: null,
  },
};

export const SciFiCharacter: Story = {
  args: {
    character: {
      ...mockCharacter,
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
      about:
        'An advanced reconnaissance droid from Cygnus Station, equipped with stealth technology and quantum sensors.',
      attributes: { STR: 8, DEX: 20, CON: 10, INT: 16, WIS: 18, CHA: 6 },
      tags: ['Droid', 'Stealth', 'Scout', 'Tech'],
    },
  },
};
