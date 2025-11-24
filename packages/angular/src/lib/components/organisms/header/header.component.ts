import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <header class="w-full bg-white border-b border-[var(--color-neutral-300)] px-6 py-4">
      <ng-content></ng-content>
    </header>
  `
})
export class HeaderComponent {}

