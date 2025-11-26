<template>
  <div :class="[fullWidth ? 'w-full' : 'inline-flex w-full flex-col']">
    <div :class="['relative', fullWidth ? 'w-full' : 'w-full']">
      <!-- Left Icon -->
      <span
        v-if="$slots['leftIcon']"
        class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-500 dark:text-gray-400 pointer-events-none z-10"
        aria-hidden="true"
      >
        <slot name="leftIcon" />
      </span>
      
      <!-- Input Element -->
      <input
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled || loading"
        :class="inputClasses"
        :aria-invalid="showError"
        :aria-disabled="disabled"
        :aria-describedby="hasValidationError ? `${inputId}-error` : undefined"
        role="textbox"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        v-bind="$attrs"
      />
      
      <!-- Right Icons Container -->
      <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
        <!-- Loading Spinner -->
        <svg
          v-if="loading"
          class="w-4 h-4 text-gray-500 dark:text-gray-400 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        
        <!-- Clear Button -->
        <button
          v-if="clearable && modelValue && !loading"
          type="button"
          @click="handleClear"
          class="flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          aria-label="Clear input"
          tabindex="-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <!-- Right Icon -->
        <span
          v-if="$slots['rightIcon']"
          class="flex items-center justify-center text-gray-500 dark:text-gray-400 pointer-events-none"
          aria-hidden="true"
        >
          <slot name="rightIcon" />
        </span>
      </div>
    </div>
    
    <!-- Error Message -->
    <div
      v-if="hasValidationError || error"
      :id="`${inputId}-error`"
      class="mt-1 text-xs text-red-500 dark:text-red-400"
      role="alert"
      aria-live="polite"
    >
      {{ error || validationErrors[0] }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { ValidationRule } from './types';

export interface InputProps {
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  error?: string;
  loading?: boolean;
  validation?: ValidationRule[];
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  clearable?: boolean;
  debounceMs?: number;
  id?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  invalid: false,
  fullWidth: false,
  loading: false,
  validation: () => [],
  validateOnChange: false,
  validateOnBlur: true,
  clearable: false,
  debounceMs: 0,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'validationChange': [isValid: boolean, errors: string[]];
  'blur': [event: FocusEvent];
  'focus': [event: FocusEvent];
}>();

const isFocused = ref(false);
const hasBeenValidated = ref(false);
const validationErrors = ref<string[]>([]);
const debounceTimer = ref<number | null>(null);
const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);

// Validation function
const validate = () => {
  if (!props.validation || props.validation.length === 0) {
    return true;
  }

  const value = String(props.modelValue || '');
  const errors: string[] = [];

  for (const rule of props.validation) {
    let isValid = true;

    switch (rule.type) {
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'url':
        try {
          new URL(value);
          isValid = true;
        } catch {
          isValid = false;
        }
        break;
      case 'number':
        isValid = !isNaN(Number(value));
        break;
      case 'phone':
        isValid = /^[\d\s\-\+\(\)]+$/.test(value) && value.replace(/\D/g, '').length >= 10;
        break;
      case 'custom':
        if (rule.pattern) {
          isValid = rule.pattern.test(value);
        } else if (rule.validator) {
          isValid = rule.validator(value);
        }
        break;
    }

    if (!isValid) {
      errors.push(rule.message);
    }
  }

  validationErrors.value = errors;
  hasBeenValidated.value = true;
  
  const isValid = errors.length === 0;
  emit('validationChange', isValid, errors);
  
  return isValid;
};

// Watch for value changes if validateOnChange is true
watch(() => props.modelValue, () => {
  if (props.validateOnChange && hasBeenValidated.value) {
    if (debounceTimer.value) {
      clearTimeout(debounceTimer.value);
    }
    
    if (props.debounceMs > 0) {
      debounceTimer.value = window.setTimeout(() => {
        validate();
      }, props.debounceMs);
    } else {
      validate();
    }
  }
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false;
  if (props.validateOnBlur) {
    validate();
  }
  emit('blur', event);
};

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true;
  emit('focus', event);
};

const handleClear = () => {
  emit('update:modelValue', '');
};

const hasValidationError = computed(() => {
  return hasBeenValidated.value && validationErrors.value.length > 0;
});

const showError = computed(() => {
  return !!(props.error || props.invalid || hasValidationError.value);
});

// Calculate padding based on icons
const slots = defineSlots<{
  leftIcon?: any;
  rightIcon?: any;
}>();

const paddingLeft = computed(() => {
  return slots.leftIcon ? 'pl-10' : 'pl-4';
});

const paddingRight = computed(() => {
  const hasRightIcon = !!slots.rightIcon;
  const hasClearable = props.clearable && props.modelValue;
  const iconCount = [hasRightIcon, props.loading, hasClearable].filter(Boolean).length;
  
  if (iconCount === 0) return 'pr-4';
  if (iconCount === 1) return 'pr-10';
  if (iconCount === 2) return 'pr-16';
  return 'pr-20';
});

const inputClasses = computed(() => {
  return [
    'flex h-11 w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 text-sm text-gray-900',
    'placeholder:text-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
    'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-200',
    'dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-400',
    'dark:focus:ring-primary dark:focus:border-primary',
    'dark:disabled:bg-gray-600 dark:disabled:text-gray-400 dark:disabled:border-gray-600',
    'transition-colors',
    showError.value && 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-500',
    paddingLeft.value,
    paddingRight.value,
  ].filter(Boolean).join(' ');
});
</script>

