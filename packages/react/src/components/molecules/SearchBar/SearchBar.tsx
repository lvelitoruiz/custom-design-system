import React, { useRef, useState } from 'react';
import { SearchBarProps } from './types';
import { cn } from '../../../lib/utils';
import { Search, X } from 'lucide-react';
import { Icon } from '../../atoms/Icon';

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  clearable = true,
  onClear,
  className
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      onChange("");
    }
    inputRef.current?.focus();
  };

  const showClearButton = clearable && value.length > 0;

  return (
    <div
      role="search"
      className={cn(
        'w-full flex items-center gap-x-2',
        'px-3 py-2.5',
        'rounded-[var(--radius-lg)]',
        'bg-card',
        'border border-input',
        'transition-all duration-200',
        isFocused && 'border-ring ring-2 ring-ring/20',
        className
      )}
    >
      {/* Search Icon */}
      <Icon size={20}>
        <Search 
          className="w-full h-full text-[hsl(var(--muted-foreground))]" 
          aria-hidden="true"
        />
      </Icon>

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        aria-label={placeholder ? undefined : "Search"}
        className={cn(
          'flex-grow',
          'bg-transparent',
          'border-none',
          'outline-none',
          'text-[hsl(var(--foreground))]',
          'placeholder:text-[hsl(var(--muted-foreground))]',
          'text-sm'
        )}
      />

      {/* Clear Button */}
      {showClearButton && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          role="button"
          className={cn(
            'flex-shrink-0',
            'p-1',
            'rounded-full',
            'hover:bg-[hsl(var(--accent))]',
            'transition-colors duration-200',
            'text-[hsl(var(--foreground))]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]'
          )}
        >
          <Icon size={16}>
            <X className="w-full h-full" />
          </Icon>
        </button>
      )}
    </div>
  );
};
