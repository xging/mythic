import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlignmentFilter } from './alignment-filter';
import type { Alignment } from '@mythic/entities/character/model';

const meta = {
  title: 'features/character-filters/AlignmentFilter',
  component: AlignmentFilter,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: 'select',
      options: ['all', 'Good', 'Neutral', 'Chaotic', 'Unknown'],
    },
    onChange: { action: 'changed' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlignmentFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllAlignments: Story = {
  args: {
    value: 'all' as Alignment,
    onChange: () => {},
  },
};

export const Good: Story = {
  args: {
    value: 'Good' as Alignment,
    onChange: () => {},
  },
};

export const Chaotic: Story = {
  args: {
    value: 'Chaotic' as Alignment,
    onChange: () => {},
  },
};
