import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1>D&D Pet Project</h1>
      </header>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">
        <p>&copy; {new Date().getFullYear()} D&D Pet Project</p>
      </footer>
    </div>
  );
}
