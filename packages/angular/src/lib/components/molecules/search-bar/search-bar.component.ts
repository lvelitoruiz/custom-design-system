import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ds-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      role="search"
      [class]="containerClasses"
    >
      <!-- Search Icon -->
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-muted-foreground"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>

      <!-- Input -->
      <input
        #searchInput
        type="text"
        [(ngModel)]="value"
        (ngModelChange)="onValueChange($event)"
        (focus)="isFocused = true"
        (blur)="isFocused = false"
        [placeholder]="placeholder"
        [attr.aria-label]="placeholder || 'Search'"
        class="flex-grow bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm"
      />

      <!-- Clear Button -->
      <button
        *ngIf="showClearButton"
        type="button"
        (click)="handleClear()"
        aria-label="Clear search"
        role="button"
        class="flex-shrink-0 p-1 rounded-full hover:bg-accent transition-colors duration-200 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <svg
          width="16"
          height="16"
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
  `
})
export class SearchBarComponent {
  @Input() value: string = '';
  @Input() placeholder: string = 'Search...';
  @Input() clearable: boolean = true;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();
  
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  
  isFocused: boolean = false;

  get showClearButton(): boolean {
    return this.clearable && this.value.length > 0;
  }

  get containerClasses(): string {
    const classes = [
      'w-full',
      'flex',
      'items-center',
      'gap-x-2',
      'px-3',
      'py-2.5',
      'rounded-lg',
      'bg-card',
      'border',
      'border-input',
      'transition-all',
      'duration-200'
    ];
    
    if (this.isFocused) {
      classes.push('border-ring', 'ring-2', 'ring-ring/20');
    }
    
    return classes.join(' ');
  }

  onValueChange(newValue: string): void {
    this.valueChange.emit(newValue);
  }

  handleClear(): void {
    this.clear.emit();
    this.value = '';
    this.valueChange.emit('');
    this.searchInput?.nativeElement.focus();
  }
}

