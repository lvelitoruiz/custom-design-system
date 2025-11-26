<template>
  <div
    :class="['flex flex-row gap-1 border-b border-[hsl(var(--border))] overflow-x-auto', props.class]"
    role="tablist"
    aria-orientation="horizontal"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="tab.value"
      :ref="(el) => setTabRef(el as HTMLButtonElement, index)"
      role="tab"
      :aria-selected="isActive(tab.value)"
      :tabindex="isActive(tab.value) ? 0 : -1"
      @click="onChange(tab.value)"
      @keydown="(e) => handleKeyDown(e, index)"
      :class="getTabClasses(tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

export interface TabItem {
  label: string;
  value: string;
}

export interface TabsProps {
  tabs: TabItem[];
  value: string;
  fullWidth?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<TabsProps>(), {
  fullWidth: false,
  class: '',
});

const emit = defineEmits<{
  'change': [value: string];
}>();

const tabRefs = ref<(HTMLButtonElement | null)[]>([]);

const setTabRef = (el: HTMLButtonElement | null, index: number) => {
  tabRefs.value[index] = el;
};

const onChange = (value: string) => {
  emit('change', value);
};

const isActive = (value: string) => value === props.value;

const handleKeyDown = (e: KeyboardEvent, index: number) => {
  let newIndex = index;

  if (e.key === 'ArrowRight') {
    e.preventDefault();
    newIndex = index + 1 >= props.tabs.length ? 0 : index + 1;
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    newIndex = index - 1 < 0 ? props.tabs.length - 1 : index - 1;
  }

  if (newIndex !== index) {
    onChange(props.tabs[newIndex].value);
    tabRefs.value[newIndex]?.focus();
  }
};

const getTabClasses = (value: string) => {
  const active = isActive(value);
  return [
    'px-4 py-2 rounded-t-md text-sm font-medium whitespace-nowrap transition-all duration-200',
    'border-b-2 cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2',
    active && [
      'text-[hsl(var(--primary))]',
      'border-[hsl(var(--primary))]',
      'opacity-100'
    ],
    !active && [
      'text-[hsl(var(--muted-foreground))]',
      'border-transparent',
      'hover:text-[hsl(var(--foreground))]'
    ],
    props.fullWidth && 'flex-1 text-center'
  ].flat().filter(Boolean).join(' ');
};
</script>

