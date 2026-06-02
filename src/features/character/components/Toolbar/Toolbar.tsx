interface ToolbarProps {
  search: string;
  classFilter: string;
  roleFilter: string;
  levelFilter: string;
  onSearchChange: (value: string) => void;
  onClassFilterChange: (value: string) => void;
  onRoleFilterChange: (value: string) => void;
  onLevelFilterChange: (value: string) => void;
}

const CLASSES = [
  'Cleric',
  'Fighter',
  'Warlock',
  'Rogue',
  'Paladin',
  'Ranger',
  'Artificer',
  'Sorcerer',
];
const ROLES = ['Healer', 'Tank', 'Damage', 'Support', 'Utility'];
const LEVELS = ['1-5', '6-10'];

export function Toolbar({
  search,
  classFilter,
  roleFilter,
  levelFilter,
  onSearchChange,
  onClassFilterChange,
  onRoleFilterChange,
  onLevelFilterChange,
}: ToolbarProps) {
  return (
    <section className="toolbar">
      <label className="search">
        <input
          id="searchInput"
          type="search"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span>⌕</span>
      </label>

      <select value={classFilter} onChange={(e) => onClassFilterChange(e.target.value)}>
        <option value="all">All Classes</option>
        {CLASSES.map((cls) => (
          <option key={cls} value={cls}>
            {cls}
          </option>
        ))}
      </select>

      <select value={roleFilter} onChange={(e) => onRoleFilterChange(e.target.value)}>
        <option value="all">All Roles</option>
        {ROLES.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      <select value={levelFilter} onChange={(e) => onLevelFilterChange(e.target.value)}>
        <option value="all">All Levels</option>
        {LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </section>
  );
}
