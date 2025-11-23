export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  clearable?: boolean;
  onClear?: () => void;
  className?: string;
}
