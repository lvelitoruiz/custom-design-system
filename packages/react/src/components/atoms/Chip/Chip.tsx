import React from 'react';
import { ChipProps } from './types';

export const Chip: React.FC<ChipProps> = ({ 
  label,
  onRemove,
  className = '',
  variant = 'default',
  ...props 
}) => {
  const variantClasses = {
    default: 'bg-muted text-foreground',
    primary: 'bg-primary text-primary-foreground',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {label}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:opacity-70 focus:outline-none"
          aria-label="Remove"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
};
