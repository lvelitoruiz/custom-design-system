<template>
  <div
    role="status"
    aria-label="Empty state"
    :class="containerClasses"
  >
    <!-- Icon -->
    <div v-if="$slots.icon" class="mb-4 text-[hsl(var(--muted-foreground))]">
      <slot name="icon" />
    </div>

    <!-- Title -->
    <h3 class="text-xl font-semibold text-[hsl(var(--foreground))] mb-2">
      {{ title }}
    </h3>

    <!-- Description -->
    <p v-if="description" class="text-sm text-[hsl(var(--muted-foreground))] max-w-md mb-4">
      {{ description }}
    </p>

    <!-- Action -->
    <div v-if="$slots.action" class="mt-2">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface EmptyStateProps {
  title: string;
  description?: string;
  class?: string;
}

const props = withDefaults(defineProps<EmptyStateProps>(), {
  class: '',
});

const containerClasses = computed(() => {
  return [
    'w-full',
    'flex flex-col items-center justify-center text-center',
    'py-12 px-4',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

