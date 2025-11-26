# Guía de Desarrollo

Esta guía explica cómo desarrollar y contribuir al sistema de diseño.

## 🛠️ Configuración del Entorno

### 1. Prerequisitos

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Git**: Para control de versiones

### 2. Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd design-system

# Instalar dependencias
npm install
```

## 📦 Estructura del Monorepo

Este proyecto usa **Nx** como herramienta de monorepo:

```
design-system/
├── packages/          # Librerías publicables
│   ├── react/        # @luisvelito/react
│   ├── vue/          # @luisvelito/vue
│   ├── angular/      # @luisvelito/angular
│   ├── tokens/       # @luisvelito/tokens
│   └── utils/        # @luisvelito/utils
├── apps/             # Aplicaciones demo
│   ├── react-demo/
│   ├── vue-demo/
│   └── angular-demo/
└── dist/             # Output de builds
```

## 🔨 Comandos Principales

### Compilar Paquetes

```bash
# Compilar todos los paquetes
npm run build

# Compilar un paquete específico
nx build react
nx build vue
nx build angular
nx build tokens
nx build utils
```

### Ejecutar Demos

```bash
# React demo (puerto 4200)
npm run serve:react
# o
nx serve react-demo

# Vue demo (puerto 4201)
npm run serve:vue
# o
nx serve vue-demo

# Angular demo (puerto 4202)
npm run serve:angular
# o
nx serve angular-demo
```

### Linting y Formateo

```bash
# Lint todos los proyectos
nx run-many --target=lint --all

# Lint un proyecto específico
nx lint react
nx lint vue
nx lint angular

# Auto-fix de linting
nx lint react --fix
```

### Testing

```bash
# Ejecutar tests
nx test react
nx test vue
nx test angular

# Tests con coverage
nx test react --coverage
```

## 🎨 Crear un Nuevo Componente

### React

```bash
# En packages/react/src/components/atoms/
```

```tsx
// MyComponent.tsx
import React from 'react';
import { MyComponentProps } from './types';
import { cn } from '../../../lib/utils';

export const MyComponent: React.FC<MyComponentProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'base-classes',
        variant === 'primary' && 'primary-classes',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// types.ts
export interface MyComponentProps {
  variant?: 'default' | 'primary';
  className?: string;
  children?: React.ReactNode;
}

// index.ts (exportar)
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './types';
```

### Vue

```bash
# En packages/vue/src/components/
```

```vue
<!-- MyComponent.vue -->
<template>
  <div :class="componentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface MyComponentProps {
  variant?: 'default' | 'primary';
  class?: string;
}

const props = withDefaults(defineProps<MyComponentProps>(), {
  variant: 'default',
  class: '',
});

const componentClasses = computed(() => {
  return [
    'base-classes',
    props.variant === 'primary' && 'primary-classes',
    props.class,
  ].filter(Boolean).join(' ');
});
</script>

<!-- types.ts -->
// Exportar tipos en types.ts

<!-- index.ts -->
export { default as MyComponent } from './MyComponent.vue';
export type { MyComponentProps } from './types';
```

### Angular

```bash
# En packages/angular/src/lib/components/atoms/
```

```typescript
// my-component.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-my-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="componentClasses">
      <ng-content></ng-content>
    </div>
  `,
})
export class MyComponentComponent {
  @Input() variant: 'default' | 'primary' = 'default';

  get componentClasses(): string {
    return [
      'base-classes',
      this.variant === 'primary' && 'primary-classes',
    ].filter(Boolean).join(' ');
  }
}

// public-api.ts (exportar)
export * from './my-component/my-component.component';
```

## 🎯 Convenciones de Código

### Naming

- **Componentes React**: PascalCase (`Button`, `InputGroup`)
- **Componentes Vue**: PascalCase en archivos `.vue`
- **Componentes Angular**: kebab-case con prefijo `ds-` (`ds-button`, `ds-input-group`)
- **Props/Inputs**: camelCase
- **CSS Classes**: kebab-case con Tailwind

### TypeScript

- Siempre tipar props/inputs
- Exportar interfaces públicas
- Usar `type` para uniones, `interface` para objetos

### Estilos

- Usar Tailwind CSS utilities
- Usar design tokens para colores: `bg-primary`, `text-foreground`
- Variables CSS: `hsl(var(--primary))`
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)

### Accesibilidad

- Incluir ARIA attributes apropiados
- Soporte para navegación por teclado
- Usar roles semánticos
- Labels descriptivos

## 🔄 Workflow de Desarrollo

### 1. Crear una rama

```bash
git checkout -b feature/mi-nueva-caracteristica
```

### 2. Desarrollar

```bash
# Iniciar demo en modo watch
nx serve react-demo

# En otra terminal, rebuild en watch
nx build react --watch
```

### 3. Testing

```bash
# Verificar que compila
nx build react

# Ejecutar linter
nx lint react --fix

# Ejecutar tests
nx test react
```

### 4. Commit

```bash
git add .
git commit -m "feat: agregar nuevo componente MyComponent"
```

### 5. Push y PR

```bash
git push origin feature/mi-nueva-caracteristica
# Crear Pull Request en GitHub
```

## 🐛 Debugging

### React

- Usar React DevTools
- Console logs en componentes
- Breakpoints en VSCode

### Vue

- Usar Vue DevTools
- Console logs en `setup()`
- Watchers para debugging: `watch(() => props.value, (val) => console.log(val))`

### Angular

- Usar Angular DevTools
- Console logs en métodos del componente
- `@HostListener` para eventos

## 📝 Documentación

Al crear un componente nuevo:

1. Agregar JSDoc comments
2. Incluir ejemplos en el demo
3. Actualizar README del paquete
4. Agregar a la lista de componentes disponibles

## 🔧 Troubleshooting

### Error: "Cannot find module"

```bash
# Limpiar y reinstalar
rm -rf node_modules dist
npm install
npm run build
```

### Demo no se actualiza

```bash
# Rebuild del paquete
nx build react --skip-nx-cache
```

### Tipos TypeScript incorrectos

```bash
# Regenerar tipos
nx build react
# Reiniciar TypeScript server en VSCode
```

## 📚 Recursos

- [Nx Documentation](https://nx.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Vue 3 Documentation](https://vuejs.org)
- [Angular Documentation](https://angular.io)

