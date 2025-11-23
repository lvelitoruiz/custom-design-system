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
      onChange?.(e.target.value as any);
    };

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          (error || invalid) && 'border-destructive focus-visible:ring-destructive',
          className
        )}
        disabled={disabled}
        onChange={handleChange}
        aria-invalid={!!(error || invalid)}
        aria-disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
