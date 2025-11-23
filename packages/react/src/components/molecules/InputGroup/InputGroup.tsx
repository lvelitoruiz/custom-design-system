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
        'border border-gray-300 dark:border-gray-600',
        'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-0',
        'transition-all duration-200',
        className
      )}
    >
      {leftAddon && (
        <div
          className={cn(
            'flex items-center justify-center',
            'bg-primary text-primary-foreground',
            'px-4 py-2.5 text-sm font-medium',
            'border-r-0',
            'transition-colors duration-200'
          )}
        >
          {leftAddon}
        </div>
      )}
      
      <div className="flex-1 [&_input]:border-0 [&_input]:focus:ring-0 [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0 [&_input]:rounded-none [&_input]:shadow-none [&>*]:flex-1">
        {children}
      </div>
      
      {rightAddon && (
        <div
          className={cn(
            'flex items-center justify-center',
            'bg-primary text-primary-foreground',
            'px-4 py-2.5 text-sm font-medium',
            'border-l-0',
            'transition-colors duration-200'
          )}
        >
          {rightAddon}
        </div>
      )}
    </div>
  );
};
