import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-empty-state',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      role="status"
      aria-label="Empty state"
      class="w-full flex flex-col items-center justify-center text-center py-12 px-4"
    >
      <!-- Icon -->
      <div *ngIf="hasIcon" class="mb-4 text-muted-foreground">
        <ng-content select="[slot=icon]"></ng-content>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-semibold text-foreground mb-2">
        {{ title }}
      </h3>

      <!-- Description -->
      <p *ngIf="description" class="text-sm text-muted-foreground max-w-md mb-4">
        {{ description }}
      </p>

      <!-- Action -->
      <div *ngIf="hasAction" class="mt-2">
        <ng-content select="[slot=action]"></ng-content>
      </div>
    </div>
  `
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() hasIcon: boolean = false;
  @Input() hasAction: boolean = false;
}

