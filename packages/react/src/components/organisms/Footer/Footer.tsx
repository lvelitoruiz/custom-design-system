import React from 'react';
import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="w-full bg-white border-t border-[var(--color-neutral-300)] px-6 py-4">
      {children}
    </footer>
  );
};
