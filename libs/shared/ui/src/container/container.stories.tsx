import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './container';

const meta = {
  title: 'shared/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'header', 'footer', 'main'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}>
        Small container content
      </div>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: (
      <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}>
        Medium container content
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}>
        Large container content
      </div>
    ),
  },
};

export const Full: Story = {
  args: {
    size: 'full',
    children: (
      <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}>
        Full-width container content
      </div>
    ),
  },
};

export const AsSection: Story = {
  args: {
    as: 'section',
    children: (
      <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '14px' }}>
        Container rendered as section element
      </div>
    ),
  },
};
