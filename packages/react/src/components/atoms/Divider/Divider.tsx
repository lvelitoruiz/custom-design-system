import React from 'react';
import { DividerProps } from './types';

export const Divider: React.FC<DividerProps> = ({ 
  orientation = 'horizontal',
  className = '',
  ...props 
}) => {
  const orientationClasses = orientation === 'horizontal' 
    ? 'w-full h-px' 
    : 'h-full w-px';

  return (
    <div
      className={`bg-border ${orientationClasses} ${className}`}
      role="separator"
      {...props}
    />
  );
};
