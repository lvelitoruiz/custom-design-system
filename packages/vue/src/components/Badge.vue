<template>
  <span
    role="status"
    :class="badgeClasses"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BadgeVariant, BadgeSize } from './types';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'primary',
  size: 'md',
  rounded: false,
  class: '',
});

const badgeVariants: Record<BadgeVariant, string> = {
  primary: 'bg-primary/10 text-primary border border-primary/20',
  secondary: 'bg-secondary/50 text-secondary-foreground border border-border',
  success: 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20',
  warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20',
  danger: 'bg-destructive/10 text-destructive border border-destructive/20',
};

const badgeSizes: Record<BadgeSize, string> = {
  sm: 'text-xs py-0.5 px-2',
  md: 'text-sm py-1 px-3',
  lg: 'text-base py-1.5 px-4',
};

const badgeClasses = computed(() => {
  return [
    'inline-flex items-center font-medium transition-colors',
    badgeVariants[props.variant],
    badgeSizes[props.size],
    props.rounded ? 'rounded-full' : 'rounded-md',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

