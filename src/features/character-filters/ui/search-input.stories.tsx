import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from './search-input';

const meta = {
  title: 'features/character-filters/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    value: '',
    onChange: () => {},
  },
};

export const WithText: Story = {
  args: {
    value: 'Arcane Sentinel',
    onChange: () => {},
  },
};

export const LongQuery: Story = {
  args: {
    value: 'Searching for a specific character in the multiverse...',
    onChange: () => {},
  },
};
