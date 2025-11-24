import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-card-list',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      role="list"
      [class]="gridClasses"
    >
      <ng-content></ng-content>
    </div>
  `
})
export class CardListComponent {
  @Input() cols: number = 3;
  @Input() gap: number = 4;

  get gridClasses(): string {
    const classes = [
      'grid',
      'grid-cols-1',
      'md:grid-cols-2'
    ];
    
    // Columns class
    switch (this.cols) {
      case 1:
        classes.push('lg:grid-cols-1');
        break;
      case 2:
        classes.push('lg:grid-cols-2');
        break;
      case 3:
        classes.push('lg:grid-cols-3');
        break;
      case 4:
        classes.push('lg:grid-cols-4');
        break;
      case 5:
        classes.push('lg:grid-cols-5');
        break;
      case 6:
        classes.push('lg:grid-cols-6');
        break;
      default:
        classes.push('lg:grid-cols-3');
        break;
    }
    
    // Gap class
    switch (this.gap) {
      case 0:
        classes.push('gap-0');
        break;
      case 1:
        classes.push('gap-1');
        break;
      case 2:
        classes.push('gap-2');
        break;
      case 3:
        classes.push('gap-3');
        break;
      case 4:
        classes.push('gap-4');
        break;
      case 5:
        classes.push('gap-5');
        break;
      case 6:
        classes.push('gap-6');
        break;
      case 8:
        classes.push('gap-8');
        break;
      case 10:
        classes.push('gap-10');
        break;
      case 12:
        classes.push('gap-12');
        break;
      default:
        classes.push('gap-4');
        break;
    }
    
    return classes.join(' ');
  }
}

