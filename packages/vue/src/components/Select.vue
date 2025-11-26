<template>
  <div 
    ref="selectRef"
    :class="['relative', fullWidth ? 'w-full' : 'inline-block w-full', isOpen && 'z-50']"
  >
    <!-- Trigger -->
    <div
      role="combobox"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-invalid="invalid"
      :aria-disabled="disabled"
      :tabindex="disabled ? -1 : 0"
      :class="triggerClasses"
      @click="handleToggle"
      @keydown="handleKeyDown"
    >
      <span :class="[selectedOption ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400']">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>
      
      <div class="flex items-center gap-1">
        <svg
          v-if="loading"
          class="w-4 h-4 text-gray-500 dark:text-gray-400 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        
        <button
          v-if="clearable && modelValue"
          type="button"
          @click.stop="handleClear"
          class="flex items-center justify-center w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          aria-label="Clear selection"
          tabindex="-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <svg
          :class="['w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform', isOpen && 'rotate-180']"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    
    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      role="listbox"
      :class="menuClasses"
      :style="{ maxHeight: `${maxMenuHeight}px` }"
    >
      <!-- Search Input -->
      <div v-if="searchable" class="p-2 border-b border-border">
        <div class="relative">
          <svg
            class="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
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
          <input
            ref="searchInputRef"
            v-model="searchTerm"
            type="text"
            placeholder="Search..."
            class="w-full pl-8 pr-2 py-1.5 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            @click.stop
            @keydown="handleKeyDown"
          />
        </div>
      </div>
      
      <!-- Options List -->
      <div class="overflow-y-auto" :style="{ maxHeight: searchable ? `${maxMenuHeight - 60}px` : `${maxMenuHeight}px` }">
        <div
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          role="option"
          :aria-selected="option.value === modelValue"
          :aria-disabled="option.disabled"
          :class="optionClasses(option, index)"
          @click="!option.disabled && handleOptionClick(option.value)"
          @mouseenter="highlightedIndex = index"
        >
          <span>{{ option.label }}</span>
          <svg
            v-if="option.value === modelValue"
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div v-if="filteredOptions.length === 0" class="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 text-center">
          No options found
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  modelValue?: string;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  maxMenuHeight?: number;
  class?: string;
}

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  options: () => [],
  placeholder: 'Select an option...',
  disabled: false,
  invalid: false,
  fullWidth: false,
  searchable: false,
  clearable: false,
  loading: false,
  maxMenuHeight: 200,
  class: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'change': [value: string];
}>();

const selectRef = ref<HTMLDivElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const isOpen = ref(false);
const searchTerm = ref('');
const highlightedIndex = ref(-1);

const selectedOption = computed(() => 
  props.options.find(option => option.value === props.modelValue)
);

const filteredOptions = computed(() => {
  if (!props.searchable || !searchTerm.value) {
    return props.options;
  }
  
  const term = searchTerm.value.toLowerCase();
  return props.options.filter(option => 
    option.label.toLowerCase().includes(term)
  );
});

const handleToggle = () => {
  if (props.disabled || props.loading) return;
  
  isOpen.value = !isOpen.value;
  
  if (isOpen.value && props.searchable) {
    nextTick(() => {
      searchInputRef.value?.focus();
    });
  }
};

const handleClear = () => {
  emit('update:modelValue', '');
  emit('change', '');
};

const handleOptionClick = (value: string) => {
  emit('update:modelValue', value);
  emit('change', value);
  isOpen.value = false;
  searchTerm.value = '';
  highlightedIndex.value = -1;
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (props.disabled || props.loading) return;
  
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      if (!isOpen.value) {
        isOpen.value = true;
      } else if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredOptions.value.length) {
        const option = filteredOptions.value[highlightedIndex.value];
        if (!option.disabled) {
          handleOptionClick(option.value);
        }
      }
      break;
    case 'Escape':
      event.preventDefault();
      if (isOpen.value) {
        isOpen.value = false;
        searchTerm.value = '';
        highlightedIndex.value = -1;
      }
      break;
    case 'ArrowDown':
      event.preventDefault();
      if (!isOpen.value) {
        isOpen.value = true;
      } else {
        highlightedIndex.value = Math.min(highlightedIndex.value + 1, filteredOptions.value.length - 1);
      }
      break;
    case 'ArrowUp':
      event.preventDefault();
      highlightedIndex.value = Math.max(highlightedIndex.value - 1, 0);
      break;
  }
};

// Click outside to close
const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
    searchTerm.value = '';
    highlightedIndex.value = -1;
  }
};

watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});

const triggerClasses = computed(() => {
  return [
    'flex h-11 w-full items-center justify-between rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900',
    'cursor-pointer transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
    'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
    'dark:bg-gray-700 dark:border-gray-600 dark:text-white',
    'dark:focus:ring-primary dark:focus:border-primary',
    'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
    props.invalid && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
    props.class,
  ].filter(Boolean).join(' ');
});

const menuClasses = computed(() => {
  return [
    'absolute z-50 w-full mt-2 rounded-lg border border-border bg-card shadow-lg overflow-hidden',
  ].join(' ');
});

const optionClasses = (option: SelectOption, index: number) => {
  return [
    'flex items-center justify-between px-3 py-2 text-sm cursor-pointer transition-colors',
    option.value === props.modelValue && 'bg-primary/10 text-primary font-medium',
    option.disabled && 'opacity-50 cursor-not-allowed',
    !option.disabled && option.value !== props.modelValue && 'hover:bg-muted',
    highlightedIndex.value === index && !option.disabled && 'bg-muted',
  ].filter(Boolean).join(' ');
};
</script>

