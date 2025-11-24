import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-list-group',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <ul class="w-full bg-white border border-[var(--color-neutral-300)] rounded-lg overflow-hidden">
      <ng-content></ng-content>
    </ul>
  `
})
export class ListGroupComponent {}

