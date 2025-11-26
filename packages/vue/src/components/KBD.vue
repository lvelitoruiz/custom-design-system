<template>
  <kbd
    :class="kbdClasses"
  >
    <slot />
  </kbd>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface KBDProps {
  class?: string;
}

const props = withDefaults(defineProps<KBDProps>(), {
  class: '',
});

const kbdClasses = computed(() => {
  return [
    'inline-flex items-center justify-center px-2 py-1 text-xs font-semibold',
    'text-foreground bg-muted border border-border rounded shadow-sm',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

