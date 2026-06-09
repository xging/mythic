import type { Meta, StoryObj } from '@storybook/react-vite';
import { RoleFilter } from './role-filter';
import type { Role } from '@/entities/character/model';

const meta = {
  title: 'features/character-filters/RoleFilter',
  component: RoleFilter,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['all', 'Healer', 'Leader', 'Scout', 'Support', 'Rogue', 'Tank', 'Damage'],
    },
    onChange: { action: 'changed' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoleFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllRoles: Story = {
  args: {
    value: 'all' as Role,
    onChange: () => {},
  },
};

export const Tank: Story = {
  args: {
    value: 'Tank' as Role,
    onChange: () => {},
  },
};

export const Healer: Story = {
  args: {
    value: 'Healer' as Role,
    onChange: () => {},
  },
};

export const Damage: Story = {
  args: {
    value: 'Damage' as Role,
    onChange: () => {},
  },
};
