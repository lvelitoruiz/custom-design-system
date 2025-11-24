import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DividerOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'ds-divider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="dividerClasses"
      role="separator"
      [attr.aria-orientation]="orientation"
    ></div>
  `
})
export class DividerComponent {
  @Input() orientation: DividerOrientation = 'horizontal';

  @HostBinding('style.display')
  get display(): string {
    return this.orientation === 'horizontal' ? 'block' : 'inline-block';
  }

  get dividerClasses(): string {
    const classes = ['bg-border'];
    
    if (this.orientation === 'horizontal') {
      classes.push('w-full', 'h-px');
    } else {
      classes.push('self-stretch', 'w-px', 'min-h-[24px]');
    }
    
    return classes.join(' ');
  }
}

