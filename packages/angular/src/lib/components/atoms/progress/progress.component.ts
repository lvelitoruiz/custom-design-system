import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'ds-progress',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div [class]="containerClasses">
      <span *ngIf="labelText" class="text-sm font-medium text-foreground">
        {{ labelText }}
      </span>
      <div
        role="progressbar"
        [attr.aria-valuenow]="value"
        [attr.aria-valuemin]="0"
        [attr.aria-valuemax]="max"
        [class]="progressClasses"
      >
        <div
          [class]="barClasses"
          [style.width.%]="percentage"
        ></div>
      </div>
    </div>
  `
})
export class ProgressComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;
  @Input() size: ProgressSize = 'md';
  @Input() variant: ProgressVariant = 'primary';
  @Input() fullWidth: boolean = true;
  @Input() label: boolean | string = false;

  get percentage(): number {
    return Math.min(Math.max((this.value / this.max) * 100, 0), 100);
  }

  get labelText(): string | null {
    if (this.label === true) {
      return `${Math.round(this.percentage)}%`;
    } else if (typeof this.label === 'string') {
      return this.label;
    }
    return null;
  }

  get containerClasses(): string {
    const classes = ['flex', 'flex-col', 'gap-1'];
    
    if (!this.fullWidth) {
      classes.push('w-auto');
    }
    
    return classes.join(' ');
  }

  get progressClasses(): string {
    const classes = [
      'overflow-hidden',
      'rounded-full',
      'bg-muted'
    ];
    
    // Size classes
    switch (this.size) {
      case 'sm':
        classes.push('h-1.5');
        break;
      case 'md':
        classes.push('h-2');
        break;
      case 'lg':
        classes.push('h-3');
        break;
    }
    
    if (this.fullWidth) {
      classes.push('w-full');
    }
    
    return classes.join(' ');
  }

  get barClasses(): string {
    const classes = [
      'h-full',
      'rounded-full',
      'transition-all',
      'duration-300',
      'ease-in-out'
    ];
    
    // Variant classes
    switch (this.variant) {
      case 'primary':
        classes.push('bg-primary');
        break;
      case 'secondary':
        classes.push('bg-secondary');
        break;
      case 'success':
        classes.push('bg-green-500');
        break;
      case 'warning':
        classes.push('bg-yellow-500');
        break;
      case 'danger':
        classes.push('bg-red-500');
        break;
    }
    
    return classes.join(' ');
  }
}

