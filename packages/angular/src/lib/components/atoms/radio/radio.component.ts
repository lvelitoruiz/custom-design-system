import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-radio',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  styles: [`
    :host {
      display: inline-block;
    }
  `],
  template: `
    <label 
      [class]="labelClasses"
      [attr.for]="radioId"
    >
      <div class="relative">
        <input
          [id]="radioId"
          type="radio"
          [name]="name"
          [value]="value"
          [checked]="checked"
          [disabled]="disabled"
          (change)="onChange($event)"
          class="sr-only peer"
          role="radio"
          [attr.aria-checked]="checked"
          [attr.aria-disabled]="disabled"
          [attr.aria-invalid]="invalid"
        />
        <div
          [class]="radioClasses"
        >
          <!-- Radio dot when checked -->
          <svg 
            *ngIf="checked"
            class="h-2.5 w-2.5 fill-current text-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="12"/>
          </svg>
        </div>
      </div>
      <span 
        *ngIf="label"
        [class]="labelTextClasses"
      >
        {{ label }}
      </span>
    </label>
  `
})
export class RadioComponent implements ControlValueAccessor {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() label?: string;
  @Input() name?: string;
  @Input() id?: string;
  @Input() value?: string;
  @Input() inline: boolean = false;
  
  @Output() checkedChange = new EventEmitter<boolean>();

  onChangeCallback: (value: boolean) => void = () => {};
  onTouchedCallback: () => void = () => {};

  get radioId(): string {
    return this.id || `${this.name}-${this.value}`;
  }

  get labelClasses(): string {
    const classes = [
      this.inline ? 'inline-flex' : 'flex',
      'items-center',
      'gap-2',
      this.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    ];
    return classes.join(' ');
  }

  get radioClasses(): string {
    const classes = [
      'aspect-square',
      'h-4',
      'w-4',
      'rounded-full',
      'border',
      'border-primary',
      'text-primary',
      'ring-offset-background',
      'focus:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'flex',
      'items-center',
      'justify-center'
    ];
    
    if (this.invalid && !this.checked) {
      classes.push('border-destructive');
    }
    
    return classes.join(' ');
  }

  get labelTextClasses(): string {
    const classes = [
      'text-sm',
      'select-none'
    ];
    
    if (this.disabled) {
      classes.push('opacity-50');
    }
    
    return classes.join(' ');
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.checked;
    this.checked = newValue;
    this.checkedChange.emit(newValue);
    this.onChangeCallback(newValue);
  }

  // ControlValueAccessor implementation
  writeValue(value: boolean): void {
    this.checked = value || false;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

