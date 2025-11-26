# @luisvelito/vue

Componentes Vue 3 del sistema de diseño Verve, construidos con TypeScript, Composition API y Tailwind CSS.

## 📦 Instalación

```bash
npm install @luisvelito/vue lucide-vue-next
```

## 🚀 Uso Básico

```vue
<script setup lang="ts">
import { Button, Input, Card } from '@luisvelito/vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>

<template>
  <Card title="Bienvenido">
    <Input v-model="inputValue" placeholder="Escribe algo..." />
    <Button variant="primary">Enviar</Button>
  </Card>
</template>
```

## 📚 Componentes

Ver documentación completa en [README principal](../../README.md)

## 🤝 Contribuir

Ver [Guía de Desarrollo](../../DEVELOPMENT.md)

## 📄 Licencia

MIT © Luis Velito
