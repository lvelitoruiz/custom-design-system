import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-list-item',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      [attr.role]="clickable ? 'button' : null"
      [attr.tabindex]="clickable ? 0 : null"
      (click)="handleClick()"
      (keydown)="handleKeyDown($event)"
      [class]="listItemClasses"
    >
      <div *ngIf="hasLeftIcon" class="flex-shrink-0 mr-3 flex items-center justify-center">
        <ng-content select="[slot=leftIcon]"></ng-content>
      </div>
      
      <div class="flex-1 flex flex-col gap-y-0.5 min-w-0">
        <span [class]="titleClasses">
          {{ title }}
        </span>
        <span *ngIf="description" [class]="descriptionClasses">
          {{ description }}
        </span>
      </div>
      
      <div *ngIf="hasRightIcon" class="flex-shrink-0 ml-3 flex items-center justify-center">
        <ng-content select="[slot=rightIcon]"></ng-content>
      </div>
    </div>
  `
})
export class ListItemComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() clickable: boolean = false;
  @Input() active: boolean = false;
  @Input() hasLeftIcon: boolean = false;
  @Input() hasRightIcon: boolean = false;
  
  @Output() itemClick = new EventEmitter<void>();
  @Output() onClick = new EventEmitter<void>();

  get listItemClasses(): string {
    const classes = [
      'w-full',
      'flex',
      'items-center',
      'px-4',
      'py-3',
      'rounded-lg',
      'transition-all',
      'duration-200'
    ];
    
    if (this.active) {
      classes.push('bg-primary', 'text-primary-foreground');
    } else {
      classes.push('bg-card');
    }
    
    if (this.clickable) {
      classes.push('cursor-pointer');
      if (this.active) {
        classes.push('hover:bg-primary/90');
      } else {
        classes.push('hover:bg-muted', 'active:bg-muted/80');
      }
      classes.push('focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-ring', 'focus-visible:ring-offset-2');
    } else {
      classes.push('cursor-default');
    }
    
    return classes.join(' ');
  }

  get titleClasses(): string {
    const classes = ['text-sm', 'font-medium'];
    if (this.active) {
      classes.push('text-primary-foreground');
    } else {
      classes.push('text-foreground');
    }
    return classes.join(' ');
  }

  get descriptionClasses(): string {
    const classes = ['text-sm'];
    if (this.active) {
      classes.push('text-primary-foreground/80');
    } else {
      classes.push('text-muted-foreground');
    }
    return classes.join(' ');
  }

  handleClick(): void {
    if (this.clickable) {
      this.itemClick.emit();
      this.onClick.emit();
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (this.clickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this.itemClick.emit();
      this.onClick.emit();
    }
  }
}

