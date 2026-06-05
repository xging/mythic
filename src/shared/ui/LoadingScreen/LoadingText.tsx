import styles from './loading-screen.module.scss';

export function LoadingText() {
  return (
    <div className={styles['loading-text']}>
      <h1>NEXUS</h1>
      <p>Multiverse Archive</p>
    </div>
  );
}
