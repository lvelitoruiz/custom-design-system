import React, { useEffect } from 'react';
import { ModalProps } from './types';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeButton = true,
  className
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  // Don't render if not open
  if (!open) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Modal container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          'w-full',
          sizeClasses[size],
          'max-h-[90vh]',
          'bg-[hsl(var(--card))]',
          'rounded-lg',
          'shadow-xl',
          'border border-[hsl(var(--border))]',
          'overflow-y-auto',
          'flex flex-col',
          className
        )}
      >
        {/* Header */}
        {(title || closeButton) && (
          <div className="px-6 py-4 border-b border-[hsl(var(--border))] flex items-center justify-between flex-shrink-0">
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-[hsl(var(--foreground))]"
              >
                {title}
              </h2>
            )}
            {closeButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className={cn(
                  'p-2',
                  'rounded-md',
                  'hover:bg-[hsl(var(--accent))]',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
                  !title && 'ml-auto'
                )}
              >
                <Icon size={20}>
                  <X className="w-full h-full" />
                </Icon>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 text-[hsl(var(--foreground))] flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-[hsl(var(--border))] flex justify-end gap-2 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
