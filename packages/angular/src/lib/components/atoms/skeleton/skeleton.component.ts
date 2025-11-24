import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonVariant = 'rectangular' | 'circular' | 'text';

@Component({
  selector: 'ds-skeleton',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      [class]="skeletonClasses"
      [style.width]="width"
      [style.height]="height"
    ></div>
  `
})
export class SkeletonComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() variant: SkeletonVariant = 'rectangular';

  get skeletonClasses(): string {
    const classes = [
      'animate-pulse',
      'bg-muted'
    ];
    
    // Variant classes
    switch (this.variant) {
      case 'rectangular':
        classes.push('rounded-md');
        break;
      case 'circular':
        classes.push('rounded-full');
        break;
      case 'text':
        classes.push('rounded');
        break;
    }
    
    return classes.join(' ');
  }
}

