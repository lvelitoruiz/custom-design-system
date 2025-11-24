import { Component, Input, Output, EventEmitter, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

export type ValidationType = 'email' | 'url' | 'number' | 'phone' | 'custom';

export interface ValidationRule {
  type: ValidationType;
  message: string;
  pattern?: RegExp;
  validator?: (value: string) => boolean;
}

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div [class]="wrapperClasses">
      <!-- Left Icon -->
      <span 
        *ngIf="leftIcon" 
        class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none"
        aria-hidden="true"
      >
        <ng-content select="[slot=leftIcon]"></ng-content>
      </span>
      
      <!-- Input Element -->
      <input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled || loading"
        [value]="value"
        [class]="inputClasses"
        [attr.aria-invalid]="showError"
        [attr.aria-disabled]="disabled"
        [attr.aria-describedby]="hasValidationError ? inputId + '-error' : null"
        (input)="onInputChange($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
      />
      
      <!-- Right Icons Container -->
      <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
        <!-- Loading Spinner -->
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
        
        <!-- Clear Button -->
        <button
          *ngIf="clearable && value && !loading"
          type="button"
          (click)="clearValue()"
          class="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          aria-label="Clear input"
          tabindex="-1"
        >
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Right Icon -->
        <span 
          *ngIf="rightIcon"
          class="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none"
          aria-hidden="true"
        >
          <ng-content select="[slot=rightIcon]"></ng-content>
        </span>
      </div>
      
      <!-- Error Message -->
      <div
        *ngIf="hasValidationError"
        [id]="inputId + '-error'"
        class="absolute -bottom-5 left-0 text-xs text-red-500 dark:text-red-400"
        role="alert"
        aria-live="polite"
      >
        {{ errors[0] }}
      </div>
    </div>
  `
})
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() error: string = '';
  @Input() leftIcon: boolean = false;
  @Input() rightIcon: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() loading: boolean = false;
  @Input() clearable: boolean = false;
  @Input() validation: ValidationRule[] = [];
  @Input() validateOnChange: boolean = false;
  @Input() validateOnBlur: boolean = true;
  @Input() debounceMs: number = 0;
  @Input() class: string = '';

  @Output() validationChange = new EventEmitter<{isValid: boolean, errors: string[]}>();

  value: string = '';
  errors: string[] = [];
  isValidated: boolean = false;
  isFocused: boolean = false;
  inputId: string = `input-${Math.random().toString(36).substr(2, 9)}`;

  private debounceSubject = new Subject<string>();
  private onChange = (value: string) => {};
  private onTouched = () => {};

  private defaultValidators = {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    url: {
      pattern: /^https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?)?$/,
      message: 'Please enter a valid URL'
    },
    number: {
      pattern: /^\d+$/,
      message: 'Please enter a valid number'
    },
    phone: {
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      message: 'Please enter a valid phone number'
    }
  };

  ngOnInit() {
    if (this.debounceMs > 0) {
      this.debounceSubject.pipe(
        debounceTime(this.debounceMs),
        distinctUntilChanged()
      ).subscribe(value => {
        if (this.validateOnChange && this.isValidated) {
          this.validateInput(value);
        }
      });
    }
  }

  ngOnDestroy() {
    this.debounceSubject.complete();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);

    if (this.debounceMs > 0) {
      this.debounceSubject.next(this.value);
    } else if (this.validateOnChange && this.isValidated) {
      this.validateInput(this.value);
    }
  }

  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
    if (this.validateOnBlur) {
      this.validateInput(this.value);
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  clearValue(): void {
    this.value = '';
    this.onChange(this.value);
  }

  validateInput(inputValue: string): void {
    if (!inputValue) {
      this.errors = [];
      this.isValidated = true;
      this.emitValidationChange();
      return;
    }
    
    const validationErrors: string[] = [];

    this.validation.forEach((rule) => {
      let isValid = true;
      
      if (rule.validator) {
        isValid = rule.validator(inputValue);
      } else if (rule.pattern) {
        isValid = rule.pattern.test(inputValue);
      } else if (rule.type in this.defaultValidators) {
        const defaultRule = this.defaultValidators[rule.type as keyof typeof this.defaultValidators];
        isValid = defaultRule.pattern.test(inputValue);
      }

      if (!isValid) {
        const message = rule.message || this.defaultValidators[rule.type as keyof typeof this.defaultValidators]?.message || 'Invalid input';
        validationErrors.push(message);
      }
    });

    this.errors = validationErrors;
    this.isValidated = true;
    this.emitValidationChange();
  }

  private emitValidationChange(): void {
    const isValid = this.errors.length === 0;
    this.validationChange.emit({ isValid, errors: this.errors });
  }

  get hasValidationError(): boolean {
    return this.isValidated && this.errors.length > 0;
  }

  get showError(): boolean {
    return !!(this.error || this.invalid || this.hasValidationError);
  }

  get inputClasses(): string {
    let paddingLeft = 'pl-4';
    let paddingRight = 'pr-4';
    
    if (this.leftIcon) paddingLeft = 'pl-10';
    if (this.rightIcon || this.loading || this.clearable) paddingRight = 'pr-10';
    if ((this.rightIcon && this.loading) || (this.rightIcon && this.clearable) || (this.loading && this.clearable)) paddingRight = 'pr-16';
    if (this.rightIcon && this.loading && this.clearable) paddingRight = 'pr-20';

    const classes = [
      'flex h-11 w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 text-sm text-gray-900',
      'placeholder:text-gray-500',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
      'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
      'dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400',
      'dark:focus:ring-primary dark:focus:border-primary',
      'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
      'transition-colors',
      paddingLeft,
      paddingRight,
      this.class
    ];

    if (this.showError) {
      classes.push('border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500');
    }

    return classes.filter(Boolean).join(' ');
  }

  get wrapperClasses(): string {
    const classes = [
      'relative',
      this.fullWidth ? 'w-full' : 'inline-flex w-full'
    ];

    return classes.join(' ');
  }
}