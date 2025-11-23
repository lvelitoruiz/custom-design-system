import React from 'react';
import { RadioProps } from './types';
import { cn } from '../../../lib/utils';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    checked,
    onChange,
    disabled,
    invalid,
    label,
    name,
    id,
    value,
    inline = false,
    className,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    };

    const radioId = id || name;

    return (
      <label 
        className={cn(
          inline ? 'inline-flex' : 'flex',
          'items-center gap-2',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        )}
        htmlFor={radioId}
      >
        <div className="relative">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            name={name}
            value={value}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
            role="radio"
            aria-checked={checked}
            aria-disabled={disabled}
            aria-invalid={invalid}
            {...props}
          />
          <div
            className={cn(
              'w-[18px] h-[18px] rounded-full border-2 transition-all duration-200 flex items-center justify-center',
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
              <div 
                className="w-[10px] h-[10px] rounded-full bg-primary-foreground" 
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

Radio.displayName = 'Radio';
