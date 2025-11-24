import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-spinner',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <div
      [class]="spinnerClasses"
      role="status"
      aria-label="Loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  `
})
export class SpinnerComponent {
  @Input() size: SpinnerSize = 'md';

  get spinnerClasses(): string {
    const classes = [
      'inline-block',
      'animate-spin',
      'rounded-full',
      'border-solid',
      'border-primary',
      'border-t-transparent'
    ];
    
    switch (this.size) {
      case 'sm':
        classes.push('w-4', 'h-4', 'border-2');
        break;
      case 'md':
        classes.push('w-6', 'h-6', 'border-2');
        break;
      case 'lg':
        classes.push('w-8', 'h-8', 'border-3');
        break;
    }
    
    return classes.join(' ');
  }
}

