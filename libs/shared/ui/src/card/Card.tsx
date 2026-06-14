import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@mythic/shared/lib';
import styles from './Card.module.scss';

type CardVariant = 'default' | 'outlined' | 'elevated' | 'ghost';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  isSelected?: boolean;
  children: ReactNode;
}

export const Card = ({
  variant = 'default',
  isSelected = false,
  className,
  children,
  ...rest
}: CardProps) => {
  const isClickable = Boolean(rest.onClick);

  return (
    <div
      className={cn(
        styles.card,
        styles[`card--${variant}`],
        isSelected && styles.selected,
        isClickable && styles.clickable,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
