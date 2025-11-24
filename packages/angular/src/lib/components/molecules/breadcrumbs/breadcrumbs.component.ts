import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

@Component({
  selector: 'ds-breadcrumbs',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <nav 
      class="flex items-center gap-x-1.5 text-sm"
      role="navigation"
      aria-label="Breadcrumb"
    >
      <ng-container *ngFor="let item of items; let index = index; let last = last">
        <span *ngIf="last" class="font-medium text-foreground">
          {{ item.label }}
        </span>
        
        <a
          *ngIf="!last && item.href"
          [href]="item.href"
          class="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          {{ item.label }}
        </a>
        
        <span
          *ngIf="!last && !item.href"
          class="inline-flex items-center text-muted-foreground"
        >
          {{ item.label }}
        </span>
        
        <span *ngIf="!last" class="flex-shrink-0 text-muted-foreground">
          <ng-content select="[slot=separator]"></ng-content>
          <svg
            *ngIf="!hasSeparator"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </span>
      </ng-container>
    </nav>
  `
})
export class BreadcrumbsComponent {
  @Input() items: BreadcrumbItem[] = [];
  @Input() hasSeparator: boolean = false;
}

