<template>
  <div
    role="list"
    :class="gridClasses"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      role="listitem"
    >
      <slot name="item" :item="item" :index="index">
        {{ item }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type CardListCols = 1 | 2 | 3 | 4 | 5 | 6;
export type CardListGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

export interface CardListProps {
  items: any[];
  cols?: CardListCols;
  gap?: CardListGap;
  class?: string;
}

const props = withDefaults(defineProps<CardListProps>(), {
  cols: 3,
  gap: 4,
  class: '',
});

const getColsClass = (): string => {
  const colsMap: Record<CardListCols, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  };
  return colsMap[props.cols];
};

const getGapClass = (): string => {
  const gapMap: Record<CardListGap, string> = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
  };
  return gapMap[props.gap];
};

const gridClasses = computed(() => {
  return [
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    getColsClass(),
    getGapClass(),
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

