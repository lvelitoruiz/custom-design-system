import React from 'react';
import { ToolbarProps } from './types';

export const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-white border border-[var(--color-neutral-300)] rounded-[var(--radius-lg)]">
      {children}
    </div>
  );
};
