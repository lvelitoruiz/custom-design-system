import React from 'react';
import { CardProps } from './types';
import { cn } from '../../../lib/utils';

const paddingVariants = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const shadowVariants = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  header,
  footer,
  padding = 'md',
  shadow = 'sm',
  bordered = false,
  className
}) => {
  const titleId = title ? `card-title-${React.useId()}` : undefined;

  return (
    <div
      role="region"
      aria-labelledby={titleId}
      className={cn(
        'bg-card text-card-foreground rounded-lg overflow-hidden transition-shadow duration-200',
        shadowVariants[shadow],
        bordered && 'border border-border',
        className
      )}
    >
      {header && (
        <div className="border-b border-border">
          {header}
        </div>
      )}
      
      <div className={cn(paddingVariants[padding])}>
        {(title || description) && (
          <div className="mb-3">
            {title && (
              <h3 
                id={titleId}
                className="text-base font-semibold text-foreground mb-1"
              >
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
      
      {footer && (
        <div className={cn(
          'border-t border-border',
          paddingVariants[padding]
        )}>
          {footer}
        </div>
      )}
    </div>
  );
};
