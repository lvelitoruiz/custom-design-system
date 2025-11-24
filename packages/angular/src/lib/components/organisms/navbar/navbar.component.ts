import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'ds-navbar',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <nav
      role="navigation"
      aria-label="Main navigation"
      [class]="navbarClasses"
    >
      <!-- Main navbar container -->
      <div class="w-full h-16 px-4 md:px-6 flex items-center justify-between bg-card border-b border-border transition-colors duration-200">
        <!-- Logo -->
        <div *ngIf="hasLogo" class="flex items-center gap-2 text-lg font-semibold text-foreground">
          <ng-content select="[slot=logo]"></ng-content>
        </div>

        <!-- Desktop Links -->
        <div *ngIf="links.length > 0" class="hidden md:flex gap-x-6 flex-1 justify-center">
          <a
            *ngFor="let link of links"
            [href]="link.href"
            class="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Right content -->
        <div class="flex items-center gap-4">
          <div *ngIf="hasRightContent" class="hidden md:flex items-center">
            <ng-content select="[slot=rightContent]"></ng-content>
          </div>

          <!-- Mobile menu button -->
          <button
            *ngIf="links.length > 0"
            type="button"
            (click)="mobileMenuOpen = !mobileMenuOpen"
            [attr.aria-expanded]="mobileMenuOpen"
            aria-label="Toggle menu"
            class="flex md:hidden p-2 rounded-md hover:bg-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg
              *ngIf="!mobileMenuOpen"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            <svg
              *ngIf="mobileMenuOpen"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        *ngIf="mobileMenuOpen && links.length > 0"
        class="md:hidden flex flex-col gap-2 p-4 bg-card border-b border-border"
      >
        <a
          *ngFor="let link of links"
          [href]="link.href"
          (click)="mobileMenuOpen = false"
          class="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
        >
          {{ link.label }}
        </a>
        
        <div *ngIf="hasRightContent" class="mt-2 pt-2 border-t border-border">
          <ng-content select="[slot=rightContent]"></ng-content>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  @Input() links: NavLink[] = [];
  @Input() sticky: boolean = true;
  @Input() hasLogo: boolean = false;
  @Input() hasRightContent: boolean = false;
  
  mobileMenuOpen: boolean = false;

  get navbarClasses(): string {
    const classes = ['w-full'];
    
    if (this.sticky) {
      classes.push('sticky', 'top-0', 'z-50');
    }
    
    return classes.join(' ');
  }
}

