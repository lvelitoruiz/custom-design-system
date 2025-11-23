import React from 'react';
import { PaginationProps } from './types';
import { cn } from '../../../lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onChange,
  className
}) => {
  const isPrevDisabled = page === 1;
  const isNextDisabled = page === totalPages;

  const handlePrev = () => {
    if (!isPrevDisabled) {
      onChange(page - 1);
    }
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      onChange(page + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber !== page) {
      onChange(pageNumber);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn(
        'flex items-center justify-center gap-x-2 py-4',
        className
      )}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={isPrevDisabled}
        aria-disabled={isPrevDisabled}
        aria-label="Previous page"
        className={cn(
          'flex items-center gap-1',
          'px-3 py-1.5',
          'rounded-md',
          'text-sm font-medium',
          'border border-[hsl(var(--border))]',
          'text-[hsl(var(--foreground))]',
          'transition-colors duration-200',
          isPrevDisabled
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-[hsl(var(--muted))] cursor-pointer'
        )}
      >
        <Icon size={16}>
          <ChevronLeft className="w-full h-full" />
        </Icon>
        <span>Prev</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
        const isActive = pageNumber === page;
        
        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => handlePageClick(pageNumber)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Page ${pageNumber}`}
            className={cn(
              'px-3 py-1.5',
              'rounded-md',
              'text-sm font-medium',
              'border',
              'transition-colors duration-200',
              isActive
                ? 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border-[hsl(var(--primary))]'
                : 'border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] cursor-pointer'
            )}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={isNextDisabled}
        aria-disabled={isNextDisabled}
        aria-label="Next page"
        className={cn(
          'flex items-center gap-1',
          'px-3 py-1.5',
          'rounded-md',
          'text-sm font-medium',
          'border border-[hsl(var(--border))]',
          'text-[hsl(var(--foreground))]',
          'transition-colors duration-200',
          isNextDisabled
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-[hsl(var(--muted))] cursor-pointer'
        )}
      >
        <span>Next</span>
        <Icon size={16}>
          <ChevronRight className="w-full h-full" />
        </Icon>
      </button>
    </nav>
  );
};
