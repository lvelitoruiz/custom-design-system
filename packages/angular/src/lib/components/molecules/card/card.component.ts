import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'md';

@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      role="region"
      [class]="cardClasses"
    >
      <!-- Header slot -->
      <div *ngIf="hasHeader" class="border-b border-border">
        <ng-content select="[slot=header]"></ng-content>
      </div>
      
      <!-- Main content -->
      <div [class]="contentClasses">
        <!-- Title and description -->
        <div *ngIf="title || description" class="mb-3">
          <h3 
            *ngIf="title"
            class="text-base font-semibold text-foreground mb-1"
          >
            {{ title }}
          </h3>
          <p *ngIf="description" class="text-sm text-muted-foreground">
            {{ description }}
          </p>
        </div>
        
        <!-- Default content -->
        <ng-content></ng-content>
      </div>
      
      <!-- Footer slot -->
      <div *ngIf="hasFooter" [class]="footerClasses">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() padding: CardPadding = 'md';
  @Input() shadow: CardShadow = 'sm';
  @Input() bordered: boolean = false;
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  get cardClasses(): string {
    const classes = [
      'bg-card',
      'text-card-foreground',
      'rounded-lg',
      'overflow-hidden',
      'transition-shadow',
      'duration-200'
    ];
    
    // Shadow
    switch (this.shadow) {
      case 'sm':
        classes.push('shadow-sm');
        break;
      case 'md':
        classes.push('shadow-md');
        break;
      case 'none':
        break;
    }
    
    // Border
    if (this.bordered) {
      classes.push('border', 'border-border');
    }
    
    return classes.join(' ');
  }

  get contentClasses(): string {
    return this.getPaddingClasses();
  }

  get footerClasses(): string {
    return `border-t border-border ${this.getPaddingClasses()}`;
  }

  private getPaddingClasses(): string {
    switch (this.padding) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-3';
      case 'md':
        return 'p-4';
      case 'lg':
        return 'p-6';
      default:
        return 'p-4';
    }
  }
}

