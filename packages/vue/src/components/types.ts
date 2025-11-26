export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Input types
export type ValidationType = 'email' | 'url' | 'number' | 'phone' | 'custom';

export interface ValidationRule {
  type: ValidationType;
  message: string;
  pattern?: RegExp;
  validator?: (value: string) => boolean;
}

export interface InputProps {
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  error?: string;
  loading?: boolean;
  validation?: ValidationRule[];
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  clearable?: boolean;
  debounceMs?: number;
  id?: string;
}

// Badge types
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  class?: string;
}

// Spinner types
export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  size?: SpinnerSize;
  class?: string;
}

// Divider types
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  class?: string;
}

// Icon types
export interface IconProps {
  size?: number;
  color?: string;
  class?: string;
}

// KBD types
export interface KBDProps {
  class?: string;
}

// Avatar types
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  rounded?: boolean;
  fallback?: string;
  class?: string;
}

// Skeleton types
export type SkeletonVariant = 'rectangular' | 'circular' | 'text';

export interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: SkeletonVariant;
  class?: string;
}

// Chip types
export type ChipVariant = 'default' | 'primary' | 'success' | 'error';

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  variant?: ChipVariant;
  class?: string;
}

// Progress types
export type ProgressVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps {
  value: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  fullWidth?: boolean;
  label?: boolean | string;
  class?: string;
}

// Tag types
export type TagVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  class?: string;
}

// Checkbox types
export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  name?: string;
  id?: string;
  inline?: boolean;
  indeterminate?: boolean;
  value?: string;
  class?: string;
}

// Radio types
export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  name?: string;
  id?: string;
  value?: string;
  inline?: boolean;
  class?: string;
}

// Switch types
export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
  inline?: boolean;
  class?: string;
}

// Slider types
export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  name?: string;
  id?: string;
  class?: string;
}

// Textarea types
export interface TextareaProps {
  modelValue?: string;
  error?: string;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  rows?: number;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  resizable?: boolean;
  class?: string;
}

// Select types
export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue?: string;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  maxMenuHeight?: number;
  class?: string;
}

// ========================================
// MOLECULES
// ========================================

// Card component props
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'md';

export interface CardProps {
  title?: string;
  description?: string;
  padding?: CardPadding;
  shadow?: CardShadow;
  bordered?: boolean;
  class?: string;
}

// Alert component props
export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps {
  title?: string;
  description?: string;
  variant?: AlertVariant;
  closable?: boolean;
  onClose?: () => void;
  class?: string;
}

// FormField component props
export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  id?: string;
  class?: string;
}

// Dropdown component props
export interface DropdownItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  items: DropdownItem[];
  align?: 'left' | 'right';
  disabled?: boolean;
  class?: string;
}

// SearchBar component props
export interface SearchBarProps {
  value: string;
  placeholder?: string;
  clearable?: boolean;
  class?: string;
}

// Breadcrumbs component props
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  class?: string;
}

// InputGroup component props
export interface InputGroupProps {
  class?: string;
}

// ListItem component props
export interface ListItemProps {
  title: string;
  description?: string;
  clickable?: boolean;
  active?: boolean;
  class?: string;
}

// Tabs component props
export interface TabItem {
  label: string;
  value: string;
}

export interface TabsProps {
  tabs: TabItem[];
  value: string;
  fullWidth?: boolean;
  class?: string;
}

// Accordion component props
export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
  class?: string;
}

// ========================================
// ORGANISMS
// ========================================

// Modal component props
export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  open: boolean;
  title?: string;
  size?: ModalSize;
  closeButton?: boolean;
  class?: string;
}

// Drawer component props
export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg';

export interface DrawerProps {
  open: boolean;
  title?: string;
  position?: DrawerPosition;
  size?: DrawerSize;
  closeButton?: boolean;
  class?: string;
}

// Navbar component props
export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
  sticky?: boolean;
  class?: string;
}

// Sidebar component props
export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  active?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  class?: string;
}

// Table component props
export interface TableColumn {
  key: string;
  label: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  emptyMessage?: string;
  class?: string;
}

// Pagination component props
export interface PaginationProps {
  page: number;
  totalPages: number;
  class?: string;
}

// CardList component props
export type CardListCols = 1 | 2 | 3 | 4 | 5 | 6;
export type CardListGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

export interface CardListProps {
  items: any[];
  cols?: CardListCols;
  gap?: CardListGap;
  class?: string;
}

// KpiCard component props
export type KpiTrend = 'up' | 'down' | 'neutral';

export interface KpiCardProps {
  label: string;
  value: string | number;
  trend?: KpiTrend;
  trendValue?: string;
  class?: string;
}

// EmptyState component props
export interface EmptyStateProps {
  title: string;
  description?: string;
  class?: string;
}

// UserMenu component props
export interface UserMenuItem {
  label: string;
  value: string;
  icon?: string;
}

export interface User {
  name: string;
  email?: string;
  avatarSrc?: string;
}

export interface UserMenuProps {
  user: User;
  items: UserMenuItem[];
  class?: string;
}
