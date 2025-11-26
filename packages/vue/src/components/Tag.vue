<template>
  <span
    role="status"
    :class="tagClasses"
  >
    <slot />
    <button
      v-if="removable && onRemove"
      type="button"
      @click="onRemove"
      role="button"
      aria-label="Remove tag"
      class="ml-0.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm"
    >
      <svg 
        :width="iconSize" 
        :height="iconSize" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TagVariant, TagSize } from './types';

export interface TagProps {
  variant?: TagVariant;
  size?: TagSize;
  rounded?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  class?: string;
}

const props = withDefaults(defineProps<TagProps>(), {
  variant: 'primary',
  size: 'md',
  rounded: true,
  removable: false,
  class: '',
});

const tagVariants: Record<TagVariant, string> = {
  primary: 'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary/50 text-secondary-foreground border border-border',
  success: 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20',
  warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20',
  danger: 'bg-destructive/10 text-destructive border border-destructive/20',
};

const tagSizes: Record<TagSize, string> = {
  sm: 'text-xs py-0.5 px-2',
  md: 'text-sm py-1 px-3',
  lg: 'text-base py-1.5 px-4',
};

const iconSize = computed(() => {
  if (props.size === 'sm') return 12;
  if (props.size === 'lg') return 16;
  return 14;
});

const tagClasses = computed(() => {
  return [
    'inline-flex items-center gap-1.5 font-medium transition-colors',
    tagVariants[props.variant],
    tagSizes[props.size],
    props.rounded ? 'rounded-full' : 'rounded-md',
    props.removable ? 'pr-1.5' : '',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

