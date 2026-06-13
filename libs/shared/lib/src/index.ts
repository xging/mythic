export { colorMap } from './color-map';
export type { ColorKey } from './color-map';

export const cn = (...classes: (string | boolean | undefined | null)[]): string =>
  classes.filter(Boolean).join(' ');
