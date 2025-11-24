import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ds-switch',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
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
      *ngIf="label; else switchOnly"
      [class]="labelClasses"
      [attr.for]="id"
    >
      <div class="relative inline-block">
        <input
          [id]="id"
          type="checkbox"
          [name]="name"
          [checked]="checked"
          [disabled]="disabled"
          (change)="onChange($event)"
          class="sr-only peer"
          role="switch"
          [attr.aria-checked]="checked"
          [attr.aria-disabled]="disabled"
        />
        <div 
          [class]="switchClasses"
        >
          <span 
            [class]="thumbClasses"
          ></span>
        </div>
      </div>
      <span class="text-sm select-none">
        {{ label }}
      </span>
    </label>
    
    <ng-template #switchOnly>
      <div class="relative inline-block">
        <input
          [id]="id"
          type="checkbox"
          [name]="name"
          [checked]="checked"
          [disabled]="disabled"
          (change)="onChange($event)"
          class="sr-only peer"
          role="switch"
          [attr.aria-checked]="checked"
          [attr.aria-disabled]="disabled"
        />
        <div 
          [class]="switchClasses"
        >
          <span 
            [class]="thumbClasses"
          ></span>
        </div>
      </div>
    </ng-template>
  `
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label?: string;
  @Input() name?: string;
  @Input() id?: string = `switch-${Math.random().toString(36).substring(7)}`;
  @Input() inline: boolean = true;
  
  @Output() checkedChange = new EventEmitter<boolean>();

  onChangeCallback: (value: boolean) => void = () => {};
  onTouchedCallback: () => void = () => {};

  get labelClasses(): string {
    const classes = [
      this.inline ? 'inline-flex' : 'flex',
      'items-center',
      'gap-2',
      this.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
    ];
    return classes.join(' ');
  }

  get switchClasses(): string {
    const classes = [
      'peer',
      'relative',
      'inline-flex',
      'h-6',
      'w-11',
      'shrink-0',
      'cursor-pointer',
      'items-center',
      'rounded-full',
      'border-2',
      'border-transparent',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50'
    ];
    
    if (this.checked) {
      classes.push('bg-primary');
    } else {
      classes.push('bg-input');
    }
    
    return classes.join(' ');
  }

  get thumbClasses(): string {
    const classes = [
      'pointer-events-none',
      'absolute',
      'left-0.5',
      'inline-block',
      'h-5',
      'w-5',
      'rounded-full',
      'bg-background',
      'shadow-lg',
      'ring-0',
      'transition-transform'
    ];
    
    if (this.checked) {
      classes.push('translate-x-5');
    } else {
      classes.push('translate-x-0');
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

