<template>
  <div :class="['flex flex-col gap-1', !fullWidth && 'w-auto', props.class]">
    <span v-if="labelText" class="text-sm font-medium text-foreground">
      {{ labelText }}
    </span>
    <div
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="0"
      :aria-valuemax="max"
      :class="progressClasses"
    >
      <div
        :class="barClasses"
        :style="{ width: `${percentage}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ProgressVariant, ProgressSize } from './types';

export interface ProgressProps {
  value: number;
  max?: number;
  size?: ProgressSize;
  variant?: ProgressVariant;
  fullWidth?: boolean;
  label?: boolean | string;
  class?: string;
}

const props = withDefaults(defineProps<ProgressProps>(), {
  max: 100,
  size: 'md',
  variant: 'primary',
  fullWidth: true,
  label: false,
  class: '',
});

const percentage = computed(() => 
  Math.min(Math.max((props.value / props.max) * 100, 0), 100)
);

const sizeClasses: Record<ProgressSize, string> = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
};

const variantClasses: Record<ProgressVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
};

const labelText = computed(() => {
  if (props.label === true) return `${Math.round(percentage.value)}%`;
  if (props.label === false) return null;
  return props.label;
});

const progressClasses = computed(() => {
  return [
    'overflow-hidden rounded-full bg-muted',
    sizeClasses[props.size],
    props.fullWidth && 'w-full',
  ].filter(Boolean).join(' ');
});

const barClasses = computed(() => {
  return [
    'h-full rounded-full transition-all duration-300 ease-in-out',
    variantClasses[props.variant],
  ].filter(Boolean).join(' ');
});
</script>

