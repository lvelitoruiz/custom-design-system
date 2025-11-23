import React, { useState } from 'react';
import { NavbarProps } from './types';
import { cn } from '../../../lib/utils';
import { Menu, X } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const Navbar: React.FC<NavbarProps> = ({ 
  logo, 
  links = [], 
  rightContent,
  sticky = true,
  className 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        'w-full',
        sticky && 'sticky top-0 z-50',
        className
      )}
    >
      {/* Main navbar container */}
      <div
        className={cn(
          'w-full h-16',
          'px-4 md:px-6',
          'flex items-center justify-between',
          'bg-[hsl(var(--card))]',
          'border-b border-[hsl(var(--border))]',
          'transition-colors duration-200'
        )}
      >
        {/* Logo */}
        {logo && (
          <div className="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--foreground))]">
            {logo}
          </div>
        )}

        {/* Desktop Links */}
        {links.length > 0 && (
          <div className="hidden md:flex gap-x-6 flex-1 justify-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cn(
                  'text-sm font-medium',
                  'text-[hsl(var(--foreground))]',
                  'hover:text-[hsl(var(--primary))]',
                  'transition-colors duration-200'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Right content */}
        <div className="flex items-center gap-4">
          {rightContent && (
            <div className="hidden md:flex items-center">
              {rightContent}
            </div>
          )}

          {/* Mobile menu button */}
          {links.length > 0 && (
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              className={cn(
                'flex md:hidden',
                'p-2',
                'rounded-md',
                'hover:bg-[hsl(var(--accent))]',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]'
              )}
            >
              <Icon size={24}>
                {mobileMenuOpen ? (
                  <X className="w-full h-full" />
                ) : (
                  <Menu className="w-full h-full" />
                )}
              </Icon>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && links.length > 0 && (
        <div
          className={cn(
            'md:hidden',
            'flex flex-col',
            'gap-2',
            'p-4',
            'bg-[hsl(var(--card))]',
            'border-b border-[hsl(var(--border))]'
          )}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'px-3 py-2',
                'text-sm font-medium',
                'text-[hsl(var(--foreground))]',
                'hover:text-[hsl(var(--primary))]',
                'hover:bg-[hsl(var(--accent))]',
                'rounded-md',
                'transition-colors duration-200'
              )}
            >
              {link.label}
            </a>
          ))}
          
          {rightContent && (
            <div className="mt-2 pt-2 border-t border-[hsl(var(--border))]">
              {rightContent}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
