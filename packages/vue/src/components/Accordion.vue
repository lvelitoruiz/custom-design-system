<template>
  <div :class="['w-full flex flex-col divide-y divide-[hsl(var(--border))]', props.class]">
    <div v-for="item in items" :key="item.id" class="flex flex-col">
      <!-- Title row -->
      <button
        role="button"
        :aria-expanded="isOpen(item.id)"
        :aria-controls="`accordion-panel-${item.id}`"
        @click="toggleItem(item.id)"
        @keydown="(e) => handleKeyDown(e, item.id)"
        :class="buttonClasses"
      >
        <span>{{ item.title }}</span>
        <svg
          :class="['w-[18px] h-[18px] transition-transform duration-200', isOpen(item.id) && 'rotate-180']"
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
      </button>

      <!-- Content panel -->
      <div
        :id="`accordion-panel-${item.id}`"
        role="region"
        :aria-hidden="!isOpen(item.id)"
        :class="contentClasses(item.id)"
      >
        <div class="px-4 py-3 text-sm text-[hsl(var(--foreground))] bg-muted/30">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
  class?: string;
}

const props = withDefaults(defineProps<AccordionProps>(), {
  multiple: false,
  defaultOpen: () => [],
  class: '',
});

const openItems = ref<string[]>(props.defaultOpen);

const isOpen = (id: string) => openItems.value.includes(id);

const toggleItem = (id: string) => {
  if (props.multiple) {
    openItems.value = isOpen(id)
      ? openItems.value.filter(itemId => itemId !== id)
      : [...openItems.value, id];
  } else {
    openItems.value = isOpen(id) ? [] : [id];
  }
};

const handleKeyDown = (e: KeyboardEvent, id: string) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleItem(id);
  }
};

const buttonClasses = [
  'w-full flex justify-between items-center',
  'px-4 py-3',
  'cursor-pointer',
  'font-medium text-foreground',
  'bg-card hover:bg-muted/50',
  'transition-colors duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
].join(' ');

const contentClasses = (id: string) => {
  return [
    'overflow-hidden transition-all duration-200',
    isOpen(id) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
  ].join(' ');
};
</script>

