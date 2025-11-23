import React from 'react';
import { SidebarProps } from './types';
import { cn } from '../../../lib/utils';

export const Sidebar: React.FC<SidebarProps> = ({ 
  items,
  collapsed = false,
  onToggle,
  header,
  footer,
  className 
}) => {
  return (
    <aside
      role="navigation"
      aria-label="Sidebar"
      className={cn(
        'flex flex-col',
        'bg-[hsl(var(--card))]',
        'border-r border-[hsl(var(--border))]',
        'h-full',
        'transition-all duration-300',
        'overflow-hidden',
        collapsed ? 'w-20' : 'w-60',
        className
      )}
    >
      {/* Header */}
      {header && (
        <div className={cn(
          'px-4 py-3',
          'border-b border-[hsl(var(--border))]',
          'flex items-center',
          collapsed ? 'justify-center' : 'justify-start'
        )}>
          {header}
        </div>
      )}

      {/* Items list */}
      <nav className="flex flex-col gap-1 mt-2 flex-1 overflow-y-auto px-2">
        {items.map((item) => {
          const ItemWrapper = item.href ? 'a' : 'button';
          const itemProps = item.href 
            ? { href: item.href, role: 'link' } 
            : { type: 'button' as const, role: 'button' };

          return (
            <ItemWrapper
              key={item.id}
              {...itemProps}
              className={cn(
                'flex items-center gap-3',
                'px-4 py-2.5',
                'rounded-md',
                'transition-colors duration-200',
                'cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
                'text-left',
                collapsed && 'justify-center',
                item.active
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'text-[hsl(var(--foreground))] hover:bg-muted'
              )}
            >
              {/* Icon */}
              {item.icon && (
                <span className="flex-shrink-0 flex items-center justify-center">
                  {item.icon}
                </span>
              )}

              {/* Label */}
              {!collapsed && (
                <span className="text-sm font-medium truncate">
                  {item.label}
                </span>
              )}
            </ItemWrapper>
          );
        })}
      </nav>

      {/* Footer */}
      {footer && (
        <div className={cn(
          'px-4 py-3',
          'border-t border-[hsl(var(--border))]',
          'flex items-center',
          collapsed ? 'justify-center' : 'justify-start'
        )}>
          {footer}
        </div>
      )}
    </aside>
  );
};
