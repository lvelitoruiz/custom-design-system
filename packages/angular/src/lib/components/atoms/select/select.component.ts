import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  imports: [CommonModule],
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
    <select
      [value]="value"
      [disabled]="disabled"
[class]="selectClasses"
      [attr.aria-invalid]="invalid"
      [attr.aria-disabled]="disabled"
      [attr.aria-describedby]="error ? 'error-message' : null"
      role="combobox"
      (change)="onChange($event)"
      (blur)="onBlur($event)"
      (focus)="onFocus($event)"
    >
      <option 
        *ngIf="placeholder" 
        value="" 
        disabled 
        [selected]="!value"
      >
        {{placeholder}}
      </option>
      
      <option 
        *ngFor="let option of options" 
        [value]="option.value"
        [disabled]="option.disabled"
      >
        {{option.label}}
      </option>
    </select>
  `
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: SelectOption[] = [];
  @Input() placeholder = 'Select an option...';
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() error = '';
  @Input() fullWidth = false;
  @Input() class = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() onBlurEvent = new EventEmitter<FocusEvent>();
  @Output() onFocusEvent = new EventEmitter<FocusEvent>();

  value = '';
  private onChangeCallback = (value: string) => {};
  private onTouchedCallback = () => {};

  get selectClasses(): string {
    const baseClasses = 'flex h-11 w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600 appearance-none bg-no-repeat bg-right';

    const stateClasses = [
      this.invalid && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
      this.fullWidth && 'w-full'
    ].filter(Boolean);

    // Add dropdown arrow using CSS
    const arrowStyle = `bg-[url('data:svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEuNUw2IDYuNUwxMSAxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')]`;

    return [
      baseClasses,
      arrowStyle,
      ...stateClasses,
      this.class
    ].filter(Boolean).join(' ');
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newValue = target.value;
    this.value = newValue;
    this.onChangeCallback(newValue);
    this.valueChange.emit(newValue);
  }

  onBlur(event: FocusEvent): void {
    this.onTouchedCallback();
    this.onBlurEvent.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this.onFocusEvent.emit(event);
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