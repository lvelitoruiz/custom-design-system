<template>
  <label 
    v-if="label"
    :for="id"
    :class="labelClasses"
  >
    <div class="relative inline-block">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="checked"
        @change="handleChange"
        :disabled="disabled"
        class="sr-only peer"
        role="switch"
        :aria-checked="checked"
        :aria-disabled="disabled"
        v-bind="$attrs"
      />
      <div :class="switchClasses">
        <span :class="thumbClasses" />
      </div>
    </div>
    <span class="text-sm select-none">
      {{ label }}
    </span>
  </label>
  <div v-else class="relative inline-block">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :checked="checked"
      @change="handleChange"
      :disabled="disabled"
      class="sr-only peer"
      role="switch"
      :aria-checked="checked"
      :aria-disabled="disabled"
      v-bind="$attrs"
    />
    <div :class="switchClasses">
      <span :class="thumbClasses" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
  inline?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  checked: false,
  disabled: false,
  inline: true,
  class: '',
});

const emit = defineEmits<{
  'update:checked': [value: boolean];
  'change': [value: boolean];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:checked', target.checked);
  emit('change', target.checked);
};

const labelClasses = computed(() => {
  return [
    props.inline ? 'inline-flex' : 'flex',
    'items-center gap-2',
    props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
  ].filter(Boolean).join(' ');
});

const switchClasses = computed(() => {
  return [
    'peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:cursor-not-allowed disabled:opacity-50',
    props.checked ? 'bg-primary' : 'bg-input',
    props.class,
  ].filter(Boolean).join(' ');
});

const thumbClasses = computed(() => {
  return [
    'pointer-events-none absolute left-0.5 inline-block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
    props.checked ? 'translate-x-5' : 'translate-x-0',
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

