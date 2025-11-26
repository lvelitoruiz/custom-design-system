<template>
  <div
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @click="handleClick"
    @keydown="handleKeyDown"
    :class="itemClasses"
  >
    <div v-if="$slots.leftIcon" class="flex-shrink-0 mr-3 flex items-center justify-center">
      <slot name="leftIcon" />
    </div>
    
    <div class="flex-1 flex flex-col gap-y-0.5 min-w-0">
      <span :class="titleClasses">
        {{ title }}
      </span>
      <span v-if="description" :class="descriptionClasses">
        {{ description }}
      </span>
    </div>
    
    <div v-if="$slots.rightIcon" class="flex-shrink-0 ml-3 flex items-center justify-center">
      <slot name="rightIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ListItemProps {
  title: string;
  description?: string;
  clickable?: boolean;
  active?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<ListItemProps>(), {
  clickable: false,
  active: false,
  class: '',
});

const emit = defineEmits<{
  'click': [];
}>();

const handleKeyDown = (e: KeyboardEvent) => {
  if (props.clickable && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    emit('click');
  }
};

const handleClick = () => {
  if (props.clickable) {
    emit('click');
  }
};

const itemClasses = computed(() => {
  return [
    'w-full flex items-center',
    'px-4 py-3',
    'rounded-lg',
    'transition-all duration-200',
    props.active
      ? 'bg-primary text-primary-foreground'
      : 'bg-[hsl(var(--card))]',
    props.clickable && [
      'cursor-pointer',
      props.active 
        ? 'hover:bg-primary/90'
        : 'hover:bg-muted active:bg-muted/80',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2'
    ],
    !props.clickable && 'cursor-default',
    props.class,
  ].flat().filter(Boolean).join(' ');
});

const titleClasses = computed(() => {
  return [
    'text-sm font-medium',
    props.active ? 'text-primary-foreground' : 'text-[hsl(var(--foreground))]',
  ].join(' ');
});

const descriptionClasses = computed(() => {
  return [
    'text-sm',
    props.active ? 'text-primary-foreground/80' : 'text-[hsl(var(--muted-foreground))]',
  ].join(' ');
});
</script>

