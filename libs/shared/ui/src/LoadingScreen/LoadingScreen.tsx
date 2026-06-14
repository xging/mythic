import type { ReactNode } from 'react';
import styles from './loading-screen.module.scss';

interface LoadingScreenProps {
  children?: ReactNode;
  isVisible?: boolean;
  className?: string;
}

export const LoadingScreen = ({ children, isVisible = true, className }: LoadingScreenProps) => {
  if (!isVisible) return null;

  return (
    <main className={`${styles['loading-screen']} ${className ?? ''}`}>
      <div className={styles['loader-content']}>{children}</div>
    </main>
  );
};
