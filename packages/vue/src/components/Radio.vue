<template>
  <label 
    v-if="label"
    :class="labelClasses"
    :for="radioId"
  >
    <div class="relative">
      <input
        type="radio"
        :id="radioId"
        :name="name"
        :value="value"
        :checked="checked"
        @change="handleChange"
        :disabled="disabled"
        class="sr-only peer"
        role="radio"
        :aria-checked="checked"
        :aria-disabled="disabled"
        :aria-invalid="invalid"
        v-bind="$attrs"
      />
      <div :class="radioClasses">
        <svg
          v-if="checked"
          class="h-2.5 w-2.5 fill-current text-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="12"/>
        </svg>
      </div>
    </div>
    <span :class="labelTextClasses">
      {{ label }}
    </span>
  </label>
  <div v-else class="relative">
    <input
      type="radio"
      :id="radioId"
      :name="name"
      :value="value"
      :checked="checked"
      @change="handleChange"
      :disabled="disabled"
      class="sr-only peer"
      role="radio"
      :aria-checked="checked"
      :aria-disabled="disabled"
      :aria-invalid="invalid"
      v-bind="$attrs"
    />
    <div :class="radioClasses">
      <svg
        v-if="checked"
        class="h-2.5 w-2.5 fill-current text-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  name?: string;
  id?: string;
  value?: string;
  inline?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<RadioProps>(), {
  checked: false,
  disabled: false,
  invalid: false,
  inline: false,
  class: '',
});

const emit = defineEmits<{
  'update:checked': [value: boolean];
  'change': [value: boolean];
}>();

const radioId = computed(() => {
  if (props.id) return props.id;
  if (props.name && props.value) return `${props.name}-${props.value}`;
  return `radio-${Math.random().toString(36).substr(2, 9)}`;
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:checked', target.checked);
  emit('change', target.checked);
};

const labelClasses = computed(() => {
  return [
    props.inline ? 'inline-flex' : 'flex',
    'items-center gap-2',
    props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
  ].filter(Boolean).join(' ');
});

const radioClasses = computed(() => {
  return [
    'aspect-square h-4 w-4 rounded-full border ring-offset-background',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'flex items-center justify-center cursor-pointer',
    'dark:border-gray-600 dark:bg-gray-700',
    props.checked
      ? 'border-primary bg-white text-primary dark:bg-gray-700'
      : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
    props.invalid && !props.checked && 'border-destructive',
    props.class,
  ].filter(Boolean).join(' ');
});

const labelTextClasses = computed(() => {
  return [
    'text-sm select-none',
    props.disabled && 'opacity-50',
  ].filter(Boolean).join(' ');
});
</script>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>

