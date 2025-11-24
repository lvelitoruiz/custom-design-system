import { Component, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DrawerPosition = 'right' | 'left' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-drawer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: contents;
    }
  `],
  template: `
    <!-- Overlay -->
    <div
      [class]="overlayClasses"
      (click)="onClose.emit()"
      aria-hidden="true"
    ></div>

    <!-- Drawer panel -->
    <div
      *ngIf="shouldRender"
      role="dialog"
      attr.aria-modal="true"
      [attr.aria-labelledby]="title ? 'drawer-title' : null"
      [class]="drawerClasses"
    >
      <!-- Header -->
      <div
        *ngIf="title || closeButton"
        class="px-6 py-4 border-b border-border flex items-center justify-between flex-shrink-0"
      >
        <h2
          *ngIf="title"
          id="drawer-title"
          class="text-lg font-semibold text-foreground"
        >
          {{ title }}
        </h2>
        <button
          *ngIf="closeButton"
          type="button"
          (click)="onClose.emit()"
          aria-label="Close drawer"
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
  `
})
export class DrawerComponent implements OnChanges {
  @Input() open: boolean = false;
  @Input() title?: string;
  @Input() position: DrawerPosition = 'right';
  @Input() size: DrawerSize = 'md';
  @Input() closeButton: boolean = true;
  @Input() hasFooter: boolean = false;
  
  @Output() onClose = new EventEmitter<void>();

  isAnimated: boolean = false;
  shouldRender: boolean = true;

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open) {
      this.onClose.emit();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // If position changes, force remount by toggling shouldRender
    if (changes['position'] && !changes['position'].firstChange) {
      this.shouldRender = false;
      this.isAnimated = false;
      
      // Remount on next tick with new position
      setTimeout(() => {
        this.shouldRender = true;
        if (this.open) {
          setTimeout(() => {
            this.isAnimated = true;
          }, 10);
        }
      }, 0);
      return;
    }
    
    if (changes['open']) {
      if (this.open) {
        // Reset animation first, then animate in
        this.isAnimated = false;
        // Small delay to ensure the drawer mounts in closed position first
        setTimeout(() => {
          this.isAnimated = true;
        }, 10);
      } else {
        this.isAnimated = false;
      }
    }
  }

  get overlayClasses(): string {
    const classes = [
      'fixed',
      'inset-0',
      'bg-black/40',
      'backdrop-blur-sm',
      'z-40',
      'transition-opacity',
      'duration-300'
    ];
    
    if (this.open) {
      classes.push('opacity-100');
    } else {
      classes.push('opacity-0', 'pointer-events-none');
    }
    
    return classes.join(' ');
  }

  get drawerClasses(): string {
    const classes = [
      'fixed',
      'z-50',
      'bg-card',
      'shadow-xl',
      'border',
      'border-border',
      'overflow-y-auto',
      'flex',
      'flex-col'
    ];
    
    // Position-specific classes
    switch (this.position) {
      case 'right':
        classes.push('right-0', 'top-0', 'h-screen', 'transition-transform', 'duration-300');
        // Size classes (only for left/right)
        switch (this.size) {
          case 'sm':
            classes.push('w-64');
            break;
          case 'md':
            classes.push('w-80');
            break;
          case 'lg':
            classes.push('w-[28rem]');
            break;
        }
        break;
      case 'left':
        classes.push('left-0', 'top-0', 'h-screen', 'transition-transform', 'duration-300');
        // Size classes (only for left/right)
        switch (this.size) {
          case 'sm':
            classes.push('w-64');
            break;
          case 'md':
            classes.push('w-80');
            break;
          case 'lg':
            classes.push('w-[28rem]');
            break;
        }
        break;
      case 'top':
        classes.push('top-0', 'left-0', 'w-full', 'max-h-[50vh]', 'transition-transform', 'duration-300');
        break;
      case 'bottom':
        classes.push('bottom-0', 'left-0', 'w-full', 'max-h-[50vh]', 'transition-transform', 'duration-300');
        break;
    }
    
    // Animation classes
    if (this.isAnimated) {
      classes.push('translate-x-0', 'translate-y-0');
    } else {
      switch (this.position) {
        case 'right':
          classes.push('translate-x-full');
          break;
        case 'left':
          classes.push('-translate-x-full');
          break;
        case 'top':
          classes.push('-translate-y-full');
          break;
        case 'bottom':
          classes.push('translate-y-full');
          break;
      }
    }
    
    if (!this.open) {
      classes.push('pointer-events-none');
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
}

