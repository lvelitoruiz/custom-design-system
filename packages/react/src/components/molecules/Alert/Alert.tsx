import React from 'react';
import { AlertProps } from './types';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';

const alertVariants = {
  info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/50 dark:text-blue-100 dark:border-blue-800',
  success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950/50 dark:text-green-100 dark:border-green-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100 dark:border-amber-800',
  danger: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/50 dark:text-red-100 dark:border-red-800',
};

export const Alert: React.FC<AlertProps> = ({
  title,
  description,
  variant = 'info',
  icon,
  closable = false,
  onClose,
  className
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClose && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className={cn(
        'w-full flex items-start gap-3 rounded-lg border p-4 transition-all duration-200',
        alertVariants[variant],
        className
      )}
      role="alert"
    >
      {icon && (
        <div className="flex-shrink-0 flex items-center justify-center mt-0.5">
          {icon}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        {title && (
          <div className="font-medium text-sm mb-1">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm">
            {description}
          </div>
        )}
      </div>
      
      {closable && onClose && (
        <button
          onClick={onClose}
          onKeyDown={handleKeyDown}
          className="flex-shrink-0 p-1 rounded-full hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
          aria-label="Close alert"
          role="button"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
