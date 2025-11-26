<template>
  <nav
    role="navigation"
    aria-label="Pagination"
    :class="['flex items-center justify-center gap-x-2 py-4', props.class]"
  >
    <!-- Previous Button -->
    <button
      type="button"
      @click="handlePrev"
      :disabled="isPrevDisabled"
      :aria-disabled="isPrevDisabled"
      aria-label="Previous page"
      :class="prevButtonClasses"
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
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>Prev</span>
    </button>

    <!-- Page Numbers -->
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      type="button"
      @click="handlePageClick(pageNumber)"
      :aria-current="pageNumber === page ? 'page' : undefined"
      :aria-label="`Page ${pageNumber}`"
      :class="getPageButtonClasses(pageNumber)"
    >
      {{ pageNumber }}
    </button>

    <!-- Next Button -->
    <button
      type="button"
      @click="handleNext"
      :disabled="isNextDisabled"
      :aria-disabled="isNextDisabled"
      aria-label="Next page"
      :class="nextButtonClasses"
    >
      <span>Next</span>
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
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface PaginationProps {
  page: number;
  totalPages: number;
  class?: string;
}

const props = withDefaults(defineProps<PaginationProps>(), {
  class: '',
});

const emit = defineEmits<{
  'change': [page: number];
}>();

const isPrevDisabled = computed(() => props.page === 1);
const isNextDisabled = computed(() => props.page === props.totalPages);

const handlePrev = () => {
  if (!isPrevDisabled.value) {
    emit('change', props.page - 1);
  }
};

const handleNext = () => {
  if (!isNextDisabled.value) {
    emit('change', props.page + 1);
  }
};

const handlePageClick = (pageNumber: number) => {
  if (pageNumber !== props.page) {
    emit('change', pageNumber);
  }
};

const prevButtonClasses = computed(() => {
  return [
    'flex items-center gap-1',
    'px-3 py-1.5',
    'rounded-md',
    'text-sm font-medium',
    'border border-[hsl(var(--border))]',
    'text-[hsl(var(--foreground))]',
    'transition-colors duration-200',
    isPrevDisabled.value
      ? 'opacity-40 cursor-not-allowed'
      : 'hover:bg-[hsl(var(--muted))] cursor-pointer',
  ].join(' ');
});

const nextButtonClasses = computed(() => {
  return [
    'flex items-center gap-1',
    'px-3 py-1.5',
    'rounded-md',
    'text-sm font-medium',
    'border border-[hsl(var(--border))]',
    'text-[hsl(var(--foreground))]',
    'transition-colors duration-200',
    isNextDisabled.value
      ? 'opacity-40 cursor-not-allowed'
      : 'hover:bg-[hsl(var(--muted))] cursor-pointer',
  ].join(' ');
});

const getPageButtonClasses = (pageNumber: number) => {
  const isActive = pageNumber === props.page;
  return [
    'px-3 py-1.5',
    'rounded-md',
    'text-sm font-medium',
    'border',
    'transition-colors duration-200',
    isActive
      ? 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border-[hsl(var(--primary))]'
      : 'border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] cursor-pointer',
  ].join(' ');
};
</script>

