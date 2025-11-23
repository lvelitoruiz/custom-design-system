import { useCallback, useEffect, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface UseSelectNavigationOptions {
  options: Option[];
  isOpen: boolean;
  onSelect: (value: string) => void;
  onClose: () => void;
  searchable?: boolean;
  filterFunction?: (options: Option[], searchTerm: string) => Option[];
}

export const useSelectNavigation = ({
  options,
  isOpen,
  onSelect,
  onClose,
  searchable = false,
  filterFunction
}: UseSelectNavigationOptions) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filter options based on search term
  const filteredOptions = searchable && searchTerm
    ? filterFunction
      ? filterFunction(options, searchTerm)
      : options.filter(option => 
          option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : options;

  const enabledOptions = filteredOptions.filter(option => !option.disabled);
  
  // Reset highlighted index when options change or dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setHighlightedIndex(-1);
      setSearchTerm('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && highlightedIndex === -1 && enabledOptions.length > 0) {
      setHighlightedIndex(0);
    }
  }, [isOpen, enabledOptions.length, highlightedIndex]);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
      });
    }
  }, [highlightedIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => {
          const nextIndex = prev + 1;
          return nextIndex < enabledOptions.length ? nextIndex : 0;
        });
        break;

      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => {
          const nextIndex = prev - 1;
          return nextIndex >= 0 ? nextIndex : enabledOptions.length - 1;
        });
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();
        if (highlightedIndex >= 0 && enabledOptions[highlightedIndex]) {
          onSelect(enabledOptions[highlightedIndex].value);
          onClose();
        }
        break;

      case 'Escape':
        e.preventDefault();
        onClose();
        break;

      case 'Home':
        e.preventDefault();
        setHighlightedIndex(0);
        break;

      case 'End':
        e.preventDefault();
        setHighlightedIndex(enabledOptions.length - 1);
        break;

      default:
        if (searchable && e.key.length === 1) {
          setSearchTerm(prev => prev + e.key);
        }
        break;
    }
  }, [isOpen, highlightedIndex, enabledOptions, onSelect, onClose, searchable]);

  const handleOptionClick = useCallback((value: string) => {
    onSelect(value);
    onClose();
  }, [onSelect, onClose]);

  const setOptionRef = useCallback((index: number) => {
    return (el: HTMLDivElement | null) => {
      optionRefs.current[index] = el;
    };
  }, []);

  return {
    filteredOptions,
    highlightedIndex,
    searchTerm,
    setSearchTerm,
    handleKeyDown,
    handleOptionClick,
    listRef,
    setOptionRef,
    clearSearch: () => setSearchTerm('')
  };
};