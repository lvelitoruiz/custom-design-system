<template>
  <input
    type="range"
    :id="id"
    :name="name"
    :value="value"
    @input="handleChange"
    :min="min"
    :max="max"
    :step="step"
    :disabled="disabled"
    role="slider"
    :aria-valuenow="value"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-disabled="disabled"
    :class="sliderClasses"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  name?: string;
  id?: string;
  class?: string;
}

const props = withDefaults(defineProps<SliderProps>(), {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  fullWidth: true,
  class: '',
});

const emit = defineEmits<{
  'update:value': [value: number];
  'change': [value: number];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue = Number(target.value);
  emit('update:value', newValue);
  emit('change', newValue);
};

const sliderClasses = computed(() => {
  return [
    'h-1.5 bg-input rounded-full appearance-none transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200',
    '[&::-webkit-slider-thumb]:hover:scale-105 [&::-webkit-slider-thumb]:hover:shadow-md',
    '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb]:duration-200',
    '[&::-moz-range-thumb]:hover:scale-105 [&::-moz-range-thumb]:hover:shadow-md',
    props.disabled 
      ? 'opacity-60 cursor-not-allowed [&::-webkit-slider-thumb]:cursor-not-allowed [&::-moz-range-thumb]:cursor-not-allowed' 
      : 'cursor-pointer [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:cursor-pointer',
    props.fullWidth ? 'w-full' : 'w-auto',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

