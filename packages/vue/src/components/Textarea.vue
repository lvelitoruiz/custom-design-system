<template>
  <textarea
    :ref="(el) => textareaRef = el as HTMLTextAreaElement"
    :value="modelValue"
    :rows="autoResize ? minRows : rows"
    :disabled="disabled"
    :class="textareaClasses"
    :aria-invalid="showError"
    :aria-disabled="disabled"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';

export interface TextareaProps {
  modelValue?: string;
  error?: string;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  rows?: number;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  resizable?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<TextareaProps>(), {
  modelValue: '',
  disabled: false,
  invalid: false,
  fullWidth: false,
  rows: 4,
  autoResize: false,
  minRows: 2,
  resizable: true,
  class: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
  
  if (props.autoResize) {
    resizeTextarea();
  }
};

const resizeTextarea = () => {
  if (!textareaRef.value || !props.autoResize) return;
  
  const textarea = textareaRef.value;
  
  // Reset height to recalculate
  textarea.style.height = 'auto';
  
  // Calculate new height
  const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
  const minHeight = props.minRows * lineHeight;
  const maxHeight = props.maxRows ? props.maxRows * lineHeight : Infinity;
  
  let newHeight = textarea.scrollHeight;
  newHeight = Math.max(minHeight, newHeight);
  newHeight = Math.min(maxHeight, newHeight);
  
  textarea.style.height = `${newHeight}px`;
};

// Watch for value changes to resize
watch(() => props.modelValue, () => {
  if (props.autoResize) {
    nextTick(() => {
      resizeTextarea();
    });
  }
});

const showError = computed(() => !!(props.error || props.invalid));

const textareaClasses = computed(() => {
  return [
    'flex w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900',
    'placeholder:text-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
    'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
    'dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400',
    'dark:focus:ring-primary dark:focus:border-primary',
    'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
    'transition-colors',
    !props.autoResize && 'min-h-[120px]',
    props.autoResize && 'overflow-hidden',
    !props.resizable && 'resize-none',
    props.resizable && !props.autoResize && 'resize-y',
    showError.value && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

