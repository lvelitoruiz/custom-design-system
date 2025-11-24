import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ds-avatar',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <div
      role="img"
      [attr.aria-label]="alt"
      [class]="avatarClasses"
    >
      <img
        *ngIf="showImage"
        [src]="src"
        [alt]="alt"
        (error)="onImageError()"
        class="w-full h-full object-cover"
      />
      <span
        *ngIf="showFallback"
        class="select-none uppercase"
        aria-label="Avatar placeholder"
      >
        {{ fallback }}
      </span>
    </div>
  `
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() alt: string = 'Avatar';
  @Input() size: AvatarSize = 'md';
  @Input() rounded: boolean = true;
  @Input() fallback?: string;

  imageError: boolean = false;

  get showImage(): boolean {
    return !!this.src && !this.imageError;
  }

  get showFallback(): boolean {
    return !this.showImage && !!this.fallback;
  }

  get avatarClasses(): string {
    const classes = [
      'inline-flex',
      'items-center',
      'justify-center',
      'overflow-hidden',
      'bg-secondary',
      'text-secondary-foreground',
      'font-semibold',
      'transition-colors',
      'border',
      'border-border/50'
    ];
    
    // Size classes
    switch (this.size) {
      case 'sm':
        classes.push('w-7', 'h-7', 'text-xs');
        break;
      case 'md':
        classes.push('w-9', 'h-9', 'text-sm');
        break;
      case 'lg':
        classes.push('w-12', 'h-12', 'text-base');
        break;
      case 'xl':
        classes.push('w-16', 'h-16', 'text-xl');
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

  onImageError(): void {
    this.imageError = true;
  }
}

