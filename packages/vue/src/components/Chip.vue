<template>
  <span
    :class="chipClasses"
  >
    {{ label }}
    <button
      v-if="onRemove"
      @click="onRemove"
      class="ml-1 hover:opacity-70 focus:outline-none"
      aria-label="Remove"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ChipVariant } from './types';

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  variant?: ChipVariant;
  class?: string;
}

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'default',
  class: '',
});

const variantClasses: Record<ChipVariant, string> = {
  default: 'bg-muted text-foreground',
  primary: 'bg-primary text-primary-foreground',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

const chipClasses = computed(() => {
  return [
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium',
    variantClasses[props.variant],
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

