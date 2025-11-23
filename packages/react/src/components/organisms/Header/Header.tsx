import React from 'react';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="w-full bg-white border-b border-[var(--color-neutral-300)] px-6 py-4">
      {children}
    </header>
  );
};
