<template>
  <div
    :class="alertClasses"
    role="alert"
  >
    <div v-if="$slots.icon" class="flex-shrink-0 flex items-center justify-center mt-0.5">
      <slot name="icon" />
    </div>
    
    <div class="flex-1 min-w-0">
      <div v-if="title" class="font-medium text-sm mb-1">
        {{ title }}
      </div>
      <div v-if="description" class="text-sm">
        {{ description }}
      </div>
    </div>
    
    <button
      v-if="closable && onClose"
      @click="onClose"
      @keydown="handleKeyDown"
      class="flex-shrink-0 p-1 rounded-full hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
      aria-label="Close alert"
      role="button"
    >
      <svg 
        class="w-4 h-4" 
        xmlns="http://www.w3.org/2000/svg" 
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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps {
  title?: string;
  description?: string;
  variant?: AlertVariant;
  closable?: boolean;
  onClose?: () => void;
  class?: string;
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  closable: false,
  class: '',
});

const alertVariants: Record<AlertVariant, string> = {
  info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/50 dark:text-blue-100 dark:border-blue-800',
  success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950/50 dark:text-green-100 dark:border-green-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100 dark:border-amber-800',
  danger: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950/50 dark:text-red-100 dark:border-red-800',
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (props.onClose && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    props.onClose();
  }
};

const alertClasses = computed(() => {
  return [
    'w-full flex items-start gap-3 rounded-lg border p-4 transition-all duration-200',
    alertVariants[props.variant],
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

