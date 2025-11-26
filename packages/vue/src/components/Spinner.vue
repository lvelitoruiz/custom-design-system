<template>
  <div
    :class="spinnerClasses"
    role="status"
    aria-label="Loading"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SpinnerSize } from './types';

export interface SpinnerProps {
  size?: SpinnerSize;
  class?: string;
}

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: 'md',
  class: '',
});

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-3',
};

const spinnerClasses = computed(() => {
  return [
    'inline-block animate-spin rounded-full border-solid border-primary border-t-transparent',
    sizeClasses[props.size],
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>

