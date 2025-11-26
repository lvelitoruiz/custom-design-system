<template>
  <div
    role="region"
    :aria-labelledby="titleId"
    :class="cardClasses"
  >
    <div v-if="$slots.header" class="border-b border-border">
      <slot name="header" />
    </div>
    
    <div :class="paddingClasses">
      <div v-if="title || description" class="mb-3">
        <h3 
          v-if="title"
          :id="titleId"
          class="text-base font-semibold text-foreground mb-1"
        >
          {{ title }}
        </h3>
        <p v-if="description" class="text-sm text-muted-foreground">
          {{ description }}
        </p>
      </div>
      
      <slot />
    </div>
    
    <div v-if="$slots.footer" :class="['border-t border-border', paddingClasses]">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardShadow = 'none' | 'sm' | 'md';

export interface CardProps {
  title?: string;
  description?: string;
  padding?: CardPadding;
  shadow?: CardShadow;
  bordered?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  padding: 'md',
  shadow: 'sm',
  bordered: false,
  class: '',
});

const paddingVariants: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

const shadowVariants: Record<CardShadow, string> = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
};

const titleId = computed(() => 
  props.title ? `card-title-${Math.random().toString(36).substr(2, 9)}` : undefined
);

const cardClasses = computed(() => {
  return [
    'bg-card text-card-foreground rounded-lg overflow-hidden transition-shadow duration-200',
    shadowVariants[props.shadow],
    props.bordered && 'border border-border',
    props.class,
  ].filter(Boolean).join(' ');
});

const paddingClasses = computed(() => paddingVariants[props.padding]);
</script>

