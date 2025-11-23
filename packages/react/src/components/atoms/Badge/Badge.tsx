import React from 'react';
import { BadgeProps } from './types';
import { cn } from '../../../lib/utils';

const badgeVariants = {
  primary: 'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary/50 text-secondary-foreground border border-border',
  success: 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20',
  warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20',
  danger: 'bg-destructive/10 text-destructive border border-destructive/20',
};

const badgeSizes = {
  sm: 'text-xs py-0.5 px-2',
  md: 'text-sm py-1 px-3',
  lg: 'text-base py-1.5 px-4',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = false,
  className,
  ...props
}) => {
  return (
    <span
      role="status"
      className={cn(
        'inline-flex items-center font-medium transition-colors',
        badgeVariants[variant],
        badgeSizes[size],
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
