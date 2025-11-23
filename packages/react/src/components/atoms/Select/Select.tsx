import React from 'react';
import { SelectProps } from './types';
import { cn } from '../../../lib/utils';

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    disabled, 
    invalid,
    fullWidth = false,
    options, 
    placeholder,
    onChange,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <select
        ref={ref}
        className={cn(
          'w-full px-3 py-2 text-[var(--font-size-base)] font-[var(--font-family-sans)] bg-background text-foreground border rounded-[var(--radius-lg)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0',
          invalid
            ? 'border-[var(--color-error-500)] focus:ring-[var(--color-error-500)] focus:border-[var(--color-error-500)]'
            : 'border-input focus:ring-ring focus:border-ring',
          disabled && 'bg-muted cursor-not-allowed opacity-60',
          className
        )}
        disabled={disabled}
        onChange={handleChange}
        role="combobox"
        aria-invalid={!!invalid}
        aria-disabled={disabled}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
