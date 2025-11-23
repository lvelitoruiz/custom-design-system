import React, { useState, useRef, useEffect } from 'react';
import { DropdownProps } from './types';
import { cn } from '../../../lib/utils';

export const Dropdown: React.FC<DropdownProps> = ({ 
  trigger, 
  items, 
  onSelect, 
  align = "left",
  disabled = false,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  // Close if disabled changes to true
  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  return (
    <div className={cn("relative inline-block", className)} ref={dropdownRef}>
      <div 
        onClick={handleToggle}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      
      {isOpen && (
        <div 
          className={cn(
            "absolute mt-2 z-50",
            "bg-[hsl(var(--background))] border border-[hsl(var(--border))]",
            "rounded-lg shadow-md",
            "py-1 min-w-[160px]",
            "transition-colors duration-200",
            align === "left" ? "left-0" : "right-0"
          )}
          role="menu"
        >
          {items.map((item) => (
            <div
              key={item.value}
              className={cn(
                "px-3 py-2 text-sm cursor-pointer",
                "text-[hsl(var(--foreground))]",
                "hover:bg-[hsl(var(--accent))]",
                "transition-colors duration-150"
              )}
              role="menuitem"
              onClick={() => handleSelect(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
