import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadingScreen } from './LoadingScreen';

const meta = {
  title: 'shared/LoadingScreen',
  component: LoadingScreen,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isVisible: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = {
  args: {
    isVisible: true,
  },
};

export const Hidden: Story = {
  args: {
    isVisible: false,
  },
};
