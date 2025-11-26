<template>
  <div :class="['flex flex-col gap-y-1.5', props.class]">
    <label
      v-if="label"
      :for="id"
      class="text-sm font-medium text-foreground"
    >
      {{ label }}
      <span v-if="required" class="text-destructive ml-1" aria-label="required">
        *
      </span>
    </label>
    
    <slot />
    
    <p
      v-if="error"
      :id="errorId"
      class="text-xs text-destructive mt-1"
      role="alert"
    >
      {{ error }}
    </p>
    
    <p
      v-if="!error && hint"
      :id="hintId"
      class="text-xs text-muted-foreground mt-1"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  id?: string;
  class?: string;
}

const props = withDefaults(defineProps<FormFieldProps>(), {
  required: false,
  class: '',
});

const errorId = computed(() => props.id ? `${props.id}-error` : undefined);
const hintId = computed(() => props.id ? `${props.id}-hint` : undefined);
</script>

