import React from 'react';
import { ProgressProps } from './types';
import { cn } from '../../../lib/utils';

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  fullWidth = true,
  label = false,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  const variantClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
  };

  const labelText = label === true ? `${Math.round(percentage)}%` : label === false ? null : label;

  return (
    <div className={cn('flex flex-col gap-1', !fullWidth && 'w-auto', className)}>
      {labelText && (
        <span className="text-sm font-medium text-foreground">
          {labelText}
        </span>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          'overflow-hidden rounded-full bg-muted',
          sizeClasses[size],
          fullWidth && 'w-full'
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-300 ease-in-out',
            variantClasses[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
