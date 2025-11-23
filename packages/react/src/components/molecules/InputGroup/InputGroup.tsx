import React from 'react';
import { InputGroupProps } from './types';
import { cn } from '../../../lib/utils';

export const InputGroup: React.FC<InputGroupProps> = ({
  leftAddon,
  rightAddon,
  children,
  className
}) => {
  return (
    <div
      role="group"
      className={cn(
        'flex items-stretch w-full',
        'rounded-lg overflow-hidden',
        'border border-[hsl(var(--border))]',
        'focus-within:ring-2 focus-within:ring-[hsl(var(--ring))] focus-within:ring-offset-0',
        'transition-all duration-200',
        className
      )}
    >
      {leftAddon && (
        <div
          className={cn(
            'flex items-center justify-center',
            'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]',
            'px-3 py-2 text-sm',
            'border-r border-[hsl(var(--border))]',
            'transition-colors duration-200'
          )}
        >
          {leftAddon}
        </div>
      )}
      
      <div className="flex-1 [&>input]:border-0 [&>input]:focus-visible:ring-0 [&>input]:focus-visible:ring-offset-0 [&>input]:rounded-none">
        {children}
      </div>
      
      {rightAddon && (
        <div
          className={cn(
            'flex items-center justify-center',
            'bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]',
            'px-3 py-2 text-sm',
            'border-l border-[hsl(var(--border))]',
            'transition-colors duration-200'
          )}
        >
          {rightAddon}
        </div>
      )}
    </div>
  );
};
