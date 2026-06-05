import styles from './loading-screen.module.scss';

export const PortalLogo = () => {
  return (
    <div className={styles['portal-logo']}>
      <div className={styles['portal-glow']}></div>

      <div className={`${styles.orbit} ${styles['orbit-one']}`}></div>
      <div className={`${styles.orbit} ${styles['orbit-two']}`}></div>
      <div className={`${styles.orbit} ${styles['orbit-three']}`}></div>

      <svg className={styles['nexus-symbol']} viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <linearGradient id="nexusGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="45%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        <polygon
          className={`${styles['symbol-line']} ${styles['line-main']}`}
          points="60,8 108,36 108,84 60,112 12,84 12,36"
        />
        <polygon
          className={`${styles['symbol-line']} ${styles['line-inner']}`}
          points="60,26 90,43 90,77 60,94 30,77 30,43"
        />

        <line
          className={`${styles['symbol-line']} ${styles['line-connection']}`}
          x1="60"
          y1="8"
          x2="60"
          y2="112"
        />
        <line
          className={`${styles['symbol-line']} ${styles['line-connection']}`}
          x1="12"
          y1="36"
          x2="108"
          y2="84"
        />
        <line
          className={`${styles['symbol-line']} ${styles['line-connection']}`}
          x1="108"
          y1="36"
          x2="12"
          y2="84"
        />

        <circle className={`${styles['symbol-node']} ${styles['node-one']}`} cx="60" cy="8" r="4" />
        <circle
          className={`${styles['symbol-node']} ${styles['node-two']}`}
          cx="108"
          cy="36"
          r="4"
        />
        <circle
          className={`${styles['symbol-node']} ${styles['node-three']}`}
          cx="108"
          cy="84"
          r="4"
        />
        <circle
          className={`${styles['symbol-node']} ${styles['node-four']}`}
          cx="60"
          cy="112"
          r="4"
        />
        <circle
          className={`${styles['symbol-node']} ${styles['node-five']}`}
          cx="12"
          cy="84"
          r="4"
        />
        <circle
          className={`${styles['symbol-node']} ${styles['node-six']}`}
          cx="12"
          cy="36"
          r="4"
        />
        <circle
          className={`${styles['symbol-node']} ${styles['node-center']}`}
          cx="60"
          cy="60"
          r="6"
        />
      </svg>
    </div>
  );
};
