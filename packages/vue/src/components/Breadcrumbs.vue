<template>
  <nav 
    :class="['flex items-center gap-x-1.5 text-sm', props.class]"
    role="navigation"
    aria-label="Breadcrumb"
  >
    <template v-for="(item, index) in items" :key="index">
      <span v-if="isLast(index)" class="font-medium text-[hsl(var(--foreground))]">
        {{ item.label }}
      </span>
      <a
        v-else-if="item.href"
        :href="item.href"
        class="inline-flex items-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
      >
        {{ item.label }}
      </a>
      <span v-else class="inline-flex items-center text-[hsl(var(--muted-foreground))]">
        {{ item.label }}
      </span>
      
      <span
        v-if="!isLast(index)"
        class="flex-shrink-0 text-[hsl(var(--muted-foreground))]"
      >
        <slot name="separator">
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
        </slot>
      </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  class?: string;
}

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  class: '',
});

const isLast = (index: number) => index === props.items.length - 1;
</script>

