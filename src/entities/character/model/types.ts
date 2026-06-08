import type { UNIVERSES, ROLES, ALIGNMENTS } from './data';

export type Universe = (typeof UNIVERSES)[number];
export type Role = (typeof ROLES)[number];
export type Alignment = (typeof ALIGNMENTS)[number];

export interface Attributes {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
}

export interface Character {
  id: string;
  name: string;
  universe: Universe;
  origin: string;
  role: Role;
  roleFilter: string;
  alignment: Alignment;
  power: number;
  color: 'purple' | 'cyan' | 'green' | 'orange' | 'red' | 'yellow' | 'blue' | 'gray';
  symbol: string;
  imageGradient: string;
  about: string;
  attributes: Attributes;
  tags: string[];
  links: string[];
}

export interface FilterOptions {
  search: string;
  universe: Universe;
  role: Role;
  alignment: Alignment;
  activeUniverseTab: Universe;
}
