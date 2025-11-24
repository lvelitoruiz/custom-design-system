import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-input-group',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      role="group"
      class="flex items-stretch w-full rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-0 transition-all duration-200"
    >
      <div
        *ngIf="hasLeftAddon"
        class="flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium border-r-0 transition-colors duration-200"
      >
        <ng-content select="[slot=leftAddon]"></ng-content>
      </div>
      
      <div class="flex-1 [&_input]:border-0 [&_input]:focus:ring-0 [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0 [&_input]:rounded-none [&_input]:shadow-none [&>*]:flex-1">
        <ng-content></ng-content>
      </div>
      
      <div
        *ngIf="hasRightAddon"
        class="flex items-center justify-center bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium border-l-0 transition-colors duration-200"
      >
        <ng-content select="[slot=rightAddon]"></ng-content>
      </div>
    </div>
  `
})
export class InputGroupComponent {
  @Input() hasLeftAddon: boolean = false;
  @Input() hasRightAddon: boolean = false;
}

