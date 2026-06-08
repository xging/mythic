import { ROLES } from '@/entities/character/model';
import type { Role } from '@/entities/character/model';

interface RoleFilterProps {
  value: Role;
  onChange: (value: Role) => void;
}

export const RoleFilter = ({ value, onChange }: RoleFilterProps) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value as Role)}>
      {ROLES.map((role) => (
        <option key={role} value={role}>
          {role === 'all' ? 'All Roles' : role}
        </option>
      ))}
    </select>
  );
};
