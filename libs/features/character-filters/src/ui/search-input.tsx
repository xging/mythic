import styles from './character-filters.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <label className={styles.searchField}>
      <input
        id="searchInput"
        type="search"
        value={value}
        placeholder="Search characters..."
        onChange={(event) => onChange(event.target.value)}
      />
      <span>⌕</span>
    </label>
  );
};
