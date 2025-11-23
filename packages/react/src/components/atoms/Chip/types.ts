export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  onRemove?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'error';
}
