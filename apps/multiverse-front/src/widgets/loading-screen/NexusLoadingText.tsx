import styles from './nexus-loading-screen.module.scss';

export const NexusLoadingText = () => {
  return (
    <div className={styles['loading-text']}>
      <h1>NEXUS</h1>
      <p>Multiverse Archive</p>
    </div>
  );
};
