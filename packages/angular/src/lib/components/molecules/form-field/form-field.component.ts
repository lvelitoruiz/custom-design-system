import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-form-field',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div class="flex flex-col gap-y-1.5">
      <label
        *ngIf="label"
        [attr.for]="id"
        class="text-sm font-medium text-foreground"
      >
        {{ label }}
        <span
          *ngIf="required"
          class="text-destructive ml-1"
          aria-label="required"
        >
          *
        </span>
      </label>
      
      <ng-content></ng-content>
      
      <p
        *ngIf="error"
        [id]="errorId"
        class="text-xs text-destructive mt-1"
        role="alert"
      >
        {{ error }}
      </p>
      
      <p
        *ngIf="!error && hint"
        [id]="hintId"
        class="text-xs text-muted-foreground mt-1"
      >
        {{ hint }}
      </p>
    </div>
  `
})
export class FormFieldComponent {
  @Input() label?: string;
  @Input() required: boolean = false;
  @Input() error?: string;
  @Input() hint?: string;
  @Input() id?: string;

  get errorId(): string | undefined {
    return this.id ? `${this.id}-error` : undefined;
  }

  get hintId(): string | undefined {
    return this.id ? `${this.id}-hint` : undefined;
  }
}

