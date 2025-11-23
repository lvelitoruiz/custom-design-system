import React from 'react';
import { KBDProps } from './types';

export const KBD: React.FC<KBDProps> = ({ 
  children,
  className = '',
  ...props 
}) => {
  return (
    <kbd
      className={`inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-foreground bg-muted border border-border rounded shadow-sm ${className}`}
      {...props}
    >
      {children}
    </kbd>
  );
};
