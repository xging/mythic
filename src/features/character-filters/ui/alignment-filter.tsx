import { ALIGNMENTS } from '@/entities/character/model';

interface AlignmentFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function AlignmentFilter({ value, onChange }: AlignmentFilterProps) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      {ALIGNMENTS.map((alignment) => (
        <option key={alignment} value={alignment}>
          {alignment === 'all' ? 'All Alignments' : alignment}
        </option>
      ))}
    </select>
  );
}
