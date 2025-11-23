import React from 'react';
import { cn } from '../../../lib/utils';
import { IconProps } from './types';

export const Icon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor',
  children, 
  className
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        'transition-colors duration-200',
        className
      )}
      style={{
        width: size,
        height: size,
        color: color
      }}
      role="img"
    >
      {children}
    </span>
  );
};
