import React, { useState, useEffect } from 'react';
import { TextareaProps } from './types';
import { cn } from '../../../lib/utils';
import { useAutoResize } from '../../../hooks/useAutoResize';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    error, 
    className, 
    disabled,
    invalid,
    fullWidth = false,
    rows = 4,
    onChange,
    value: controlledValue,
    // New Phase 2 props
    autoResize = false,
    minRows = 2,
    maxRows,
    resizable = true,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState(controlledValue || '');
    
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    
    const { textareaRef, resize } = useAutoResize(String(value), {
      minRows,
      maxRows,
      enabled: autoResize
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      
      onChange?.(newValue as any);
    };

    // Merge refs
    const mergedRef = (node: HTMLTextAreaElement) => {
      if (textareaRef) {
        textareaRef.current = node;
      }
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <textarea
        ref={mergedRef}
        value={value}
        rows={autoResize ? minRows : rows}
        className={cn(
          "flex w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900",
          "placeholder:text-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
          "disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200",
          "dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400",
          "dark:focus:ring-primary dark:focus:border-primary",
          "dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600",
          "transition-colors",
          !autoResize && "min-h-[120px]",
          autoResize && "overflow-hidden",
          !resizable && "resize-none",
          resizable && !autoResize && "resize-y",
          (error || invalid) && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
          className
        )}
        disabled={disabled}
        onChange={handleChange}
        aria-invalid={!!(error || invalid)}
        aria-disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
