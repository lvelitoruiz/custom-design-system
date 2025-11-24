import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ds-alert',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      [class]="alertClasses"
      role="alert"
    >
      <!-- Icon slot -->
      <div *ngIf="hasIcon" class="flex-shrink-0 flex items-center justify-center mt-0.5">
        <ng-content select="[slot=icon]"></ng-content>
      </div>
      
      <!-- Content -->
      <div class="flex-1 min-w-0">
        <div *ngIf="title" class="font-medium text-sm mb-1">
          {{ title }}
        </div>
        <div *ngIf="description" class="text-sm">
          {{ description }}
        </div>
        <ng-content></ng-content>
      </div>
      
      <!-- Close button -->
      <button
        *ngIf="closable"
        (click)="onCloseClick()"
        (keydown)="handleKeyDown($event)"
        class="flex-shrink-0 p-1 rounded-full hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
        aria-label="Close alert"
        role="button"
      >
        <svg 
          class="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg"
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
    </div>
  `
})
export class AlertComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() variant: AlertVariant = 'info';
  @Input() closable: boolean = false;
  @Input() hasIcon: boolean = false;
  
  @Output() close = new EventEmitter<void>();

  get alertClasses(): string {
    const classes = [
      'w-full',
      'flex',
      'items-start',
      'gap-3',
      'rounded-lg',
      'border',
      'p-4',
      'transition-all',
      'duration-200'
    ];
    
    // Variant classes
    switch (this.variant) {
      case 'info':
        classes.push(
          'bg-blue-50',
          'border-blue-200',
          'text-blue-900',
          'dark:bg-blue-950/50',
          'dark:text-blue-100',
          'dark:border-blue-800'
        );
        break;
      case 'success':
        classes.push(
          'bg-green-50',
          'border-green-200',
          'text-green-900',
          'dark:bg-green-950/50',
          'dark:text-green-100',
          'dark:border-green-800'
        );
        break;
      case 'warning':
        classes.push(
          'bg-amber-50',
          'border-amber-200',
          'text-amber-900',
          'dark:bg-amber-950/50',
          'dark:text-amber-100',
          'dark:border-amber-800'
        );
        break;
      case 'danger':
        classes.push(
          'bg-red-50',
          'border-red-200',
          'text-red-900',
          'dark:bg-red-950/50',
          'dark:text-red-100',
          'dark:border-red-800'
        );
        break;
    }
    
    return classes.join(' ');
  }

  onCloseClick(): void {
    this.close.emit();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onCloseClick();
    }
  }
}

