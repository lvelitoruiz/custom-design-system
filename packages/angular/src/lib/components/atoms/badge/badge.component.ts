import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-badge',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <span
      role="status"
      [class]="badgeClasses"
    >
      <ng-content></ng-content>
    </span>
  `
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() rounded: boolean = false;

  get badgeClasses(): string {
    const classes = [
      'inline-flex',
      'items-center',
      'font-medium',
      'transition-colors'
    ];
    
    // Variant classes
    switch (this.variant) {
      case 'primary':
        classes.push('bg-primary/10', 'text-primary', 'border', 'border-primary/20');
        break;
      case 'secondary':
        classes.push('bg-secondary/50', 'text-secondary-foreground', 'border', 'border-border');
        break;
      case 'success':
        classes.push('bg-green-500/10', 'text-green-700', 'dark:text-green-400', 'border', 'border-green-500/20');
        break;
      case 'warning':
        classes.push('bg-amber-500/10', 'text-amber-700', 'dark:text-amber-400', 'border', 'border-amber-500/20');
        break;
      case 'danger':
        classes.push('bg-destructive/10', 'text-destructive', 'border', 'border-destructive/20');
        break;
    }
    
    // Size classes
    switch (this.size) {
      case 'sm':
        classes.push('text-xs', 'py-0.5', 'px-2');
        break;
      case 'md':
        classes.push('text-sm', 'py-1', 'px-3');
        break;
      case 'lg':
        classes.push('text-base', 'py-1.5', 'px-4');
        break;
    }
    
    // Rounded
    if (this.rounded) {
      classes.push('rounded-full');
    } else {
      classes.push('rounded-md');
    }
    
    return classes.join(' ');
  }
}

