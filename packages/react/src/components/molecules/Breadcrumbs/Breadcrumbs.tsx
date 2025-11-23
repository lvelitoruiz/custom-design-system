import React from 'react';
import { BreadcrumbsProps } from './types';
import { cn } from '../../../lib/utils';
import { ChevronRight } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  separator,
  className 
}) => {
  const defaultSeparator = (
    <Icon size={16}>
      <ChevronRight className="w-full h-full" />
    </Icon>
  );

  const separatorElement = separator !== undefined ? separator : defaultSeparator;

  return (
    <nav 
      className={cn(
        'flex items-center gap-x-1.5 text-sm',
        className
      )}
      role="navigation"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const hasHref = Boolean(item.href);
        
        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="font-medium text-[hsl(var(--foreground))]">
                {item.label}
              </span>
            ) : hasHref ? (
              <a
                href={item.href}
                className="inline-flex items-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <span className="inline-flex items-center text-[hsl(var(--muted-foreground))]">
                {item.label}
              </span>
            )}
            
            {!isLast && (
              <span className="flex-shrink-0 text-[hsl(var(--muted-foreground))]">
                {separatorElement}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
