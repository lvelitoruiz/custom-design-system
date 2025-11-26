<template>
  <div
    role="group"
    :class="groupClasses"
  >
    <div
      v-if="$slots.leftAddon"
      :class="addonClasses"
    >
      <slot name="leftAddon" />
    </div>
    
    <div class="flex-1 [&_input]:border-0 [&_input]:focus:ring-0 [&_input]:focus-visible:ring-0 [&_input]:focus-visible:ring-offset-0 [&_input]:rounded-none [&_input]:shadow-none [&>*]:flex-1">
      <slot />
    </div>
    
    <div
      v-if="$slots.rightAddon"
      :class="addonClasses"
    >
      <slot name="rightAddon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface InputGroupProps {
  class?: string;
}

const props = withDefaults(defineProps<InputGroupProps>(), {
  class: '',
});

const groupClasses = computed(() => {
  return [
    'flex items-stretch w-full',
    'rounded-lg overflow-hidden',
    'border border-gray-300 dark:border-gray-600',
    'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-0',
    'transition-all duration-200',
    props.class,
  ].filter(Boolean).join(' ');
});

const addonClasses = computed(() => {
  return [
    'flex items-center justify-center',
    'bg-primary text-primary-foreground',
    'px-4 py-2.5 text-sm font-medium',
    'transition-colors duration-200',
  ].join(' ');
});
</script>

