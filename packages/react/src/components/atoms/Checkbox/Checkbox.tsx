import React from 'react';
import { CheckboxProps } from './types';
import { cn } from '../../../lib/utils';
import { Check } from 'lucide-react';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    checked,
    onChange,
    disabled,
    invalid,
    label,
    name,
    id,
    inline = false,
    className,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    };

    const checkboxId = id || name;

    return (
      <label 
        className={cn(
          inline ? 'inline-flex' : 'flex',
          'items-center gap-2',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
        htmlFor={checkboxId}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            name={name}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            role="checkbox"
            aria-checked={checked}
            aria-disabled={disabled}
            aria-invalid={invalid}
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 rounded-[var(--radius-md)] border-2 transition-all duration-200 flex items-center justify-center',
              checked
                ? 'bg-primary border-primary'
                : invalid
                  ? 'bg-background border-[var(--color-error-500)]'
                  : 'bg-background border-input',
              !disabled && !checked && 'hover:border-ring',
              disabled && 'opacity-60',
              !disabled && 'focus-within:ring-2 focus-within:ring-offset-0',
              checked && !invalid
                ? 'focus-within:ring-ring'
                : invalid
                  ? 'focus-within:ring-[var(--color-error-500)]'
                  : 'focus-within:ring-ring',
              className
            )}
          >
            {checked && (
              <Check 
                size={14} 
                className="text-primary-foreground" 
                strokeWidth={3}
              />
            )}
          </div>
        </div>
        {label && (
          <span 
            className={cn(
              'text-[var(--font-size-base)] font-[var(--font-family-sans)] text-foreground',
              disabled && 'opacity-60'
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
