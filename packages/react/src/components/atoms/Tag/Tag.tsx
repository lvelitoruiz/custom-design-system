import React from 'react';
import { TagProps } from './types';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';

const tagVariants = {
  primary: 'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary/50 text-secondary-foreground border border-border',
  success: 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20',
  warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20',
  danger: 'bg-destructive/10 text-destructive border border-destructive/20',
};

const tagSizes = {
  sm: 'text-xs py-0.5 px-2',
  md: 'text-sm py-1 px-3',
  lg: 'text-base py-1.5 px-4',
};

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  rounded = true,
  removable = false,
  onRemove,
  className,
  ...props
}) => {
  return (
    <span
      role="status"
      className={cn(
        'inline-flex items-center gap-1.5 font-medium transition-colors',
        tagVariants[variant],
        tagSizes[size],
        rounded ? 'rounded-full' : 'rounded-md',
        removable ? 'pr-1.5' : '',
        className
      )}
      {...props}
    >
      {children}
      {removable && onRemove && (
        <button
          type="button"
          onClick={onRemove}
          role="button"
          aria-label="Remove tag"
          className="ml-0.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
        >
          <X size={size === 'sm' ? 12 : size === 'lg' ? 16 : 14} />
        </button>
      )}
    </span>
  );
};
