import React from 'react';
import { RadioProps } from './types';
import { cn } from '../../../lib/utils';
import { Circle } from 'lucide-react';

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
      onChange?.(e.target.checked);
    };

    const radioId = id || `${name}-${value}`;

    const radioElement = (
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
          className="sr-only peer"
          role="radio"
          aria-checked={checked}
          aria-disabled={disabled}
          aria-invalid={invalid}
          {...props}
        />
        <div
          className={cn(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "flex items-center justify-center",
            invalid && !checked && "border-destructive",
            className
          )}
        >
          {checked && (
            <Circle className="h-2.5 w-2.5 fill-current text-current" />
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
          htmlFor={radioId}
        >
          {radioElement}
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

    return radioElement;
  }
);

Radio.displayName = 'Radio';
