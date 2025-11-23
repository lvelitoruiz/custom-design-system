import React from 'react';
import { TextareaProps } from './types';
import { cn } from '../../../lib/utils';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    error, 
    className, 
    disabled,
    invalid,
    fullWidth = false,
    rows = 4,
    onChange,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Call onChange with the string value for new API compatibility
      onChange?.(e.target.value as any);
    };

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'w-full px-3 py-2 text-[var(--font-size-base)] font-[var(--font-family-sans)] bg-card text-foreground border rounded-[var(--radius-lg)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 min-h-[80px]',
          (error || invalid)
            ? 'border-[var(--color-error-500)] focus:ring-[var(--color-error-500)] focus:border-[var(--color-error-500)]'
            : 'border-input focus:ring-ring focus:border-ring',
          disabled && 'bg-muted cursor-not-allowed opacity-60',
          className
        )}
        disabled={disabled}
        onChange={handleChange}
        role="textbox"
        aria-multiline="true"
        aria-invalid={!!(error || invalid)}
        aria-disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
