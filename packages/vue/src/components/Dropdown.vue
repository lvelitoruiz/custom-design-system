<template>
  <div :class="['relative inline-block', props.class]" ref="dropdownRef">
    <div 
      @click="handleToggle"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
    >
      <slot name="trigger" />
    </div>
    
    <div
      v-if="isOpen"
      :class="menuClasses"
      role="menu"
    >
      <div
        v-for="item in items"
        :key="item.value"
        :class="itemClasses"
        role="menuitem"
        @click="handleSelect(item.value)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  align?: 'left' | 'right';
  disabled?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<DropdownProps>(), {
  align: 'left',
  disabled: false,
  class: '',
});

const emit = defineEmits<{
  'select': [value: string];
}>();

const dropdownRef = ref<HTMLDivElement | null>(null);
const isOpen = ref(false);

const handleToggle = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const handleSelect = (value: string) => {
  emit('select', value);
  isOpen.value = false;
};

// Close if disabled changes to true
watch(() => props.disabled, (newValue) => {
  if (newValue) {
    isOpen.value = false;
  }
});

// Click outside to close
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});

const menuClasses = computed(() => {
  return [
    'absolute mt-2 z-50',
    'bg-[hsl(var(--background))] border border-[hsl(var(--border))]',
    'rounded-lg shadow-md',
    'py-1 min-w-[160px]',
    'transition-colors duration-200',
    props.align === 'left' ? 'left-0' : 'right-0',
  ].join(' ');
});

const itemClasses = computed(() => {
  return [
    'px-3 py-2 text-sm cursor-pointer',
    'text-[hsl(var(--foreground))]',
    'hover:bg-[hsl(var(--accent))]',
    'transition-colors duration-150',
  ].join(' ');
});
</script>

