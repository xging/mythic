export const colorMap = {
  purple: { accent: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.34)' },
  cyan: { accent: '#18d3d3', glow: 'rgba(24, 211, 211, 0.30)' },
  green: { accent: '#7dd957', glow: 'rgba(125, 217, 87, 0.30)' },
  orange: { accent: '#f97316', glow: 'rgba(249, 115, 22, 0.30)' },
  red: { accent: '#ff304f', glow: 'rgba(255, 48, 79, 0.30)' },
  yellow: { accent: '#f4b400', glow: 'rgba(244, 180, 0, 0.30)' },
  blue: { accent: '#2388ff', glow: 'rgba(35, 136, 255, 0.30)' },
  gray: { accent: '#9ca3af', glow: 'rgba(156, 163, 175, 0.24)' },
} as const;

export type ColorKey = keyof typeof colorMap;
