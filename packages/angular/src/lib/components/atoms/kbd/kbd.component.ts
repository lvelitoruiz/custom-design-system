import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-kbd',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <kbd class="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-foreground bg-muted border border-border rounded shadow-sm">
      <ng-content></ng-content>
    </kbd>
  `
})
export class KBDComponent {}

