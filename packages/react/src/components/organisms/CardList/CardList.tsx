import React from 'react';
import { CardListProps } from './types';
import { cn } from '../../../lib/utils';

export const CardList: React.FC<CardListProps> = ({
  items,
  cols = 3,
  gap = 4,
  className
}) => {
  // Dynamic grid columns class based on cols prop
  const getColsClass = () => {
    switch (cols) {
      case 1:
        return 'lg:grid-cols-1';
      case 2:
        return 'lg:grid-cols-2';
      case 3:
        return 'lg:grid-cols-3';
      case 4:
        return 'lg:grid-cols-4';
      case 5:
        return 'lg:grid-cols-5';
      case 6:
        return 'lg:grid-cols-6';
      default:
        return 'lg:grid-cols-3';
    }
  };

  // Dynamic gap class based on gap prop
  const getGapClass = () => {
    switch (gap) {
      case 0:
        return 'gap-0';
      case 1:
        return 'gap-1';
      case 2:
        return 'gap-2';
      case 3:
        return 'gap-3';
      case 4:
        return 'gap-4';
      case 5:
        return 'gap-5';
      case 6:
        return 'gap-6';
      case 8:
        return 'gap-8';
      case 10:
        return 'gap-10';
      case 12:
        return 'gap-12';
      default:
        return 'gap-4';
    }
  };

  return (
    <div
      role="list"
      className={cn(
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        getColsClass(),
        getGapClass(),
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} role="listitem">
          {item}
        </div>
      ))}
    </div>
  );
};
