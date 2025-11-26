<template>
  <div
    role="group"
    :aria-label="`KPI ${label}`"
    :class="cardClasses"
  >
    <!-- Header: Icon and Label -->
    <div class="flex items-center justify-between mb-1">
      <span class="text-sm font-medium text-[hsl(var(--muted-foreground))]">
        {{ label }}
      </span>
      <div v-if="$slots.icon" class="text-[hsl(var(--foreground))]">
        <slot name="icon" />
      </div>
    </div>

    <!-- Value -->
    <div class="text-2xl font-semibold text-[hsl(var(--foreground))]">
      {{ value }}
    </div>

    <!-- Trend -->
    <div
      v-if="trendValue"
      :class="trendClasses"
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
        <template v-if="trend === 'up'">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </template>
        <template v-else-if="trend === 'down'">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </template>
        <template v-else>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </template>
      </svg>
      <span>{{ trendValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type KpiTrend = 'up' | 'down' | 'neutral';

export interface KpiCardProps {
  label: string;
  value: string | number;
  trend?: KpiTrend;
  trendValue?: string;
  class?: string;
}

const props = withDefaults(defineProps<KpiCardProps>(), {
  trend: 'neutral',
  class: '',
});

const cardClasses = computed(() => {
  return [
    'rounded-md',
    'bg-[hsl(var(--card))]',
    'border border-[hsl(var(--border))]',
    'shadow-sm',
    'px-5 py-4',
    'flex flex-col gap-1',
    'transition-colors duration-200',
    'hover:shadow-md',
    props.class,
  ].filter(Boolean).join(' ');
});

const getTrendColorClass = (): string => {
  const colorMap: Record<KpiTrend, string> = {
    up: 'text-[hsl(var(--success))]',
    down: 'text-[hsl(var(--destructive))]',
    neutral: 'text-[hsl(var(--muted-foreground))]',
  };
  return colorMap[props.trend];
};

const trendClasses = computed(() => {
  return [
    'flex items-center gap-1',
    'text-sm font-medium',
    getTrendColorClass(),
  ].join(' ');
});
</script>

