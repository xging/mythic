import { PortalLogo } from './PortalLogo';
import { LoadingText } from './LoadingText';
import { LoadingProgress } from './LoadingProgress';
import styles from './loading-screen.module.scss';

interface LoadingScreenProps {
  isVisible?: boolean;
}

export const LoadingScreen = ({ isVisible = true }: LoadingScreenProps) => {
  if (!isVisible) return null;

  return (
    <main className={styles['loading-screen']}>
      <section className={styles['nexus-loader']} aria-label="Loading Nexus Multiverse Archive">
        <PortalLogo />
        <LoadingText />
        <LoadingProgress />
      </section>
    </main>
  );
};
