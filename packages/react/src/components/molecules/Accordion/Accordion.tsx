import React, { useState } from 'react';
import { AccordionProps } from './types';
import { cn } from '../../../lib/utils';
import { ChevronDown } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  multiple = false, 
  defaultOpen = [],
  className 
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (multiple) {
      setOpenItems(prev =>
        prev.includes(id)
          ? prev.filter(itemId => itemId !== id)
          : [...prev, id]
      );
    } else {
      setOpenItems(prev =>
        prev.includes(id) ? [] : [id]
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className={cn('w-full flex flex-col divide-y divide-[hsl(var(--border))]', className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="flex flex-col">
            {/* Title row */}
            <button
              role="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className={cn(
                'w-full flex justify-between items-center',
                'px-4 py-3',
                'cursor-pointer',
                'font-medium text-foreground',
                'bg-card hover:bg-muted/50',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              <span>{item.title}</span>
              <Icon size={18}>
                <ChevronDown 
                  className={cn(
                    'w-full h-full transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )} 
                />
              </Icon>
            </button>

            {/* Content panel */}
            <div
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-4 py-3 text-sm text-[hsl(var(--foreground))] bg-muted/30">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
