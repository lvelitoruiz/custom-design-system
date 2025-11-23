import React from 'react';
import { ListGroupProps } from './types';

export const ListGroup: React.FC<ListGroupProps> = ({ children }) => {
  return (
    <ul className="w-full bg-white border border-[var(--color-neutral-300)] rounded-[var(--radius-lg)] overflow-hidden">
      {children}
    </ul>
  );
};
