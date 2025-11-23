import React, { useState, useRef, useEffect } from 'react';
import { UserMenuProps } from './types';
import { cn } from '../../../lib/utils';
import { ChevronDown } from 'lucide-react';
import { Icon } from '../../atoms/Icon';
import { Avatar } from '../../atoms/Avatar';

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  items,
  onSelect,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div ref={menuRef} className={cn('relative', className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(
          'flex items-center gap-3',
          'px-3 py-2',
          'rounded-md',
          'hover:bg-[hsl(var(--muted))]',
          'cursor-pointer',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]'
        )}
      >
        {/* Avatar */}
        <Avatar
          src={user.avatarSrc}
          fallback={user.name.substring(0, 2).toUpperCase()}
          alt={user.name}
          size="md"
        />

        {/* User Info */}
        <div className="flex flex-col leading-tight text-left">
          <span className="text-sm font-medium text-[hsl(var(--foreground))]">
            {user.name}
          </span>
          {user.email && (
            <span className="text-xs text-[hsl(var(--muted-foreground))]">
              {user.email}
            </span>
          )}
        </div>

        {/* Chevron */}
        <Icon size={16}>
          <ChevronDown
            className={cn(
              'w-full h-full text-[hsl(var(--muted-foreground))]',
              'transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </Icon>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          className={cn(
            'absolute mt-2 right-0',
            'bg-[hsl(var(--card))]',
            'border border-[hsl(var(--border))]',
            'shadow-lg',
            'rounded-md',
            'py-2',
            'min-w-[180px]',
            'z-50',
            'flex flex-col'
          )}
        >
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => handleItemClick(item.value)}
              role="menuitem"
              className={cn(
                'px-4 py-2.5',
                'flex items-center gap-3',
                'text-sm text-[hsl(var(--foreground))]',
                'hover:bg-[hsl(var(--muted))]',
                'transition-colors duration-200',
                'cursor-pointer',
                'text-left',
                'w-full'
              )}
            >
              {item.icon && (
                <div className="text-[hsl(var(--foreground))]">
                  {item.icon}
                </div>
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
