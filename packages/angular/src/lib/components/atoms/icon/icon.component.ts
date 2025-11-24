import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-icon',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <span
      [class]="iconClasses"
      [style.width.px]="size"
      [style.height.px]="size"
      [style.color]="color"
      role="img"
    >
      <ng-content></ng-content>
    </span>
  `
})
export class IconComponent {
  @Input() size: number = 20;
  @Input() color: string = 'currentColor';

  get iconClasses(): string {
    return [
      'inline-flex',
      'items-center',
      'justify-center',
      'shrink-0',
      'transition-colors',
      'duration-200'
    ].join(' ');
  }
}

