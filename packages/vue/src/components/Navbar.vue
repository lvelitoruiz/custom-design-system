<template>
  <nav
    role="navigation"
    aria-label="Main navigation"
    :class="navClasses"
  >
    <!-- Main navbar container -->
    <div
      :class="[
        'w-full h-16',
        'px-4 md:px-6',
        'flex items-center justify-between',
        'bg-[hsl(var(--card))]',
        'border-b border-[hsl(var(--border))]',
        'transition-colors duration-200'
      ]"
    >
      <!-- Logo -->
      <div v-if="$slots.logo" class="flex items-center gap-2 text-lg font-semibold text-[hsl(var(--foreground))]">
        <slot name="logo" />
      </div>

      <!-- Desktop Links -->
      <div v-if="links.length > 0" class="hidden md:flex gap-x-6 flex-1 justify-center">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.href"
          :class="[
            'text-sm font-medium',
            'text-[hsl(var(--foreground))]',
            'hover:text-[hsl(var(--primary))]',
            'transition-colors duration-200'
          ]"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right content -->
      <div class="flex items-center gap-4">
        <div v-if="$slots.rightContent" class="hidden md:flex items-center">
          <slot name="rightContent" />
        </div>

        <!-- Mobile menu button -->
        <button
          v-if="links.length > 0"
          type="button"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle menu"
          :class="[
            'flex md:hidden',
            'p-2',
            'rounded-md',
            'hover:bg-[hsl(var(--accent))]',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]'
          ]"
        >
          <svg
            v-if="mobileMenuOpen"
            class="w-6 h-6"
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
          <svg
            v-else
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen && links.length > 0"
      :class="[
        'md:hidden',
        'flex flex-col',
        'gap-2',
        'p-4',
        'bg-[hsl(var(--card))]',
        'border-b border-[hsl(var(--border))]'
      ]"
    >
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        @click="closeMobileMenu"
        :class="[
          'px-3 py-2',
          'text-sm font-medium',
          'text-[hsl(var(--foreground))]',
          'hover:text-[hsl(var(--primary))]',
          'hover:bg-[hsl(var(--accent))]',
          'rounded-md',
          'transition-colors duration-200'
        ]"
      >
        {{ link.label }}
      </a>
      
      <div
        v-if="$slots.rightContent"
        class="mt-2 pt-2 border-t border-[hsl(var(--border))]"
      >
        <slot name="rightContent" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
  sticky?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<NavbarProps>(), {
  links: () => [],
  sticky: true,
  class: '',
});

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const navClasses = computed(() => {
  return [
    'w-full',
    props.sticky && 'sticky top-0 z-50',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

