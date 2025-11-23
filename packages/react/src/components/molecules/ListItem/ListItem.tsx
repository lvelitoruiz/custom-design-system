import React from 'react';
import { ListItemProps } from './types';
import { cn } from '../../../lib/utils';

export const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  leftIcon,
  rightIcon,
  clickable = false,
  active = false,
  onClick,
  className
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <div
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'w-full flex items-center',
        'px-4 py-3',
        'rounded-lg',
        'transition-all duration-200',
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-[hsl(var(--card))]',
        clickable && [
          'cursor-pointer',
          active 
            ? 'hover:bg-primary/90'
            : 'hover:bg-muted active:bg-muted/80',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2'
        ],
        !clickable && 'cursor-default',
        className
      )}
    >
      {leftIcon && (
        <div className="flex-shrink-0 mr-3 flex items-center justify-center">
          {leftIcon}
        </div>
      )}
      
      <div className="flex-1 flex flex-col gap-y-0.5 min-w-0">
        <span className={cn(
          "text-sm font-medium",
          active ? "text-primary-foreground" : "text-[hsl(var(--foreground))]"
        )}>
          {title}
        </span>
        {description && (
          <span className={cn(
            "text-sm",
            active ? "text-primary-foreground/80" : "text-[hsl(var(--muted-foreground))]"
          )}>
            {description}
          </span>
        )}
      </div>
      
      {rightIcon && (
        <div className="flex-shrink-0 ml-3 flex items-center justify-center">
          {rightIcon}
        </div>
      )}
    </div>
  );
};
