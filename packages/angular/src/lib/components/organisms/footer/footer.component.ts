import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-footer',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <footer class="w-full bg-white border-t border-[var(--color-neutral-300)] px-6 py-4">
      <ng-content></ng-content>
    </footer>
  `
})
export class FooterComponent {}

