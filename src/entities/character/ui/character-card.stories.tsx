import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterCard } from './character-card';
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
  about: 'A mystical guardian from the Ethereal Realm.',
  attributes: { STR: 18, DEX: 10, CON: 16, INT: 12, WIS: 14, CHA: 10 },
  tags: ['Guardian', 'Magic', 'Shield'],
  links: ['View Lore', 'View Abilities'],
};

const meta = {
  title: 'entities/character/CharacterCard',
  component: CharacterCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isActive: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: mockCharacter,
    isActive: false,
    onClick: () => {},
  },
};

export const Active: Story = {
  args: {
    character: mockCharacter,
    isActive: true,
    onClick: () => {},
  },
};

export const DamageRole: Story = {
  args: {
    character: {
      ...mockCharacter,
      role: 'Damage',
      power: 92,
      color: 'red',
      name: 'Inferno Blaze',
      symbol: '✦',
    },
    isActive: false,
    onClick: () => {},
  },
};

export const SupportRole: Story = {
  args: {
    character: {
      ...mockCharacter,
      role: 'Support',
      power: 65,
      color: 'green',
      name: 'Verdant Weaver',
      symbol: '✿',
    },
    isActive: false,
    onClick: () => {},
  },
};
