export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value?: string;
  onChange?: ((value: string) => void) | React.ChangeEventHandler<HTMLTextAreaElement>;
  invalid?: boolean;
  fullWidth?: boolean;
  error?: string;
  // New Phase 2 props
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  resizable?: boolean;
}
