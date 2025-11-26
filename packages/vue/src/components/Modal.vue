<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click="onClose"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title ? 'modal-title' : undefined"
    >
      <!-- Modal container -->
      <div
        @click.stop
        :class="modalClasses"
      >
        <!-- Header -->
        <div
          v-if="title || closeButton"
          class="px-6 py-4 border-b border-[hsl(var(--border))] flex items-center justify-between flex-shrink-0"
        >
          <h2
            v-if="title"
            id="modal-title"
            class="text-lg font-semibold text-[hsl(var(--foreground))]"
          >
            {{ title }}
          </h2>
          <button
            v-if="closeButton"
            type="button"
            @click="onClose"
            aria-label="Close modal"
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
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  open: boolean;
  title?: string;
  size?: ModalSize;
  closeButton?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'md',
  closeButton: true,
  class: '',
});

const emit = defineEmits<{
  'close': [];
}>();

const onClose = () => {
  emit('close');
};

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

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

const modalClasses = computed(() => {
  return [
    'w-full',
    sizeClasses[props.size],
    'max-h-[90vh]',
    'bg-[hsl(var(--card))]',
    'rounded-lg',
    'shadow-xl',
    'border border-[hsl(var(--border))]',
    'overflow-y-auto',
    'flex flex-col',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

