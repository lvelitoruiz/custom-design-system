import { Component, Input, Output, EventEmitter, forwardRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
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
      <div class="relative">
        <input
          type="checkbox"
          [id]="checkboxId"
          [name]="name"
          [value]="value"
          [checked]="checked"
          [disabled]="disabled"
          (change)="onChange($event)"
          (blur)="onBlur()"
          class="sr-only peer"
          role="checkbox"
          [attr.aria-checked]="indeterminate ? 'mixed' : checked"
          [attr.aria-disabled]="disabled"
          [attr.aria-invalid]="invalid"
        />
        <div [class]="checkboxClasses">
          <!-- Minus icon for indeterminate state -->
          <svg 
            *ngIf="indeterminate" 
            class="h-3.5 w-3.5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <!-- Check icon for checked state -->
          <svg 
            *ngIf="checked && !indeterminate" 
            class="h-3.5 w-3.5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <label 
        *ngIf="label" 
        [for]="checkboxId" 
        [class]="labelClasses"
      >
        {{ label }}
      </label>
    </div>
  `
})
export class CheckboxComponent implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() indeterminate = false;
  @Input() inline = false;
  @Input() name = '';
  @Input() value?: string;
  @Input() id?: string;
  @Input() class = '';

  @Output() checkedChange = new EventEmitter<boolean>();

  checkboxId = '';
  
  private onChangeCallback = (value: boolean) => {};
  private onTouchedCallback = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.checkboxId = this.id || this.name || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  }

  get wrapperClasses(): string {
    const classes = [
      'flex items-center gap-2',
      this.inline ? 'inline-flex' : 'flex',
      !this.inline && 'w-full',
      this.disabled && 'cursor-not-allowed',
      !this.disabled && 'cursor-pointer'
    ];

    return classes.filter(Boolean).join(' ');
  }

  get checkboxClasses(): string {
    const isChecked = this.checked && !this.indeterminate;
    const isIndeterminate = this.indeterminate;
    
    const classes = [
      'peer h-4 w-4 shrink-0 rounded border ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'flex items-center justify-center cursor-pointer',
      // Estados NO checked
      !(isChecked || isIndeterminate) && 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
      // Estados checked o indeterminate
      (isChecked || isIndeterminate) && 'bg-primary border-primary text-white dark:bg-primary dark:border-primary',
      // Error state
      this.invalid && !this.checked && 'border-red-500 dark:border-red-500',
      this.class
    ];

    return classes.filter(Boolean).join(' ');
  }

  get labelClasses(): string {
    const classes = [
      'text-sm select-none cursor-pointer',
      'text-gray-900 dark:text-white',
      this.disabled && 'opacity-50 cursor-not-allowed'
    ];

    return classes.filter(Boolean).join(' ');
  }

  onChange(event: Event): void {
    if (this.disabled) return;
    
    const target = event.target as HTMLInputElement;
    const newValue = target.checked;
    
    // Actualizamos el estado local inmediatamente para la UI
    this.checked = newValue;
    
    // Forzamos la detección de cambios para actualizar las clases
    this.cdr.markForCheck();
    
    // Y notificamos a Angular Forms del cambio
    this.onChangeCallback(newValue);
    this.checkedChange.emit(newValue);
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  // ControlValueAccessor implementation
  writeValue(value: boolean): void {
    this.checked = value || false;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
