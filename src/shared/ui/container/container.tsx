import type { ReactNode } from 'react';
import { cn } from '../../lib';
import styles from './container.module.scss';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main';
}

export const Container = ({
  children,
  size = 'lg',
  className,
  as: Component = 'div',
}: ContainerProps) => {
  return (
    <Component className={cn(styles.container, size && styles[`container--${size}`], className)}>
      {children}
    </Component>
  );
};
