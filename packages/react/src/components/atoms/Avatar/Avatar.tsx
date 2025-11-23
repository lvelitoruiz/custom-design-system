import React, { useState } from 'react';
import { AvatarProps } from './types';
import { cn } from '../../../lib/utils';

const avatarSizes = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  rounded = true,
  fallback,
  className,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const showImage = src && !imageError;
  const showFallback = !showImage && fallback;

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'inline-flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground font-semibold transition-colors border border-border/50',
        avatarSizes[size],
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      ) : showFallback ? (
        <span className="select-none uppercase" aria-label="Avatar placeholder">
          {fallback}
        </span>
      ) : null}
    </div>
  );
};
