<template>
  <button
    :type="type"
    role="button"
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    :class="buttonClasses"
    :disabled="isDisabled"
    v-bind="$attrs"
  >
    <!-- Loading spinner -->
    <span
      v-if="loading"
      :class="['animate-spin rounded-full border-2 border-current border-t-transparent', iconSizeClasses]"
      aria-hidden="true"
    />
    
    <!-- Left icon slot -->
    <span
      v-if="!loading && $slots.leftIcon"
      :class="['flex-shrink-0', iconSizeClasses]"
      aria-hidden="true"
    >
      <slot name="leftIcon" />
    </span>
    
    <!-- Main content -->
    <span v-if="$slots.default">
      <slot />
    </span>
    
    <!-- Right icon slot -->
    <span
      v-if="!loading && $slots.rightIcon"
      :class="['flex-shrink-0', iconSizeClasses]"
      aria-hidden="true"
    >
      <slot name="rightIcon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../lib/utils';
import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  fullWidth: false,
  disabled: false,
  type: 'button',
});

defineOptions({
  inheritAttrs: false,
});

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  link: 'text-primary underline-offset-4 hover:underline',
};

const buttonSizes = {
  sm: 'h-9 rounded-md px-3',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

const iconSizes = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  icon: 'w-4 h-4',
};

const isDisabled = computed(() => props.disabled || props.loading);

const buttonClasses = computed(() => 
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    buttonVariants[props.variant],
    buttonSizes[props.size],
    props.fullWidth && 'w-full',
  )
);

const iconSizeClasses = computed(() => iconSizes[props.size]);
</script>
