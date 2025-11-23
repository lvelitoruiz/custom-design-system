import React, { useEffect, useState } from 'react';
import { InputProps } from './types';
import { cn } from '../../../lib/utils';
import { useInputValidation } from '../../../hooks/useInputValidation';
import { useDebounce } from '../../../hooks/useDebounce';
import { X, Loader2 } from 'lucide-react';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    error, 
    className, 
    disabled, 
    invalid,
    leftIcon,
    rightIcon,
    fullWidth = false,
    onChange,
    value: controlledValue,
    // New Phase 2 props
    loading = false,
    validation = [],
    validateOnChange = false,
    validateOnBlur = true,
    onValidationChange,
    clearable = false,
    debounceMs = 0,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState(controlledValue || '');
    const [isFocused, setIsFocused] = useState(false);
    
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const debouncedValue = useDebounce(String(value), debounceMs);
    
    const { errors, isValid, validate, hasBeenValidated } = useInputValidation(
      debouncedValue,
      validation,
      validateOnChange
    );

    // Call validation change callback
    useEffect(() => {
      if (hasBeenValidated && onValidationChange) {
        onValidationChange(isValid, errors);
      }
    }, [isValid, errors, hasBeenValidated, onValidationChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      
      onChange?.(newValue as any);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (validateOnBlur) {
        validate();
      }
      props.onBlur?.(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleClear = () => {
      const newValue = '';
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue as any);
    };

    const hasValidationError = hasBeenValidated && !isValid && errors.length > 0;
    const showError = !!(error || invalid || hasValidationError);

    // Calculate padding based on icons
    let paddingLeft = 'pl-4';
    let paddingRight = 'pr-4';
    
    if (leftIcon) paddingLeft = 'pl-10';
    if (rightIcon || loading || clearable) paddingRight = 'pr-10';
    if ((rightIcon && loading) || (rightIcon && clearable) || (loading && clearable)) paddingRight = 'pr-16';
    if (rightIcon && loading && clearable) paddingRight = 'pr-20';

    const inputElement = (
      <input
        ref={ref}
        value={value}
        className={cn(
          'flex h-11 w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 text-sm text-gray-900',
          'placeholder:text-gray-500',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
          'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
          'dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400',
          'dark:focus:ring-primary dark:focus:border-primary',
          'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
          'transition-colors',
          showError && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
          paddingLeft,
          paddingRight,
          className
        )}
        disabled={disabled || loading}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        role="textbox"
        aria-invalid={showError}
        aria-disabled={disabled}
        aria-describedby={hasValidationError ? `${props.id}-error` : undefined}
        {...props}
      />
    );

    const wrapperElement = (
      <div className={cn('relative', fullWidth ? 'w-full' : 'inline-flex w-full')}>
        {leftIcon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}
        
        {inputElement}
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {loading && (
            <Loader2 className="w-4 h-4 text-gray-500 dark:text-gray-400 animate-spin" />
          )}
          
          {clearable && value && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Clear input"
              tabIndex={-1}
            >
              <X className="w-3 h-3" />
            </button>
          )}
          
          {rightIcon && (
            <span
              className="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>
        
        {hasValidationError && (
          <div
            id={`${props.id}-error`}
            className="absolute -bottom-5 left-0 text-xs text-red-500 dark:text-red-400"
            role="alert"
            aria-live="polite"
          >
            {errors[0]}
          </div>
        )}
      </div>
    );

    return wrapperElement;
  }
);

Input.displayName = 'Input';
