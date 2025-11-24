import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ChipVariant = 'default' | 'primary' | 'success' | 'error';

@Component({
  selector: 'ds-chip',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <span [class]="chipClasses">
      {{ label }}
      <button
        *ngIf="onRemove.observed"
        (click)="onRemoveClick()"
        class="ml-1 hover:opacity-70 focus:outline-none"
        aria-label="Remove"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </span>
  `
})
export class ChipComponent {
  @Input() label: string = '';
  @Input() variant: ChipVariant = 'default';
  
  @Output() onRemove = new EventEmitter<void>();

  get chipClasses(): string {
    const classes = [
      'inline-flex',
      'items-center',
      'gap-1.5',
      'px-3',
      'py-1',
      'rounded-full',
      'text-sm',
      'font-medium'
    ];
    
    // Variant classes
    switch (this.variant) {
      case 'default':
        classes.push('bg-muted', 'text-foreground');
        break;
      case 'primary':
        classes.push('bg-primary', 'text-primary-foreground');
        break;
      case 'success':
        classes.push('bg-green-100', 'text-green-800', 'dark:bg-green-900', 'dark:text-green-200');
        break;
      case 'error':
        classes.push('bg-red-100', 'text-red-800', 'dark:bg-red-900', 'dark:text-red-200');
        break;
    }
    
    return classes.join(' ');
  }

  onRemoveClick(): void {
    this.onRemove.emit();
  }
}

