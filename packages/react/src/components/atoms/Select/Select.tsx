import React from 'react';
import { SelectProps } from './types';
import { cn } from '../../../lib/utils';
import { ChevronDown } from 'lucide-react';

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
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
            'placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            '[&>span]:line-clamp-1',
            'appearance-none pr-10', // Hide default dropdown arrow and add padding for custom icon
            invalid && 'border-destructive focus:ring-destructive',
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
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
      </div>
    );
  }
);

Select.displayName = 'Select';
