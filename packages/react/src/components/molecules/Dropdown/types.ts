export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect: (value: string) => void;
  align?: "left" | "right";
  disabled?: boolean;
  className?: string;
}
