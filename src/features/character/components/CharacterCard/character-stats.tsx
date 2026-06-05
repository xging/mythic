import styles from './character-stats.module.scss';

interface CharacterStatsProps {
  stats: Record<string, number>;
}

export const CharacterStats = ({ stats }: CharacterStatsProps) => {
  return (
    <div className={styles.stats}>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className={styles.stat}>
          {key}
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
};
