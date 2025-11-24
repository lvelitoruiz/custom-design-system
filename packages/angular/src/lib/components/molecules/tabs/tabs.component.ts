import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TabItem {
  label: string;
  value: string;
}

@Component({
  selector: 'ds-tabs',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      class="flex flex-row gap-1 border-b border-border overflow-x-auto"
      role="tablist"
      attr.aria-orientation="horizontal"
    >
      <button
        *ngFor="let tab of tabs; let index = index"
        role="tab"
        [attr.aria-selected]="tab.value === value"
        [attr.tabindex]="tab.value === value ? 0 : -1"
        (click)="handleSelect(tab.value)"
        (keydown)="handleKeyDown($event, index)"
        [class]="getTabClasses(tab.value === value)"
      >
        {{ tab.label }}
      </button>
    </div>
  `
})
export class TabsComponent {
  @Input() tabs: TabItem[] = [];
  @Input() value: string = '';
  @Input() fullWidth: boolean = false;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<string>();

  getTabClasses(isActive: boolean): string {
    const classes = [
      'px-4',
      'py-2',
      'rounded-t-md',
      'text-sm',
      'font-medium',
      'whitespace-nowrap',
      'transition-all',
      'duration-200',
      'border-b-2',
      'cursor-pointer',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2'
    ];
    
    if (isActive) {
      classes.push('text-primary', 'border-primary', 'opacity-100');
    } else {
      classes.push('text-muted-foreground', 'border-transparent', 'hover:text-foreground');
    }
    
    if (this.fullWidth) {
      classes.push('flex-1', 'text-center');
    }
    
    return classes.join(' ');
  }

  handleSelect(value: string): void {
    this.valueChange.emit(value);
    this.onChange.emit(value);
  }

  handleKeyDown(event: KeyboardEvent, index: number): void {
    let newIndex = index;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      newIndex = index + 1 >= this.tabs.length ? 0 : index + 1;
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      newIndex = index - 1 < 0 ? this.tabs.length - 1 : index - 1;
    }

    if (newIndex !== index) {
      this.handleSelect(this.tabs[newIndex].value);
    }
  }
}

