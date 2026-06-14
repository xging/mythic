import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@mythic/shared/lib';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  isSelected?: boolean;
  children: ReactNode;
}

export const Card = ({ variant, isSelected = false, className, children, ...rest }: CardProps) => {
  return (
    <div
      className={cn(
        styles.card,
        variant && styles[`card--${variant}`],
        isSelected && styles.selected,
        rest.onClick && styles.clickable,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
