<template>
  <div
    :class="containerClasses"
  >
    <table
      role="table"
      class="w-full border-collapse"
    >
      <!-- Header -->
      <thead>
        <tr role="row" class="bg-[hsl(var(--muted))]">
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            :class="headerCellClasses"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr v-if="data.length === 0" role="row">
          <td
            role="cell"
            :colspan="columns.length"
            :class="emptyMessageClasses"
          >
            {{ emptyMessage }}
          </td>
        </tr>
        <tr
          v-else
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          role="row"
          :class="getRowClasses(rowIndex)"
        >
          <td
            v-for="column in columns"
            :key="column.key"
            role="cell"
            :class="cellClasses"
          >
            {{ getCellValue(row, column.key) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface TableColumn {
  key: string;
  label: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  emptyMessage?: string;
  class?: string;
}

const props = withDefaults(defineProps<TableProps>(), {
  emptyMessage: 'No data available.',
  class: '',
});

const containerClasses = computed(() => {
  return [
    'w-full overflow-x-auto',
    'border border-[hsl(var(--border))]',
    'rounded-md',
    'bg-[hsl(var(--card))]',
    props.class,
  ].filter(Boolean).join(' ');
});

const headerCellClasses = [
  'px-4 py-3',
  'text-left',
  'text-sm font-medium',
  'text-[hsl(var(--foreground))]',
  'border-b border-[hsl(var(--border))]',
  'whitespace-nowrap',
  'uppercase tracking-wide',
].join(' ');

const cellClasses = [
  'px-4 py-3',
  'text-sm',
  'text-[hsl(var(--foreground))]',
].join(' ');

const emptyMessageClasses = [
  'px-4 py-8',
  'text-center',
  'text-sm',
  'text-[hsl(var(--muted-foreground))]',
].join(' ');

const getRowClasses = (rowIndex: number) => {
  return [
    'border-b border-[hsl(var(--border))]',
    'hover:bg-[hsl(var(--muted))]',
    'transition-colors duration-200',
    rowIndex % 2 === 1 && 'bg-[hsl(var(--muted))]/30',
  ].filter(Boolean).join(' ');
};

const getCellValue = (row: Record<string, any>, key: string) => {
  const value = row[key];
  return value !== undefined && value !== null ? String(value) : '-';
};
</script>

