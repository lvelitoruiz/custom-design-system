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
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'md:text-sm',
          (error || invalid) && 'border-destructive focus-visible:ring-destructive',
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
