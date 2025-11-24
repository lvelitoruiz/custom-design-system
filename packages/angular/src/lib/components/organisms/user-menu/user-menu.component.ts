import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface User {
  name: string;
  email?: string;
  avatarSrc?: string;
}

export interface UserMenuItem {
  label: string;
  value: string;
  hasIcon?: boolean;
}

@Component({
  selector: 'ds-user-menu',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
      position: relative;
    }
  `],
  template: `
    <div class="relative">
      <!-- Trigger Button -->
      <button
        type="button"
        (click)="handleToggle()"
        (keydown)="handleKeyDown($event)"
        role="button"
        [attr.aria-expanded]="isOpen"
        attr.aria-haspopup="menu"
        class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <!-- Avatar -->
        <div class="inline-flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground font-semibold transition-colors border border-border/50 rounded-full w-9 h-9 text-sm">
          <img
            *ngIf="user.avatarSrc"
            [src]="user.avatarSrc"
            [alt]="user.name"
            class="w-full h-full object-cover"
          />
          <span *ngIf="!user.avatarSrc" class="select-none uppercase">
            {{ getFallback() }}
          </span>
        </div>

        <!-- User Info -->
        <div class="flex flex-col leading-tight text-left">
          <span class="text-sm font-medium text-foreground">
            {{ user.name }}
          </span>
          <span *ngIf="user.email" class="text-xs text-muted-foreground">
            {{ user.email }}
          </span>
        </div>

        <!-- Chevron -->
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          [class]="chevronClasses"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div
        *ngIf="isOpen"
        role="menu"
        class="absolute mt-2 right-0 bg-card border border-border shadow-lg rounded-md py-2 min-w-[180px] z-50 flex flex-col"
      >
        <button
          *ngFor="let item of items"
          type="button"
          (click)="handleItemClick(item.value)"
          role="menuitem"
          class="px-4 py-2.5 flex items-center gap-3 text-sm text-foreground hover:bg-muted transition-colors duration-200 cursor-pointer text-left w-full"
        >
          <div *ngIf="item.hasIcon" class="text-foreground">
            <ng-content [select]="'[slot=icon-' + item.value + ']'"></ng-content>
          </div>
          <span>{{ item.label }}</span>
        </button>
      </div>
    </div>
  `
})
export class UserMenuComponent {
  @Input() user!: User;
  @Input() items: UserMenuItem[] = [];
  
  @Output() select = new EventEmitter<string>();
  
  isOpen: boolean = false;

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('ds-user-menu')) {
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  get chevronClasses(): string {
    const classes = [
      'text-muted-foreground',
      'transition-transform',
      'duration-200'
    ];
    
    if (this.isOpen) {
      classes.push('rotate-180');
    }
    
    return classes.join(' ');
  }

  getFallback(): string {
    return this.user.name.substring(0, 2).toUpperCase();
  }

  handleToggle(): void {
    this.isOpen = !this.isOpen;
  }

  handleItemClick(value: string): void {
    this.select.emit(value);
    this.isOpen = false;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleToggle();
    }
  }
}

