import type { ReactNode } from 'react';
import { AppRouter } from '@/app/router';

interface ProvidersProps {
  children?: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <AppRouter />
      {children}
    </>
  );
}