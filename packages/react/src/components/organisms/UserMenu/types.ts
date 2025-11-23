export interface User {
  name: string;
  email?: string;
  avatarSrc?: string;
}

export interface UserMenuItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface UserMenuProps {
  user: User;
  items: UserMenuItem[];
  onSelect: (value: string) => void;
  className?: string;
}
