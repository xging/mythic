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
    children: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCustomContent: Story = {
  args: {
    isVisible: true,
    children: (
      <div style={{ textAlign: 'center', color: '#f4f7fb' }}>
        <h1 style={{ fontSize: '2rem', letterSpacing: '0.5em' }}>YOUR BRAND</h1>
        <p style={{ color: '#9aa4b2' }}>Loading awesome things...</p>
        <div
          style={{
            width: 320,
            height: 4,
            borderRadius: 999,
            background: 'rgba(255,255,255,0.08)',
            overflow: 'hidden',
            margin: '16px 0',
          }}
        >
          <div
            style={{
              width: '42%',
              height: '100%',
              borderRadius: 'inherit',
              background: 'linear-gradient(90deg, #22d3ee, #8b5cf6)',
            }}
          />
        </div>
      </div>
    ),
  },
};

export const Hidden: Story = {
  args: {
    isVisible: false,
    children: 'This content is not rendered',
  },
};
