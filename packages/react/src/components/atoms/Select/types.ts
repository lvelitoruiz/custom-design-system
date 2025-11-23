export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SelectOption[];
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
  // New Phase 2 props
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  multiple?: boolean;
  maxMenuHeight?: number;
  filterFunction?: (options: SelectOption[], searchTerm: string) => SelectOption[];
  renderOption?: (option: SelectOption, isHighlighted: boolean) => React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
}
