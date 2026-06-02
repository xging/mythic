export interface Character {
  id: string;
  name: string;
  universe: string;
  origin: string;
  role: string;
  roleFilter: string;
  alignment: string;
  power: number;
  color: 'purple' | 'cyan' | 'green' | 'orange' | 'red' | 'yellow' | 'blue' | 'gray';
  symbol: string;
  imageGradient: string;
  about: string;
  attributes: Record<string, number>;
  tags: string[];
  links: string[];
}
