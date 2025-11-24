import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DropdownItem {
  label: string;
  value: string;
}

@Component({
  selector: 'ds-dropdown',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: inline-block;
      position: relative;
    }
  `],
  template: `
    <div class="relative inline-block">
      <div 
        (click)="handleToggle()"
        [attr.aria-haspopup]="'menu'"
        [attr.aria-expanded]="isOpen"
      >
        <ng-content select="[slot=trigger]"></ng-content>
      </div>
      
      <div 
        *ngIf="isOpen"
        [class]="dropdownClasses"
        role="menu"
      >
        <div
          *ngFor="let item of items"
          class="px-3 py-2 text-sm cursor-pointer text-foreground hover:bg-accent transition-colors duration-150"
          role="menuitem"
          (click)="handleSelect(item.value)"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  `
})
export class DropdownComponent {
  @Input() items: DropdownItem[] = [];
  @Input() align: 'left' | 'right' = 'left';
  @Input() disabled: boolean = false;
  
  @Output() select = new EventEmitter<string>();
  
  isOpen: boolean = false;

  get dropdownClasses(): string {
    const classes = [
      'absolute',
      'mt-2',
      'z-50',
      'bg-background',
      'border',
      'border-border',
      'rounded-lg',
      'shadow-md',
      'py-1',
      'min-w-[160px]',
      'transition-colors',
      'duration-200'
    ];
    
    if (this.align === 'left') {
      classes.push('left-0');
    } else {
      classes.push('right-0');
    }
    
    return classes.join(' ');
  }

  handleToggle(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  handleSelect(value: string): void {
    this.select.emit(value);
    this.isOpen = false;
  }
}

