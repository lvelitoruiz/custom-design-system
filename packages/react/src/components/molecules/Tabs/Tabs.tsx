import React, { useRef, useEffect } from 'react';
import { TabsProps } from './types';
import { cn } from '../../../lib/utils';

export const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  value, 
  onChange, 
  fullWidth = false,
  className 
}) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentIndex = tabs.findIndex(tab => tab.value === value);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      newIndex = index + 1 >= tabs.length ? 0 : index + 1;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = index - 1 < 0 ? tabs.length - 1 : index - 1;
    }

    if (newIndex !== index) {
      onChange(tabs[newIndex].value);
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div
      className={cn('flex flex-row gap-1 border-b border-[hsl(var(--border))] overflow-x-auto', className)}
      role="tablist"
      aria-orientation="horizontal"
    >
      {tabs.map((tab, index) => {
        const isActive = tab.value === value;

        return (
          <button
            key={tab.value}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              'px-4 py-2 rounded-t-md text-sm font-medium whitespace-nowrap transition-all duration-200',
              'border-b-2 cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2',
              isActive && [
                'text-[hsl(var(--primary))]',
                'border-[hsl(var(--primary))]',
                'opacity-100'
              ],
              !isActive && [
                'text-[hsl(var(--muted-foreground))]',
                'border-transparent',
                'hover:text-[hsl(var(--foreground))]'
              ],
              fullWidth && 'flex-1 text-center'
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
