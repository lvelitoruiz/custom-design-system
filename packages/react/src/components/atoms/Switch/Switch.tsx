import React from 'react';
import { SwitchProps } from './types';
import { cn } from '../../../lib/utils';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onChange, disabled, label, name, id, inline = true, className, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    };

    const switchElement = (
      <div className="relative inline-block">
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
          {...props}
        />
        <div 
          className={cn(
            "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:cursor-not-allowed disabled:opacity-50",
            checked 
              ? "bg-primary" 
              : "bg-input",
            className
          )}
        >
          <span 
            className={cn(
              "pointer-events-none absolute left-0.5 inline-block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
              checked 
                ? "translate-x-5" 
                : "translate-x-0"
            )}
          />
        </div>
      </div>
    );

    if (label) {
      return (
        <label 
          htmlFor={id}
          className={cn(
            inline ? "inline-flex" : "flex",
            "items-center gap-2",
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          )}
        >
          {switchElement}
          <span className="text-sm select-none">
            {label}
          </span>
        </label>
      );
    }

    return switchElement;
  }
);

Switch.displayName = 'Switch';
