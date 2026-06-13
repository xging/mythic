import { useParams } from 'react-router-dom';
import styles from './placeholder-page.module.scss';

interface PlaceholderPageProps {
  title?: string;
}

export const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  const params = useParams();
  const pageName = title || params.pageName || 'Page';

  return (
    <main className={styles.placeholder}>
      <h2>{pageName}</h2>
      <p>This section is coming soon.</p>
    </main>
  );
};
