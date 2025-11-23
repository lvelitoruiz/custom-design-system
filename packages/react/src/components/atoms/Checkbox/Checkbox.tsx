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
      onChange?.(e.target.checked);
    };

    const checkboxId = id || name;

    const checkboxElement = (
      <div className="relative">
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only peer"
          role="checkbox"
          aria-checked={checked}
          aria-disabled={disabled}
          aria-invalid={invalid}
          {...props}
        />
        <div
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "flex items-center justify-center text-current",
            checked
              ? "bg-primary text-primary-foreground"
              : "bg-background",
            invalid && !checked && "border-destructive",
            className
          )}
        >
          {checked && (
            <Check className="h-4 w-4" />
          )}
        </div>
      </div>
    );

    if (label) {
      return (
        <label 
          className={cn(
            inline ? 'inline-flex' : 'flex',
            'items-center gap-2',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          )}
          htmlFor={checkboxId}
        >
          {checkboxElement}
          <span 
            className={cn(
              'text-sm select-none',
              disabled && 'opacity-50'
            )}
          >
            {label}
          </span>
        </label>
      );
    }

    return checkboxElement;
  }
);

Checkbox.displayName = 'Checkbox';
