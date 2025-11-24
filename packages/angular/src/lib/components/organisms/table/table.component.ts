import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'ds-table',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div class="w-full overflow-x-auto border border-border rounded-md bg-card">
      <table
        role="table"
        class="w-full border-collapse"
      >
        <!-- Header -->
        <thead>
          <tr role="row" class="bg-muted">
            <th
              *ngFor="let column of columns"
              scope="col"
              class="px-4 py-3 text-left text-sm font-medium text-foreground border-b border-border whitespace-nowrap uppercase tracking-wide"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody>
          <!-- Empty state -->
          <tr *ngIf="data.length === 0" role="row">
            <td
              role="cell"
              [attr.colspan]="columns.length"
              class="px-4 py-8 text-center text-sm text-muted-foreground"
            >
              {{ emptyMessage }}
            </td>
          </tr>

          <!-- Data rows -->
          <tr
            *ngFor="let row of data; let rowIndex = index"
            role="row"
            [class]="getRowClasses(rowIndex)"
          >
            <td
              *ngFor="let column of columns"
              role="cell"
              class="px-4 py-3 text-sm text-foreground"
            >
              {{ getCellValue(row, column.key) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() emptyMessage: string = 'No data available.';

  getRowClasses(rowIndex: number): string {
    const classes = [
      'border-b',
      'border-border',
      'hover:bg-muted',
      'transition-colors',
      'duration-200'
    ];
    
    if (rowIndex % 2 === 1) {
      classes.push('bg-muted/30');
    }
    
    return classes.join(' ');
  }

  getCellValue(row: any, key: string): string {
    const value = row[key];
    return value !== undefined && value !== null ? String(value) : '-';
  }
}

