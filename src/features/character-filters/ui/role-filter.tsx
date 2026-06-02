import { ROLES } from '@/entities/character/model';

interface RoleFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function RoleFilter({ value, onChange }: RoleFilterProps) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      {ROLES.map((role) => (
        <option key={role} value={role}>
          {role === 'all' ? 'All Roles' : role}
        </option>
      ))}
    </select>
  );
}
