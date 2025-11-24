import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-toolbar',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div class="flex items-center gap-2 p-2 bg-white border border-[var(--color-neutral-300)] rounded-lg">
      <ng-content></ng-content>
    </div>
  `
})
export class ToolbarComponent {}

