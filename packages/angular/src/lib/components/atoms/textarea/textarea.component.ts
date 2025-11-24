import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-textarea',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <textarea
      #textareaRef
      [value]="value"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [readonly]="readonly"
      [rows]="autoResize ? minRows : rows"
      [cols]="cols"
      [attr.maxlength]="maxlength"
      [class]="textareaClasses"
      [attr.aria-invalid]="invalid || !!error"
      [attr.aria-disabled]="disabled"
      [attr.aria-describedby]="error ? 'error-message' : null"
      role="textbox"
      aria-multiline="true"
      (input)="onInput($event)"
      (blur)="onBlur($event)"
      (focus)="onFocus($event)"
    ></textarea>
  `
})
export class TextareaComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @ViewChild('textareaRef', { static: true }) textareaRef!: ElementRef<HTMLTextAreaElement>;
  
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() invalid = false;
  @Input() error = '';
  @Input() fullWidth = false;
  @Input() rows = 4;
  @Input() cols?: number;
  @Input() maxlength?: number;
  @Input() class = '';
  
  // Auto-resize functionality matching React implementation
  @Input() autoResize = false;
  @Input() minRows = 2;
  @Input() maxRows?: number;
  @Input() resizable = true;

  @Output() valueChange = new EventEmitter<string>();
  @Output() onBlurEvent = new EventEmitter<FocusEvent>();
  @Output() onFocusEvent = new EventEmitter<FocusEvent>();

  value = '';
  private onChange = (value: string) => {};
  private onTouched = () => {};
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    if (this.autoResize) {
      this.adjustHeight();
      
      // Set up resize observer to handle window resizes
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => {
          this.adjustHeight();
        });
        this.resizeObserver.observe(this.textareaRef.nativeElement);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  get textareaClasses(): string {
    const baseClasses = 'flex w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-primary dark:focus:border-primary dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600 transition-colors';
    
    const resizeClasses = [
      !this.autoResize && 'min-h-[120px]',
      this.autoResize && 'overflow-hidden',
      !this.resizable && 'resize-none',
      this.resizable && !this.autoResize && 'resize-y'
    ].filter(Boolean);

    const stateClasses = [
      (this.error || this.invalid) && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
      this.fullWidth && 'w-full'
    ].filter(Boolean);

    return [
      baseClasses,
      ...resizeClasses,
      ...stateClasses,
      this.class
    ].filter(Boolean).join(' ');
  }

  private adjustHeight(): void {
    if (!this.autoResize || !this.textareaRef?.nativeElement) return;

    const textarea = this.textareaRef.nativeElement;
    
    // Reset height to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate line height and spacing (matching React implementation)
    const styles = window.getComputedStyle(textarea);
    const lineHeight = parseInt(styles.lineHeight);
    const paddingTop = parseInt(styles.paddingTop);
    const paddingBottom = parseInt(styles.paddingBottom);
    const borderTop = parseInt(styles.borderTopWidth);
    const borderBottom = parseInt(styles.borderBottomWidth);
    
    // Calculate min and max heights
    const minHeight = lineHeight * this.minRows + paddingTop + paddingBottom + borderTop + borderBottom;
    const maxHeight = this.maxRows 
      ? lineHeight * this.maxRows + paddingTop + paddingBottom + borderTop + borderBottom 
      : Infinity;
    
    // Set new height
    let newHeight = Math.max(minHeight, textarea.scrollHeight);
    if (maxHeight !== Infinity) {
      newHeight = Math.min(newHeight, maxHeight);
    }
    
    textarea.style.height = `${newHeight}px`;
    
    // Handle scrollable state when content exceeds maxRows
    if (this.maxRows && textarea.scrollHeight > maxHeight) {
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const newValue = target.value;
    this.value = newValue;
    
    if (this.autoResize) {
      this.adjustHeight();
    }
    
    this.onChange(newValue);
    this.valueChange.emit(newValue);
  }

  onBlur(event: FocusEvent): void {
    this.onTouched();
    this.onBlurEvent.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this.onFocusEvent.emit(event);
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
    if (this.autoResize) {
      // Delay height adjustment to ensure value is set
      setTimeout(() => this.adjustHeight(), 0);
    }
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
}