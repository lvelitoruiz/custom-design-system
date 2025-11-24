import React, { useState, useRef } from 'react';
import { SelectProps, SelectOption } from './types';
import { cn } from '../../../lib/utils';
import { ChevronDown, X, Search, Loader2, Check } from 'lucide-react';
import { useSelectNavigation } from '../../../hooks/useSelectNavigation';
import { useClickOutside } from '../../../hooks/useClickOutside';

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ 
    className, 
    disabled = false,
    invalid = false,
    fullWidth = false,
    options = [],
    placeholder = "Select an option...",
    value,
    onChange,
    // New Phase 2 props
    searchable = false,
    clearable = false,
    loading = false,
    maxMenuHeight = 200,
    filterFunction,
    renderOption,
    onFocus,
    onBlur,
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const selectRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find(option => option.value === value);

    const {
      filteredOptions,
      highlightedIndex,
      searchTerm,
      setSearchTerm,
      handleKeyDown,
      handleOptionClick,
      listRef,
      setOptionRef,
      clearSearch
    } = useSelectNavigation({
      options,
      isOpen,
      onSelect: (selectedValue) => {
        onChange?.(selectedValue);
      },
      onClose: () => setIsOpen(false),
      searchable,
      filterFunction
    });

    useClickOutside(selectRef, () => {
      if (isOpen) {
        setIsOpen(false);
        setIsFocused(false);
        onBlur?.();
      }
    });

    const handleToggle = () => {
      if (disabled || loading) return;
      
      if (!isOpen) {
        setIsOpen(true);
        setIsFocused(true);
        onFocus?.();
        // Focus search input if searchable
        setTimeout(() => {
          if (searchable && searchInputRef.current) {
            searchInputRef.current.focus();
          }
        }, 0);
      } else {
        setIsOpen(false);
        setIsFocused(false);
        onBlur?.();
      }
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      onChange?.('');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    return (
      <div 
        ref={selectRef}
        className={cn(
          'relative', 
          fullWidth ? 'w-full' : 'inline-block w-full',
          isOpen && 'z-50'
        )}
        {...props}
      >
        {/* Trigger */}
        <div
          ref={ref}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-invalid={invalid}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={cn(
            'flex h-11 w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900',
            'cursor-pointer transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
            'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
            'dark:focus:ring-primary dark:focus:border-primary',
            'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
            invalid && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
            disabled && 'cursor-not-allowed',
            className
          )}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <div className="flex-1 truncate">
            {selectedOption ? (
              <span className="text-gray-900 dark:text-white">
                {selectedOption.label}
              </span>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">
                {placeholder}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1 ml-2">
            {loading && (
              <Loader2 className="w-4 h-4 text-gray-500 dark:text-gray-400 animate-spin" />
            )}
            
            {clearable && selectedOption && !loading && (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                aria-label="Clear selection"
                tabIndex={-1}
              >
                <X className="w-3 h-3" />
              </button>
            )}
            
            <ChevronDown 
              className={cn(
                "w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform",
                isOpen && "rotate-180"
              )} 
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div 
            className={cn(
              "absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden flex flex-col",
              "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
            )}
            style={{ maxHeight: maxMenuHeight }}
          >
            {searchable && (
              <div className="p-2 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={cn(
                      "w-full pl-9 pr-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600",
                      "bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                      "placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    )}
                  />
                </div>
              </div>
            )}
            
            <div
              ref={listRef}
              role="listbox"
              className="flex-1 overflow-y-auto p-1 min-h-0"
            >
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  No options found
                </div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isHighlighted = index === highlightedIndex;
                  const isSelected = option.value === value;
                  
                  return (
                    <div
                      key={option.value}
                      ref={setOptionRef(index)}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled}
                      className={cn(
                        "relative flex items-center px-3 py-2 text-sm rounded-md cursor-pointer",
                        "transition-colors",
                        isHighlighted && "bg-gray-100 dark:bg-gray-700",
                        isSelected && "bg-primary/10 text-primary dark:bg-primary/20",
                        option.disabled && "opacity-50 cursor-not-allowed",
                        !option.disabled && !isHighlighted && !isSelected && "hover:bg-gray-50 dark:hover:bg-gray-750"
                      )}
                      onClick={() => !option.disabled && handleOptionClick(option.value)}
                    >
                      <div className="flex-1 truncate">
                        {renderOption ? renderOption(option, isHighlighted) : option.label}
                      </div>
                      
                      {isSelected && (
                        <Check className="w-4 h-4 text-primary ml-2 flex-shrink-0" />
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
