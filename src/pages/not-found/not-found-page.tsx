import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { ROUTES } from '@/app/router/routes';
import styles from './not-found-page.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to={ROUTES.home}>
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};
