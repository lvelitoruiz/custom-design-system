import React from 'react';
import { TableProps } from './types';
import { cn } from '../../../lib/utils';

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  emptyMessage = "No data available.",
  className
}) => {
  return (
    <div
      className={cn(
        'w-full overflow-x-auto',
        'border border-[hsl(var(--border))]',
        'rounded-md',
        'bg-[hsl(var(--card))]',
        className
      )}
    >
      <table
        role="table"
        className="w-full border-collapse"
      >
        {/* Header */}
        <thead>
          <tr role="row" className="bg-[hsl(var(--muted))]">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  'px-4 py-3',
                  'text-left',
                  'text-sm font-medium',
                  'text-[hsl(var(--foreground))]',
                  'border-b border-[hsl(var(--border))]',
                  'whitespace-nowrap',
                  'uppercase tracking-wide'
                )}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.length === 0 ? (
            <tr role="row">
              <td
                role="cell"
                colSpan={columns.length}
                className={cn(
                  'px-4 py-8',
                  'text-center',
                  'text-sm',
                  'text-[hsl(var(--muted-foreground))]'
                )}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                role="row"
                className={cn(
                  'border-b border-[hsl(var(--border))]',
                  'hover:bg-[hsl(var(--muted))]',
                  'transition-colors duration-200',
                  rowIndex % 2 === 1 && 'bg-[hsl(var(--muted))]/30'
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    role="cell"
                    className={cn(
                      'px-4 py-3',
                      'text-sm',
                      'text-[hsl(var(--foreground))]'
                    )}
                  >
                    {row[column.key] !== undefined && row[column.key] !== null
                      ? String(row[column.key])
                      : '-'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
