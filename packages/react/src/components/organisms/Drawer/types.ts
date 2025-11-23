export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  position?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  footer?: React.ReactNode;
  closeButton?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}
