import { UNIVERSES } from '@/entities/character/model';

interface UniverseFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const UniverseFilter = ({ value, onChange }: UniverseFilterProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      {UNIVERSES.map((universe) => (
        <option key={universe} value={universe}>
          {universe === 'all' ? 'All Universes' : universe}
        </option>
      ))}
    </select>
  );
};
