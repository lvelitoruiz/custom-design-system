<template>
  <div
    role="search"
    :class="searchBarClasses"
  >
    <!-- Search Icon -->
    <svg
      class="w-5 h-5 text-[hsl(var(--muted-foreground))] flex-shrink-0"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>

    <!-- Input -->
    <input
      ref="inputRef"
      type="text"
      :value="value"
      @input="handleInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
      :placeholder="placeholder"
      :aria-label="placeholder ? undefined : 'Search'"
      :class="inputClasses"
    />

    <!-- Clear Button -->
    <button
      v-if="showClearButton"
      type="button"
      @click="handleClear"
      aria-label="Clear search"
      role="button"
      :class="clearButtonClasses"
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
import { ref, computed } from 'vue';

export interface SearchBarProps {
  value: string;
  placeholder?: string;
  clearable?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SearchBarProps>(), {
  placeholder: 'Search...',
  clearable: true,
  class: '',
});

const emit = defineEmits<{
  'update:value': [value: string];
  'clear': [];
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const isFocused = ref(false);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:value', target.value);
};

const handleClear = () => {
  emit('update:value', '');
  emit('clear');
  inputRef.value?.focus();
};

const showClearButton = computed(() => props.clearable && props.value.length > 0);

const searchBarClasses = computed(() => {
  return [
    'w-full flex items-center gap-x-2',
    'px-3 py-2.5',
    'rounded-[var(--radius-lg)]',
    'bg-card',
    'border border-input',
    'transition-all duration-200',
    isFocused.value && 'border-ring ring-2 ring-ring/20',
    props.class,
  ].filter(Boolean).join(' ');
});

const inputClasses = computed(() => {
  return [
    'flex-grow',
    'bg-transparent',
    'border-none',
    'outline-none',
    'text-[hsl(var(--foreground))]',
    'placeholder:text-[hsl(var(--muted-foreground))]',
    'text-sm',
  ].join(' ');
});

const clearButtonClasses = computed(() => {
  return [
    'flex-shrink-0',
    'p-1',
    'rounded-full',
    'hover:bg-[hsl(var(--accent))]',
    'transition-colors duration-200',
    'text-[hsl(var(--foreground))]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
  ].join(' ');
});
</script>

