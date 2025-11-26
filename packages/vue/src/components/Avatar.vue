<template>
  <div
    role="img"
    :aria-label="alt"
    :class="avatarClasses"
  >
    <img
      v-if="showImage"
      :src="src"
      :alt="alt"
      @error="handleImageError"
      class="w-full h-full object-cover"
    />
    <span
      v-else-if="showFallback"
      class="select-none uppercase"
      aria-label="Avatar placeholder"
    >
      {{ fallback }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { AvatarSize } from './types';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  rounded?: boolean;
  fallback?: string;
  class?: string;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  alt: 'Avatar',
  size: 'md',
  rounded: true,
  class: '',
});

const imageError = ref(false);

const avatarSizes: Record<AvatarSize, string> = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-xl',
};

const showImage = computed(() => props.src && !imageError.value);
const showFallback = computed(() => !showImage.value && props.fallback);

const handleImageError = () => {
  imageError.value = true;
};

const avatarClasses = computed(() => {
  return [
    'inline-flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground font-semibold transition-colors border border-border/50',
    avatarSizes[props.size],
    props.rounded ? 'rounded-full' : 'rounded-md',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

