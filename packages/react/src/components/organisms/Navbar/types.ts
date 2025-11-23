export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  links?: NavLink[];
  rightContent?: React.ReactNode;
  sticky?: boolean;
  className?: string;
}
