import { ALIGNMENTS } from '@mythic/entities/character/model';
import type { Alignment } from '@mythic/entities/character/model';

interface AlignmentFilterProps {
  value: Alignment;
  onChange: (value: Alignment) => void;
}

export const AlignmentFilter = ({ value, onChange }: AlignmentFilterProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value as Alignment)}>
      {ALIGNMENTS.map((alignment) => (
        <option key={alignment} value={alignment}>
          {alignment === 'all' ? 'All Alignments' : alignment}
        </option>
      ))}
    </select>
  );
};
