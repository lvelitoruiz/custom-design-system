import React from 'react';
import { FormFieldProps } from './types';
import { cn } from '../../../lib/utils';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  error,
  hint,
  children,
  id,
  className
}) => {
  const errorId = id ? `${id}-error` : undefined;
  const hintId = id ? `${id}-hint` : undefined;

  // Clone children to add id and aria-describedby
  const childrenWithProps = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<any>, {
        id: id || (children as any).props?.id,
        'aria-describedby': error ? errorId : hint ? hintId : undefined,
        'aria-invalid': error ? true : undefined,
      })
    : children;

  return (
    <div className={cn('flex flex-col gap-y-1.5', className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-foreground"
        >
          {label}
          {required && (
            <span className="text-destructive ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}
      
      {childrenWithProps}
      
      {error && (
        <p
          id={errorId}
          className="text-xs text-destructive mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
      
      {!error && hint && (
        <p
          id={hintId}
          className="text-xs text-muted-foreground mt-1"
        >
          {hint}
        </p>
      )}
    </div>
  );
};
