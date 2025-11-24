import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type KpiTrend = 'up' | 'down' | 'neutral';

@Component({
  selector: 'ds-kpi-card',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      role="group"
      [attr.aria-label]="'KPI ' + label"
      class="rounded-md bg-card border border-border shadow-sm px-5 py-4 flex flex-col gap-1 transition-colors duration-200 hover:shadow-md"
    >
      <!-- Header: Icon and Label -->
      <div class="flex items-center justify-between mb-1">
        <span class="text-sm font-medium text-muted-foreground">
          {{ label }}
        </span>
        <div *ngIf="hasIcon" class="text-foreground">
          <ng-content select="[slot=icon]"></ng-content>
        </div>
      </div>

      <!-- Value -->
      <div class="text-2xl font-semibold text-foreground">
        {{ value }}
      </div>

      <!-- Trend -->
      <div *ngIf="trendValue" [class]="trendClasses">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <ng-container [ngSwitch]="trend">
            <path *ngSwitchCase="'up'" d="m18 15-6-6-6 6"/>
            <path *ngSwitchCase="'down'" d="m6 9 6 6 6-6"/>
            <path *ngSwitchCase="'neutral'" d="M5 12h14"/>
          </ng-container>
        </svg>
        <span>{{ trendValue }}</span>
      </div>
    </div>
  `
})
export class KpiCardComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() trend: KpiTrend = 'neutral';
  @Input() trendValue?: string;
  @Input() hasIcon: boolean = false;

  get trendClasses(): string {
    const classes = [
      'flex',
      'items-center',
      'gap-1',
      'text-sm',
      'font-medium'
    ];
    
    switch (this.trend) {
      case 'up':
        classes.push('text-green-600', 'dark:text-green-400');
        break;
      case 'down':
        classes.push('text-red-600', 'dark:text-red-400');
        break;
      case 'neutral':
        classes.push('text-muted-foreground');
        break;
    }
    
    return classes.join(' ');
  }
}

