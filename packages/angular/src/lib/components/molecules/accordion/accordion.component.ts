import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'ds-accordion',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div class="w-full flex flex-col divide-y divide-border">
      <div *ngFor="let item of items" class="flex flex-col">
        <!-- Title button -->
        <button
          role="button"
          [attr.aria-expanded]="isOpen(item.id)"
          [attr.aria-controls]="'accordion-panel-' + item.id"
          (click)="toggleItem(item.id)"
          (keydown)="handleKeyDown($event, item.id)"
          class="w-full flex justify-between items-center px-4 py-3 cursor-pointer font-medium text-foreground bg-card hover:bg-muted/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <span>{{ item.title }}</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            [class]="getChevronClasses(item.id)"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        <!-- Content panel -->
        <div
          [id]="'accordion-panel-' + item.id"
          role="region"
          [attr.aria-hidden]="!isOpen(item.id)"
          [class]="getPanelClasses(item.id)"
        >
          <div class="px-4 py-3 text-sm text-foreground bg-muted/30">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  `
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];
  @Input() multiple: boolean = false;
  @Input() defaultOpen: string[] = [];
  
  openItems: string[] = [];

  ngOnInit() {
    this.openItems = [...this.defaultOpen];
  }

  isOpen(id: string): boolean {
    return this.openItems.includes(id);
  }

  toggleItem(id: string): void {
    if (this.multiple) {
      if (this.isOpen(id)) {
        this.openItems = this.openItems.filter(itemId => itemId !== id);
      } else {
        this.openItems = [...this.openItems, id];
      }
    } else {
      this.openItems = this.isOpen(id) ? [] : [id];
    }
  }

  getChevronClasses(id: string): string {
    const classes = ['transition-transform', 'duration-200'];
    if (this.isOpen(id)) {
      classes.push('rotate-180');
    }
    return classes.join(' ');
  }

  getPanelClasses(id: string): string {
    const classes = ['overflow-hidden', 'transition-all', 'duration-200'];
    if (this.isOpen(id)) {
      classes.push('max-h-[1000px]', 'opacity-100');
    } else {
      classes.push('max-h-0', 'opacity-0');
    }
    return classes.join(' ');
  }

  handleKeyDown(event: KeyboardEvent, id: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleItem(id);
    }
  }
}

