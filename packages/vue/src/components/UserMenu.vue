<template>
  <div ref="menuRef" :class="['relative', props.class]">
    <!-- Trigger Button -->
    <button
      type="button"
      @click="handleToggle"
      @keydown="handleKeyDown"
      role="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      :class="triggerClasses"
    >
      <!-- Avatar -->
      <div
        :class="avatarClasses"
        :style="{ backgroundImage: user.avatarSrc ? `url(${user.avatarSrc})` : undefined }"
      >
        <span v-if="!user.avatarSrc" class="text-sm font-medium">
          {{ getFallback }}
        </span>
      </div>

      <!-- User Info -->
      <div class="flex flex-col leading-tight text-left">
        <span class="text-sm font-medium text-[hsl(var(--foreground))]">
          {{ user.name }}
        </span>
        <span v-if="user.email" class="text-xs text-[hsl(var(--muted-foreground))]">
          {{ user.email }}
        </span>
      </div>

      <!-- Chevron -->
      <svg
        :class="chevronClasses"
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

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      role="menu"
      :class="menuClasses"
    >
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        @click="handleItemClick(item.value)"
        role="menuitem"
        :class="menuItemClasses"
      >
        <div v-if="item.icon" class="text-[hsl(var(--foreground))]">
          {{ item.icon }}
        </div>
        <span>{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export interface UserMenuItem {
  label: string;
  value: string;
  icon?: string;
}

export interface User {
  name: string;
  email?: string;
  avatarSrc?: string;
}

export interface UserMenuProps {
  user: User;
  items: UserMenuItem[];
  class?: string;
}

const props = withDefaults(defineProps<UserMenuProps>(), {
  class: '',
});

const emit = defineEmits<{
  'select': [value: string];
}>();

const menuRef = ref<HTMLDivElement | null>(null);
const isOpen = ref(false);

const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (value: string) => {
  emit('select', value);
  isOpen.value = false;
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleToggle();
  }
};

const getFallback = computed(() => props.user.name.substring(0, 2).toUpperCase());

// Handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

// Handle escape key
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false;
  }
};

watch(isOpen, (newValue) => {
  if (newValue) {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
  }
});

const triggerClasses = [
  'flex items-center gap-3',
  'px-3 py-2',
  'rounded-md',
  'hover:bg-[hsl(var(--muted))]',
  'cursor-pointer',
  'transition-colors duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
].join(' ');

const avatarClasses = [
  'w-10 h-10',
  'rounded-full',
  'bg-primary text-primary-foreground',
  'flex items-center justify-center',
  'bg-cover bg-center',
].join(' ');

const chevronClasses = computed(() => {
  return [
    'w-4 h-4 text-[hsl(var(--muted-foreground))]',
    'transition-transform duration-200',
    isOpen.value && 'rotate-180',
  ].filter(Boolean).join(' ');
});

const menuClasses = [
  'absolute mt-2 right-0',
  'bg-[hsl(var(--card))]',
  'border border-[hsl(var(--border))]',
  'shadow-lg',
  'rounded-md',
  'py-2',
  'min-w-[180px]',
  'z-50',
  'flex flex-col',
].join(' ');

const menuItemClasses = [
  'px-4 py-2.5',
  'flex items-center gap-3',
  'text-sm text-[hsl(var(--foreground))]',
  'hover:bg-[hsl(var(--muted))]',
  'transition-colors duration-200',
  'cursor-pointer',
  'text-left',
  'w-full',
].join(' ');
</script>

