import React from 'react';
import { InputProps } from './types';
import { cn } from '../../../lib/utils';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    error, 
    className, 
    disabled, 
    invalid,
    leftIcon,
    rightIcon,
    fullWidth = false,
    onChange,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Call onChange with the string value for new API compatibility
      // This works because TypeScript allows both signatures
      onChange?.(e.target.value as any);
    };

    const inputElement = (
      <input
        ref={ref}
        className={cn(
          'w-full px-3 py-2 text-[var(--font-size-base)] font-[var(--font-family-sans)] bg-card text-foreground border rounded-[var(--radius-lg)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0',
          (error || invalid)
            ? 'border-[var(--color-error-500)] focus:ring-[var(--color-error-500)] focus:border-[var(--color-error-500)]'
            : 'border-input focus:ring-ring focus:border-ring',
          disabled && 'bg-muted cursor-not-allowed opacity-60',
          leftIcon && 'pl-9',
          rightIcon && 'pr-9',
          className
        )}
        disabled={disabled}
        onChange={handleChange}
        role="textbox"
        aria-invalid={!!(error || invalid)}
        aria-disabled={disabled}
        {...props}
      />
    );

    if (leftIcon || rightIcon) {
      return (
        <div className={cn('relative', fullWidth ? 'w-full' : 'inline-flex w-full')}>
          {leftIcon && (
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}
          
          {inputElement}
          
          {rightIcon && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>
      );
    }

    return inputElement;
  }
);

Input.displayName = 'Input';
