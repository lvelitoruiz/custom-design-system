<template>
  <Teleport to="body">
    <!-- Overlay -->
    <div
      :class="overlayClasses"
      @click="onClose"
      aria-hidden="true"
    />

    <!-- Drawer panel -->
    <div
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title ? 'drawer-title' : undefined"
      :class="drawerClasses"
    >
      <!-- Header -->
      <div
        v-if="title || closeButton"
        class="px-6 py-4 border-b border-[hsl(var(--border))] flex items-center justify-between flex-shrink-0"
      >
        <h2
          v-if="title"
          id="drawer-title"
          class="text-lg font-semibold text-[hsl(var(--foreground))]"
        >
          {{ title }}
        </h2>
        <button
          v-if="closeButton"
          type="button"
          @click="onClose"
          aria-label="Close drawer"
          :class="[
            'p-2 rounded-md',
            'hover:bg-[hsl(var(--accent))]',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
            !title && 'ml-auto'
          ]"
        >
          <svg
            class="w-5 h-5"
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

      <!-- Body -->
      <div class="px-6 py-4 text-[hsl(var(--foreground))] flex-1 overflow-y-auto">
        <slot />
      </div>

      <!-- Footer -->
      <div
        v-if="$slots.footer"
        class="px-6 py-4 border-t border-[hsl(var(--border))] flex justify-end gap-2 flex-shrink-0"
      >
        <slot name="footer" />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg';

export interface DrawerProps {
  open: boolean;
  title?: string;
  position?: DrawerPosition;
  size?: DrawerSize;
  closeButton?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<DrawerProps>(), {
  position: 'right',
  size: 'md',
  closeButton: true,
  class: '',
});

const emit = defineEmits<{
  'close': [];
}>();

const isAnimated = ref(false);

const onClose = () => {
  emit('close');
};

// Trigger animation after mount
watch(() => props.open, (newOpen) => {
  if (newOpen) {
    const timer = setTimeout(() => {
      isAnimated.value = true;
    }, 10);
    return () => clearTimeout(timer);
  } else {
    isAnimated.value = false;
  }
});

// Handle escape key
watch(() => props.open, (newOpen) => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && newOpen) {
      onClose();
    }
  };

  if (newOpen) {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }
});

const sizeClasses: Record<DrawerSize, string> = {
  sm: 'w-64',
  md: 'w-80',
  lg: 'w-[28rem]',
};

const positionClasses: Record<DrawerPosition, string> = {
  right: `right-0 top-0 h-screen ${sizeClasses[props.size]} transition-transform duration-300`,
  left: `left-0 top-0 h-screen ${sizeClasses[props.size]} transition-transform duration-300`,
  top: 'top-0 left-0 w-full max-h-[50vh] transition-transform duration-300',
  bottom: 'bottom-0 left-0 w-full max-h-[50vh] transition-transform duration-300',
};

const overlayClasses = computed(() => {
  return [
    'fixed inset-0 bg-black/40 backdrop-blur-sm z-40',
    'transition-opacity duration-300',
    props.open ? 'opacity-100' : 'opacity-0 pointer-events-none',
  ].join(' ');
});

const drawerClasses = computed(() => {
  const translateClass = isAnimated.value ? 'translate-x-0 translate-y-0' : (
    props.position === 'right' ? 'translate-x-full' :
    props.position === 'left' ? '-translate-x-full' :
    props.position === 'top' ? '-translate-y-full' :
    'translate-y-full'
  );

  return [
    'fixed z-50',
    'bg-[hsl(var(--card))]',
    'shadow-xl',
    'border border-[hsl(var(--border))]',
    'overflow-y-auto',
    'flex flex-col',
    positionClasses[props.position],
    translateClass,
    !props.open && 'pointer-events-none',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

