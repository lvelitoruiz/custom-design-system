import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-pagination',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <nav
      role="navigation"
      aria-label="Pagination"
      class="flex items-center justify-center gap-x-2 py-4"
    >
      <!-- Previous Button -->
      <button
        type="button"
        (click)="handlePrev()"
        [disabled]="isPrevDisabled"
        [attr.aria-disabled]="isPrevDisabled"
        aria-label="Previous page"
        [class]="getPrevNextClasses(isPrevDisabled)"
      >
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
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span>Prev</span>
      </button>

      <!-- Page Numbers -->
      <button
        *ngFor="let pageNumber of pageNumbers"
        type="button"
        (click)="handlePageClick(pageNumber)"
        [attr.aria-current]="pageNumber === page ? 'page' : null"
        [attr.aria-label]="'Page ' + pageNumber"
        [class]="getPageClasses(pageNumber === page)"
      >
        {{ pageNumber }}
      </button>

      <!-- Next Button -->
      <button
        type="button"
        (click)="handleNext()"
        [disabled]="isNextDisabled"
        [attr.aria-disabled]="isNextDisabled"
        aria-label="Next page"
        [class]="getPrevNextClasses(isNextDisabled)"
      >
        <span>Next</span>
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
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </nav>
  `
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() totalPages: number = 1;
  
  @Output() pageChange = new EventEmitter<number>();
  @Output() onChange = new EventEmitter<number>();

  get isPrevDisabled(): boolean {
    return this.page === 1;
  }

  get isNextDisabled(): boolean {
    return this.page === this.totalPages;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getPrevNextClasses(isDisabled: boolean): string {
    const classes = [
      'flex',
      'items-center',
      'gap-1',
      'px-3',
      'py-1.5',
      'rounded-md',
      'text-sm',
      'font-medium',
      'border',
      'border-border',
      'text-foreground',
      'transition-colors',
      'duration-200'
    ];
    
    if (isDisabled) {
      classes.push('opacity-40', 'cursor-not-allowed');
    } else {
      classes.push('hover:bg-muted', 'cursor-pointer');
    }
    
    return classes.join(' ');
  }

  getPageClasses(isActive: boolean): string {
    const classes = [
      'px-3',
      'py-1.5',
      'rounded-md',
      'text-sm',
      'font-medium',
      'border',
      'transition-colors',
      'duration-200'
    ];
    
    if (isActive) {
      classes.push('bg-primary/10', 'text-primary', 'border-primary');
    } else {
      classes.push('border-border', 'text-foreground', 'hover:bg-muted', 'cursor-pointer');
    }
    
    return classes.join(' ');
  }

  handlePrev(): void {
    if (!this.isPrevDisabled) {
      const newPage = this.page - 1;
      this.pageChange.emit(newPage);
      this.onChange.emit(newPage);
    }
  }
  
  handleNext(): void {
    if (!this.isNextDisabled) {
      const newPage = this.page + 1;
      this.pageChange.emit(newPage);
      this.onChange.emit(newPage);
    }
  }
  
  handlePageClick(pageNumber: number): void {
    if (pageNumber !== this.page) {
      this.pageChange.emit(pageNumber);
      this.onChange.emit(pageNumber);
    }
  }
}

