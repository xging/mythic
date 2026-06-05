import styles from './loading-screen.module.scss';

export const LoadingProgress = () => {
  return (
    <div className={styles['loading-progress']}>
      <div className={styles['progress-track']}>
        <div className={styles['progress-fill']}></div>
      </div>
      <span>Opening portal...</span>
    </div>
  );
};
