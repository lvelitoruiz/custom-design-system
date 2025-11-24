import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidebarItem {
  id: string;
  label: string;
  href?: string;
  active?: boolean;
  hasIcon?: boolean;
}

@Component({
  selector: 'ds-sidebar',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `],
  template: `
    <aside
      role="navigation"
      aria-label="Sidebar"
      [class]="sidebarClasses"
    >
      <!-- Header -->
      <div
        *ngIf="hasHeader"
        [class]="headerClasses"
      >
        <ng-content select="[slot=header]"></ng-content>
      </div>

      <!-- Items list -->
      <nav class="flex flex-col gap-1 mt-2 flex-1 overflow-y-auto px-2">
        <ng-container *ngFor="let item of items">
          <a
            *ngIf="item.href; else buttonItem"
            [href]="item.href"
            role="link"
            [class]="getItemClasses(item)"
          >
            <!-- Icon -->
            <span *ngIf="item.hasIcon" class="flex-shrink-0 flex items-center justify-center">
              <ng-content [select]="'[slot=icon-' + item.id + ']'"></ng-content>
            </span>

            <!-- Label -->
            <span *ngIf="!collapsed" class="text-sm font-medium truncate">
              {{ item.label }}
            </span>
          </a>

          <ng-template #buttonItem>
            <button
              type="button"
              role="button"
              [class]="getItemClasses(item)"
            >
              <!-- Icon -->
              <span *ngIf="item.hasIcon" class="flex-shrink-0 flex items-center justify-center">
                <ng-content [select]="'[slot=icon-' + item.id + ']'"></ng-content>
              </span>

              <!-- Label -->
              <span *ngIf="!collapsed" class="text-sm font-medium truncate">
                {{ item.label }}
              </span>
            </button>
          </ng-template>
        </ng-container>
      </nav>

      <!-- Footer -->
      <div
        *ngIf="hasFooter"
        [class]="footerClasses"
      >
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </aside>
  `
})
export class SidebarComponent {
  @Input() items: SidebarItem[] = [];
  @Input() collapsed: boolean = false;
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  get sidebarClasses(): string {
    const classes = [
      'flex',
      'flex-col',
      'bg-card',
      'border-r',
      'border-border',
      'h-full',
      'transition-all',
      'duration-300',
      'overflow-hidden'
    ];
    
    if (this.collapsed) {
      classes.push('w-20');
    } else {
      classes.push('w-60');
    }
    
    return classes.join(' ');
  }

  get headerClasses(): string {
    const classes = [
      'px-4',
      'py-3',
      'border-b',
      'border-border',
      'flex',
      'items-center'
    ];
    
    if (this.collapsed) {
      classes.push('justify-center');
    } else {
      classes.push('justify-start');
    }
    
    return classes.join(' ');
  }

  get footerClasses(): string {
    const classes = [
      'px-4',
      'py-3',
      'border-t',
      'border-border',
      'flex',
      'items-center'
    ];
    
    if (this.collapsed) {
      classes.push('justify-center');
    } else {
      classes.push('justify-start');
    }
    
    return classes.join(' ');
  }

  getItemClasses(item: SidebarItem): string {
    const classes = [
      'flex',
      'items-center',
      'gap-3',
      'px-4',
      'py-2.5',
      'rounded-md',
      'transition-colors',
      'duration-200',
      'cursor-pointer',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'text-left'
    ];
    
    if (this.collapsed) {
      classes.push('justify-center');
    }
    
    if (item.active) {
      classes.push('bg-primary', 'text-primary-foreground', 'hover:bg-primary/90');
    } else {
      classes.push('text-foreground', 'hover:bg-muted');
    }
    
    return classes.join(' ');
  }
}

