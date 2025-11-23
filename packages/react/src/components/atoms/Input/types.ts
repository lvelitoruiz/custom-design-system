export type ValidationType = 'email' | 'url' | 'number' | 'phone' | 'custom';

export interface ValidationRule {
  type: ValidationType;
  message: string;
  pattern?: RegExp;
  validator?: (value: string) => boolean;
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: ((value: string) => void) | React.ChangeEventHandler<HTMLInputElement>;
  invalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  error?: string;
  // New Phase 2 props
  loading?: boolean;
  validation?: ValidationRule[];
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  onValidationChange?: (isValid: boolean, errors: string[]) => void;
  clearable?: boolean;
  debounceMs?: number;
}
