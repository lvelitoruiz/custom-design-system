import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ModalSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-modal',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: contents;
    }
  `],
  template: `
    <div
      *ngIf="open"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      (click)="handleOverlayClick()"
      role="dialog"
      attr.aria-modal="true"
      [attr.aria-labelledby]="title ? 'modal-title' : null"
    >
      <!-- Modal container -->
      <div
        (click)="$event.stopPropagation()"
        [class]="modalClasses"
      >
        <!-- Header -->
        <div
          *ngIf="title || closeButton"
          class="px-6 py-4 border-b border-border flex items-center justify-between flex-shrink-0"
        >
          <h2
            *ngIf="title"
            id="modal-title"
            class="text-lg font-semibold text-foreground"
          >
            {{ title }}
          </h2>
          <button
            *ngIf="closeButton"
            type="button"
            (click)="onClose.emit()"
            aria-label="Close modal"
            [class]="closeButtonClasses"
          >
            <svg
              width="20"
              height="20"
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

        <!-- Body -->
        <div class="px-6 py-4 text-foreground flex-1 overflow-y-auto">
          <ng-content></ng-content>
        </div>

        <!-- Footer -->
        <div
          *ngIf="hasFooter"
          class="px-6 py-4 border-t border-border flex justify-end gap-2 flex-shrink-0"
        >
          <ng-content select="[slot=footer]"></ng-content>
        </div>
      </div>
    </div>
  `
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Input() title?: string;
  @Input() size: ModalSize = 'md';
  @Input() closeButton: boolean = true;
  @Input() hasFooter: boolean = false;
  
  @Output() onClose = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open) {
      this.onClose.emit();
    }
  }

  get modalClasses(): string {
    const classes = [
      'w-full',
      'max-h-[90vh]',
      'bg-card',
      'rounded-lg',
      'shadow-xl',
      'border',
      'border-border',
      'overflow-y-auto',
      'flex',
      'flex-col'
    ];
    
    // Size classes
    switch (this.size) {
      case 'sm':
        classes.push('max-w-sm');
        break;
      case 'md':
        classes.push('max-w-lg');
        break;
      case 'lg':
        classes.push('max-w-2xl');
        break;
    }
    
    return classes.join(' ');
  }

  get closeButtonClasses(): string {
    const classes = [
      'p-2',
      'rounded-md',
      'hover:bg-accent',
      'transition-colors',
      'duration-200',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring'
    ];
    
    if (!this.title) {
      classes.push('ml-auto');
    }
    
    return classes.join(' ');
  }

  handleOverlayClick(): void {
    this.onClose.emit();
  }
}

