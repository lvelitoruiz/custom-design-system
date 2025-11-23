import React from 'react';
import { EmptyStateProps } from './types';
import { cn } from '../../../lib/utils';

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className
}) => {
  return (
    <div
      role="status"
      aria-label="Empty state"
      className={cn(
        'w-full',
        'flex flex-col items-center justify-center text-center',
        'py-12 px-4',
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-[hsl(var(--muted-foreground))]">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-md mb-4">
          {description}
        </p>
      )}

      {/* Action */}
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
};
