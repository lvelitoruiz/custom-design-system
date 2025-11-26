<template>
  <div
    :class="skeletonClasses"
    :style="skeletonStyles"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SkeletonVariant } from './types';

export interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: SkeletonVariant;
  class?: string;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  variant: 'rectangular',
  class: '',
});

const variantClasses: Record<SkeletonVariant, string> = {
  rectangular: 'rounded-md',
  circular: 'rounded-full',
  text: 'rounded',
};

const skeletonClasses = computed(() => {
  return [
    'animate-pulse bg-muted',
    variantClasses[props.variant],
    props.class,
  ].filter(Boolean).join(' ');
});

const skeletonStyles = computed(() => ({
  width: props.width,
  height: props.height,
}));
</script>

