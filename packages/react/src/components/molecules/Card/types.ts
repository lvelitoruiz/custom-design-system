export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'md';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: CardPadding;
  shadow?: CardShadow;
  bordered?: boolean;
  className?: string;
}
