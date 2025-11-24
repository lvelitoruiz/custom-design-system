import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
}

@Component({
  selector: 'ds-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div 
      class="relative" 
      [class.w-full]="fullWidth" 
      [class.z-50]="isOpen"
      #selectContainer>
      <!-- Trigger -->
      <div
        #triggerRef
        role="combobox"
        [attr.aria-expanded]="isOpen"
        [attr.aria-haspopup]="'listbox'"
        [attr.aria-invalid]="invalid"
        [attr.aria-disabled]="disabled"
        [tabIndex]="disabled ? -1 : 0"
        [class]="triggerClasses"
        (click)="handleToggle()"
        (keydown)="handleKeyDown($event)"
      >
        <div class="flex-1 truncate">
          <span *ngIf="selectedOption" class="text-gray-900 dark:text-white">
            {{ selectedOption.label }}
          </span>
          <span *ngIf="!selectedOption" class="text-gray-500 dark:text-gray-400">
            {{ placeholder }}
          </span>
        </div>
        
        <div class="flex items-center gap-1 ml-2">
          <!-- Loading spinner -->
          <svg 
            *ngIf="loading" 
            class="w-4 h-4 text-gray-500 dark:text-gray-400 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          
          <!-- Clear button -->
          <button
            *ngIf="clearable && selectedOption && !loading"
            type="button"
            (click)="handleClear($event)"
            class="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            [attr.aria-label]="'Clear selection'"
            [tabIndex]="-1"
          >
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <!-- Chevron -->
          <svg 
            class="w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform"
            [class.rotate-180]="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>

      <!-- Dropdown Menu -->
      <div 
        *ngIf="isOpen"
        class="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden flex flex-col animate-in fade-in-0 zoom-in-95"
        [style.maxHeight.px]="maxMenuHeight"
      >
        <!-- Search input -->
        <div *ngIf="searchable" class="p-2 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div class="relative">
            <svg 
              class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              #searchInput
              type="text"
              placeholder="Search options..."
              [(ngModel)]="searchTerm"
              (ngModelChange)="onSearchChange()"
              class="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
            />
          </div>
        </div>
        
        <!-- Options list -->
        <div
          role="listbox"
          class="flex-1 overflow-y-auto p-1 min-h-0"
          #optionsList
        >
          <div 
            *ngIf="filteredOptions.length === 0"
            class="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 text-center"
          >
            No options found
          </div>
          
          <div
            *ngFor="let option of filteredOptions; let i = index"
            role="option"
            [attr.aria-selected]="option.value === value"
            [attr.aria-disabled]="option.disabled"
            [class]="getOptionClasses(option, i)"
            (click)="!option.disabled && handleOptionClick(option.value)"
            (mouseenter)="highlightedIndex = i"
          >
            <div class="flex-1 truncate">
              {{ option.label }}
            </div>
            
            <!-- Check icon for selected option -->
            <svg 
              *ngIf="option.value === value"
              class="w-4 h-4 text-primary ml-2 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('triggerRef') triggerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('selectContainer') selectContainer!: ElementRef<HTMLDivElement>;
  
  @Input() options: SelectOption[] = [];
  @Input() placeholder = 'Select an option...';
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() fullWidth = false;
  @Input() class = '';
  
  // Phase 2 props
  @Input() searchable = false;
  @Input() clearable = false;
  @Input() loading = false;
  @Input() maxMenuHeight = 200;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onFocusEvent = new EventEmitter<void>();
  @Output() onBlurEvent = new EventEmitter<void>();

  value = '';
  isOpen = false;
  isFocused = false;
  searchTerm = '';
  highlightedIndex = 0;
  filteredOptions: SelectOption[] = [];
  
  private onChangeCallback = (value: string) => {};
  private onTouchedCallback = () => {};

  ngAfterViewInit(): void {
    this.filterOptions();
  }

  get selectedOption(): SelectOption | undefined {
    return this.options.find(option => option.value === this.value);
  }

  get triggerClasses(): string {
    const classes = [
      'flex h-11 w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900',
      'cursor-pointer transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
      'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
      'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
      'dark:focus:ring-primary dark:focus:border-primary',
      'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
      this.invalid && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
      this.disabled && 'cursor-not-allowed',
      this.class
    ];

    return classes.filter(Boolean).join(' ');
  }

  getOptionClasses(option: SelectOption, index: number): string {
    const isHighlighted = index === this.highlightedIndex;
    const isSelected = option.value === this.value;
    
    const classes = [
      'relative flex items-center px-3 py-2 text-sm rounded-md cursor-pointer transition-colors',
      isHighlighted && 'bg-gray-100 dark:bg-gray-700',
      isSelected && 'bg-primary/10 text-primary dark:bg-primary/20',
      option.disabled && 'opacity-50 cursor-not-allowed',
      !option.disabled && !isHighlighted && !isSelected && 'hover:bg-gray-50 dark:hover:bg-gray-750'
    ];

    return classes.filter(Boolean).join(' ');
  }

  handleToggle(): void {
    if (this.disabled || this.loading) return;
    
    if (!this.isOpen) {
      this.isOpen = true;
      this.isFocused = true;
      this.onFocusEvent.emit();
      
      // Focus search input if searchable
      if (this.searchable) {
        setTimeout(() => {
          this.searchInput?.nativeElement?.focus();
        }, 0);
      }
    } else {
      this.closeDropdown();
    }
  }

  closeDropdown(): void {
    this.isOpen = false;
    this.isFocused = false;
    this.searchTerm = '';
    this.filterOptions();
    this.onBlurEvent.emit();
  }

  handleClear(event: Event): void {
    event.stopPropagation();
    this.value = '';
    this.onChangeCallback('');
    this.valueChange.emit('');
  }

  handleOptionClick(selectedValue: string): void {
    this.value = selectedValue;
    this.onChangeCallback(selectedValue);
    this.valueChange.emit(selectedValue);
    this.closeDropdown();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.loading) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!this.isOpen) {
          this.handleToggle();
        } else if (this.filteredOptions[this.highlightedIndex]) {
          const option = this.filteredOptions[this.highlightedIndex];
          if (!option.disabled) {
            this.handleOptionClick(option.value);
          }
        }
        break;
        
      case 'Escape':
        event.preventDefault();
        if (this.isOpen) {
          this.closeDropdown();
        }
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.handleToggle();
        } else {
          this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.filteredOptions.length - 1);
          this.scrollToHighlighted();
        }
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        if (this.isOpen) {
          this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
          this.scrollToHighlighted();
        }
        break;
    }
  }

  scrollToHighlighted(): void {
    // Scroll the highlighted option into view
    setTimeout(() => {
      const highlightedElement = this.selectContainer.nativeElement.querySelector(`[role="option"]:nth-child(${this.highlightedIndex + 1})`);
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' });
      }
    }, 0);
  }

  onSearchChange(): void {
    this.filterOptions();
    this.highlightedIndex = 0;
  }

  filterOptions(): void {
    if (!this.searchTerm) {
      this.filteredOptions = [...this.options];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredOptions = this.options.filter(option =>
        option.label.toLowerCase().includes(term)
      );
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isOpen && this.selectContainer && !this.selectContainer.nativeElement.contains(event.target as Node)) {
      this.closeDropdown();
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
