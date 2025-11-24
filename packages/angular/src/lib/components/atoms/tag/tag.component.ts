import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TagVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TagSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-tag',
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
      [class]="tagClasses"
    >
      <ng-content></ng-content>
      <button
        *ngIf="removable"
        type="button"
        (click)="onRemoveClick()"
        role="button"
        aria-label="Remove tag"
        class="ml-0.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
      >
        <svg 
          [attr.width]="iconSize"
          [attr.height]="iconSize"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
        </svg>
      </button>
    </span>
  `
})
export class TagComponent {
  @Input() variant: TagVariant = 'primary';
  @Input() size: TagSize = 'md';
  @Input() rounded: boolean = true;
  @Input() removable: boolean = false;
  
  @Output() remove = new EventEmitter<void>();

  get iconSize(): number {
    switch (this.size) {
      case 'sm': return 12;
      case 'lg': return 16;
      default: return 14;
    }
  }

  get tagClasses(): string {
    const classes = [
      'inline-flex',
      'items-center',
      'gap-1.5',
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
    
    // Extra padding if removable
    if (this.removable) {
      classes.push('pr-1.5');
    }
    
    return classes.join(' ');
  }

  onRemoveClick(): void {
    this.remove.emit();
  }
}

