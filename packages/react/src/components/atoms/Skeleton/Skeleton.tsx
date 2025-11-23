import React from 'react';
import { SkeletonProps } from './types';

export const Skeleton: React.FC<SkeletonProps> = ({ 
  width,
  height,
  className = '',
  variant = 'rectangular',
  ...props 
}) => {
  const baseClasses = 'animate-pulse bg-muted rounded-md';
  
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
      {...props}
    />
  );
};
