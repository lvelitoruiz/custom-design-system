<template>
  <div
    :class="dividerClasses"
    role="separator"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  class?: string;
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  class: '',
});

const dividerClasses = computed(() => {
  const orientationClasses = props.orientation === 'horizontal' 
    ? 'w-full h-px' 
    : 'h-full w-px';
  
  return [
    'bg-border',
    orientationClasses,
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

