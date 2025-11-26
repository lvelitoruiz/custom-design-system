<template>
  <aside
    role="navigation"
    aria-label="Sidebar"
    :class="sidebarClasses"
  >
    <!-- Header -->
    <div
      v-if="$slots['header']"
      :class="[
        'px-4 py-3',
        'border-b border-[hsl(var(--border))]',
        'flex items-center',
        collapsed ? 'justify-center' : 'justify-start'
      ]"
    >
      <slot name="header" />
    </div>

    <!-- Items list -->
    <nav class="flex flex-col gap-1 mt-2 flex-1 overflow-y-auto px-2">
      <component
        v-for="item in items"
        :key="item.id"
        :is="item.href ? 'a' : 'button'"
        :href="item.href"
        :type="item.href ? undefined : 'button'"
        :role="item.href ? 'link' : 'button'"
        :class="getItemClasses(item)"
      >
        <!-- Icon -->
        <span v-if="item.icon" class="flex-shrink-0 flex items-center justify-center" v-html="item.icon"></span>

        <!-- Label -->
        <span v-if="!collapsed" class="text-sm font-medium truncate">
          {{ item.label }}
        </span>
      </component>
    </nav>

    <!-- Footer -->
    <div
      v-if="$slots['footer']"
      :class="[
        'px-4 py-3',
        'border-t border-[hsl(var(--border))]',
        'flex items-center',
        collapsed ? 'justify-center' : 'justify-start'
      ]"
    >
      <slot name="footer" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  active?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  collapsed?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsed: false,
  class: '',
});

const sidebarClasses = computed(() => {
  return [
    'flex flex-col',
    'bg-[hsl(var(--card))]',
    'border-r border-[hsl(var(--border))]',
    'h-full',
    'transition-all duration-300',
    'overflow-hidden',
    props.collapsed ? 'w-20' : 'w-60',
    props.class,
  ].filter(Boolean).join(' ');
});

const getItemClasses = (item: SidebarItem) => {
  return [
    'flex items-center gap-3',
    'px-4 py-2.5',
    'rounded-md',
    'transition-colors duration-200',
    'cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
    'text-left',
    props.collapsed && 'justify-center',
    item.active
      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
      : 'text-[hsl(var(--foreground))] hover:bg-muted',
  ].filter(Boolean).join(' ');
};
</script>

