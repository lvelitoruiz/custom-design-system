<template>
  <span
    :class="iconClasses"
    :style="iconStyles"
    role="img"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | number;

export interface IconProps {
  size?: IconSize;
  color?: string;
  class?: string;
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  color: 'currentColor',
  class: '',
});

const sizeMap: Record<string, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

const iconSize = computed(() => {
  if (typeof props.size === 'number') {
    return props.size;
  }
  return sizeMap[props.size] || 20;
});

const iconClasses = computed(() => {
  return [
    'inline-flex items-center justify-center shrink-0',
    'transition-colors duration-200',
    props.class,
  ].filter(Boolean).join(' ');
});

const iconStyles = computed(() => ({
  width: `${iconSize.value}px`,
  height: `${iconSize.value}px`,
  color: props.color,
}));
</script>

