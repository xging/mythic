export interface Character {
  id: string;
  name: string;
  race: string;
  className: string;
  level: number;
  role: 'Healer' | 'Tank' | 'Damage' | 'Support' | 'Utility';
  image: string;
  stats: Record<string, number>;
  about: string;
  backstory: string;
  traits: string[];
  ideals: string[];
  strengths: string[];
  weaknesses: string[];
  tags: string[];
}
