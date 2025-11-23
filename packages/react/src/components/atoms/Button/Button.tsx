import React from 'react';
import { ButtonProps } from './types';
import { cn } from '../../../lib/utils';

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm border border-primary/20 focus-visible:ring-primary',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border border-input shadow-sm focus-visible:ring-ring',
  ghost: 'bg-transparent text-primary hover:bg-accent hover:text-accent-foreground active:bg-accent/80 focus-visible:ring-ring',
};

const buttonSizes = {
  sm: 'h-8 px-4 text-sm gap-1.5',
  md: 'h-10 px-5 text-base gap-2',
  lg: 'h-12 px-6 text-lg gap-2.5',
};

const iconSizes = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  leftIcon,
  rightIcon,
  children,
  className,
  type = 'button',
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      role="button"
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <span
          className={cn('animate-spin rounded-full border-2 border-current border-t-transparent', iconSizes[size])}
          aria-hidden="true"
        />
      )}
      {!loading && leftIcon && (
        <span className={cn('flex-shrink-0', iconSizes[size])} aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children && <span>{children}</span>}
      {!loading && rightIcon && (
        <span className={cn('flex-shrink-0', iconSizes[size])} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
