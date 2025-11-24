import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-slider',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    }
  ],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <input
      type="range"
      [id]="id"
      [name]="name"
      [value]="value"
      [min]="min"
      [max]="max"
      [step]="step"
      [disabled]="disabled"
      (input)="onChange($event)"
      [class]="sliderClasses"
      role="slider"
      [attr.aria-valuenow]="value"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="max"
      [attr.aria-disabled]="disabled"
    />
  `
})
export class SliderComponent implements ControlValueAccessor {
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = true;
  @Input() name?: string;
  @Input() id?: string;
  
  @Output() valueChange = new EventEmitter<number>();

  onChangeCallback: (value: number) => void = () => {};
  onTouchedCallback: () => void = () => {};

  get sliderClasses(): string {
    const classes = [
      'h-1.5',
      'bg-input',
      'rounded-full',
      'appearance-none',
      'transition-all',
      'duration-200',
      'focus:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background',
      '[&::-webkit-slider-thumb]:appearance-none',
      '[&::-webkit-slider-thumb]:w-5',
      '[&::-webkit-slider-thumb]:h-5',
      '[&::-webkit-slider-thumb]:rounded-full',
      '[&::-webkit-slider-thumb]:bg-primary',
      '[&::-webkit-slider-thumb]:shadow-sm',
      '[&::-webkit-slider-thumb]:transition-all',
      '[&::-webkit-slider-thumb]:duration-200',
      '[&::-webkit-slider-thumb]:hover:scale-105',
      '[&::-webkit-slider-thumb]:hover:shadow-md',
      '[&::-moz-range-thumb]:appearance-none',
      '[&::-moz-range-thumb]:w-5',
      '[&::-moz-range-thumb]:h-5',
      '[&::-moz-range-thumb]:rounded-full',
      '[&::-moz-range-thumb]:bg-primary',
      '[&::-moz-range-thumb]:border-0',
      '[&::-moz-range-thumb]:shadow-sm',
      '[&::-moz-range-thumb]:transition-all',
      '[&::-moz-range-thumb]:duration-200',
      '[&::-moz-range-thumb]:hover:scale-105',
      '[&::-moz-range-thumb]:hover:shadow-md'
    ];
    
    if (this.disabled) {
      classes.push(
        'opacity-60',
        'cursor-not-allowed',
        '[&::-webkit-slider-thumb]:cursor-not-allowed',
        '[&::-moz-range-thumb]:cursor-not-allowed'
      );
    } else {
      classes.push(
        'cursor-pointer',
        '[&::-webkit-slider-thumb]:cursor-pointer',
        '[&::-moz-range-thumb]:cursor-pointer'
      );
    }
    
    if (this.fullWidth) {
      classes.push('w-full');
    } else {
      classes.push('w-auto');
    }
    
    return classes.join(' ');
  }

  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = Number(target.value);
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.onChangeCallback(newValue);
  }

  // ControlValueAccessor implementation
  writeValue(value: number): void {
    this.value = value || 0;
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

