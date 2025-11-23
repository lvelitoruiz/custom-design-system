export type TagVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}
