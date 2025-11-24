import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DividerOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'ds-divider',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      [class]="dividerClasses"
      role="separator"
    ></div>
  `
})
export class DividerComponent {
  @Input() orientation: DividerOrientation = 'horizontal';

  get dividerClasses(): string {
    const classes = ['bg-border'];
    
    if (this.orientation === 'horizontal') {
      classes.push('w-full', 'h-px');
    } else {
      classes.push('h-full', 'w-px');
    }
    
    return classes.join(' ');
  }
}

