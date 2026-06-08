import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.btn, styles[`btn--${variant}`], styles[`btn--${size}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};
