<template>
  <label 
    v-if="label"
    :class="labelClasses"
    :for="checkboxId"
  >
    <div class="relative">
      <input
        :ref="(el) => inputRef = el as HTMLInputElement"
        type="checkbox"
        :id="checkboxId"
        :name="name"
        :value="value"
        :checked="modelValue || checked"
        @change="handleChange"
        :disabled="disabled"
        class="sr-only peer"
        role="checkbox"
        :aria-checked="indeterminate ? 'mixed' : (modelValue || checked)"
        :aria-disabled="disabled"
        :aria-invalid="invalid"
        v-bind="$attrs"
      />
      <div :class="checkboxClasses">
        <svg
          v-if="isIndeterminate"
          class="h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <svg
          v-else-if="isChecked && !isIndeterminate"
          class="h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
    <span :class="labelTextClasses">
      {{ label }}
    </span>
  </label>
  <div v-else class="relative">
    <input
      :ref="(el) => inputRef = el as HTMLInputElement"
      type="checkbox"
      :id="checkboxId"
      :name="name"
      :value="value"
      :checked="modelValue || checked"
      @change="handleChange"
      :disabled="disabled"
      class="sr-only peer"
      role="checkbox"
      :aria-checked="indeterminate ? 'mixed' : (modelValue || checked)"
      :aria-disabled="disabled"
      :aria-invalid="invalid"
      v-bind="$attrs"
    />
    <div :class="checkboxClasses">
      <svg
        v-if="isIndeterminate"
        class="h-3 w-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <svg
        v-else-if="isChecked && !isIndeterminate"
        class="h-3 w-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export interface CheckboxProps {
  modelValue?: boolean;
  checked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: string;
  name?: string;
  id?: string;
  inline?: boolean;
  indeterminate?: boolean;
  value?: string;
  class?: string;
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  checked: false,
  disabled: false,
  invalid: false,
  inline: false,
  indeterminate: false,
  class: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'update:checked': [value: boolean];
  'change': [value: boolean];
}>();

const inputRef = ref<HTMLInputElement | null>(null);

// Generate unique ID
const checkboxId = computed(() => {
  if (props.id) return props.id;
  if (props.name && props.value) return `${props.name}-${props.value}`;
  if (props.name) return props.name;
  return `checkbox-${Math.random().toString(36).substr(2, 9)}`;
});

// Handle indeterminate state
watch(() => props.indeterminate, (newValue) => {
  if (inputRef.value) {
    inputRef.value.indeterminate = newValue;
  }
}, { immediate: true });

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
  emit('update:checked', target.checked);
  emit('change', target.checked);
};

const isChecked = computed(() => (props.modelValue || props.checked) && !props.indeterminate);
const isIndeterminate = computed(() => props.indeterminate);

const labelClasses = computed(() => {
  return [
    props.inline ? 'inline-flex' : 'flex',
    'items-center gap-2',
    props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
  ].filter(Boolean).join(' ');
});

const checkboxClasses = computed(() => {
  return [
    'h-4 w-4 shrink-0 rounded border transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'flex items-center justify-center cursor-pointer',
    (isChecked.value || isIndeterminate.value) 
      ? 'bg-primary border-primary text-white dark:bg-primary dark:border-primary' 
      : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
    props.invalid && !(props.modelValue || props.checked) && 'border-red-500 dark:border-red-500',
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

