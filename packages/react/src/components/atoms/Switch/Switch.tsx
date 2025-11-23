import React from 'react';
import { SwitchProps } from './types';
import { cn } from '../../../lib/utils';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onChange, disabled, label, name, id, inline = true }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    };

    return (
      <label 
        htmlFor={id}
        className={cn(
          inline ? "inline-flex" : "flex",
          "items-center gap-2",
          disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        )}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
            role="switch"
            aria-checked={checked}
            aria-disabled={disabled}
          />
          <div 
            className={cn(
              'w-11 h-6 rounded-full transition-all duration-200',
              'border-2',
              checked 
                ? 'bg-primary border-primary' 
                : 'bg-input border-border',
              !disabled && 'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background',
              !disabled && !checked && 'hover:border-border/80'
            )}
          />
          <div 
            className={cn(
              'absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-200',
              'bg-background shadow-sm',
              checked && 'translate-x-5'
            )}
          />
        </div>
        {label && (
          <span className="text-[var(--font-size-base)] select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
