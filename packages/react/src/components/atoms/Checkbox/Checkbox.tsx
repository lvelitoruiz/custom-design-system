import React, { useEffect, useRef, useId } from 'react';
import { CheckboxProps } from './types';
import { cn } from '../../../lib/utils';
import { Check, Minus } from 'lucide-react';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    checked = false,
    onChange,
    disabled,
    invalid,
    label,
    name,
    id,
    inline = false,
    className,
    // New Phase 2 props
    indeterminate = false,
    value,
    ...props 
  }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const generatedId = useId();
    
    // Handle indeterminate state
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    // Merge refs
    const mergedRef = (node: HTMLInputElement) => {
      inputRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    };

    // Generate a unique ID if none provided
    const checkboxId = id || (name && value ? `${name}-${value}` : name) || generatedId;

    // Determine visual state
    const isChecked = checked && !indeterminate;
    const isIndeterminate = indeterminate;

    const checkboxElement = (
      <div className="relative">
        <input
          ref={mergedRef}
          type="checkbox"
          id={checkboxId}
          name={name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only peer"
          role="checkbox"
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-disabled={disabled}
          aria-invalid={invalid}
          {...props}
        />
        <div
          className={cn(
            "peer h-4 w-4 shrink-0 rounded border border-gray-300 bg-white ring-offset-background transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "flex items-center justify-center text-current cursor-pointer",
            "dark:border-gray-600 dark:bg-gray-700",
            (isChecked || isIndeterminate) && "bg-primary border-primary text-white dark:bg-primary dark:border-primary",
            invalid && !checked && "border-red-500 dark:border-red-500",
            className
          )}
        >
          {isIndeterminate && (
            <Minus className="h-3 w-3" />
          )}
          {isChecked && !isIndeterminate && (
            <Check className="h-3 w-3" />
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
