# Sistema de Diseño Verve

Un sistema de diseño completo y modular con componentes para **React**, **Vue** y **Angular**, construido con TypeScript y Tailwind CSS.

## 📦 Paquetes

| Paquete | Descripción | Versión |
|---------|-------------|---------|
| `@luisvelito/react` | Componentes React | ![npm](https://img.shields.io/npm/v/@luisvelito/react) |
| `@luisvelito/vue` | Componentes Vue 3 | ![npm](https://img.shields.io/npm/v/@luisvelito/vue) |
| `@luisvelito/angular` | Componentes Angular | ![npm](https://img.shields.io/npm/v/@luisvelito/angular) |
| `@luisvelito/tokens` | Design tokens compartidos | ![npm](https://img.shields.io/npm/v/@luisvelito/tokens) |
| `@luisvelito/utils` | Utilidades compartidas | ![npm](https://img.shields.io/npm/v/@luisvelito/utils) |

## 🚀 Inicio Rápido

### React

```bash
npm install @luisvelito/react
```

```tsx
import { Button, Input, Card } from '@luisvelito/react';
import '@luisvelito/react/dist/styles.css';

function App() {
  return (
    <Card title="Mi Aplicación">
      <Input placeholder="Escribe algo..." />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

### Vue 3

```bash
npm install @luisvelito/vue
```

```vue
<script setup lang="ts">
import { Button, Input, Card } from '@luisvelito/vue';
</script>

<template>
  <Card title="Mi Aplicación">
    <Input placeholder="Escribe algo..." />
    <Button variant="primary">Enviar</Button>
  </Card>
</template>
```

### Angular

```bash
npm install @luisvelito/angular
```

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent, CardComponent } from '@luisvelito/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, InputComponent, CardComponent],
  template: `
    <ds-card title="Mi Aplicación">
      <ds-input placeholder="Escribe algo..."></ds-input>
      <ds-button variant="primary">Enviar</ds-button>
    </ds-card>
  `
})
export class AppComponent {}
```

## 🎨 Características

- ✨ **Componentes Atómicos**: Diseño basado en Atomic Design (Atoms, Molecules, Organisms)
- 🎯 **TypeScript**: Tipado completo para mejor experiencia de desarrollo
- 🌓 **Dark Mode**: Soporte nativo para modo oscuro
- ♿ **Accesibilidad**: Componentes con ARIA attributes y navegación por teclado
- 📱 **Responsive**: Todos los componentes son mobile-friendly
- 🎨 **Personalizable**: Usa design tokens para personalizar colores, espaciado, etc.
- 🔧 **Utilidades**: Hooks y utilidades compartidas entre frameworks

## 📚 Componentes Disponibles

### Atoms (18 componentes)
- Avatar, Badge, Button, Checkbox, Chip, Divider, Icon, Input, KBD, Progress, Radio, Select, Skeleton, Slider, Spinner, Switch, Tag, Textarea

### Molecules (10 componentes)
- Accordion, Alert, Breadcrumbs, Card, Dropdown, FormField, InputGroup, ListItem, SearchBar, Tabs

### Organisms (14 componentes)
- CardList, Drawer, EmptyState, Footer, Header, KpiCard, ListGroup, Modal, Navbar, Pagination, Sidebar, Table, Toolbar, UserMenu

## 🛠️ Desarrollo

### Prerequisitos

- Node.js >= 18
- npm >= 9

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install

# Compilar todos los paquetes
npm run build

# Ejecutar demos
npm run serve:react   # Demo de React
npm run serve:vue     # Demo de Vue
npm run serve:angular # Demo de Angular
```

### Estructura del Proyecto

```
design-system/
├── packages/
│   ├── react/          # Componentes React
│   ├── vue/            # Componentes Vue
│   ├── angular/        # Componentes Angular
│   ├── tokens/         # Design tokens
│   ├── utils/          # Utilidades compartidas
│   └── icons/          # Iconos SVG
├── apps/
│   ├── react-demo/     # Demo de React
│   ├── vue-demo/       # Demo de Vue
│   └── angular-demo/   # Demo de Angular
└── dist/               # Paquetes compilados
```

## 📖 Documentación Completa

- [Guía de React](./packages/react/README.md)
- [Guía de Vue](./packages/vue/README.md)
- [Guía de Angular](./packages/angular/README.md)
- [Design Tokens](./packages/tokens/README.md)
- [Guía de Desarrollo](./DEVELOPMENT.md)
- [Guía de Publicación](./PUBLISHING.md)

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor lee nuestra [Guía de Contribución](./CONTRIBUTING.md) antes de enviar un PR.

## 📄 Licencia

MIT © Luis Velito

## 🔗 Enlaces

- [Documentación](https://design-system-docs.vercel.app)
- [Storybook](https://design-system-storybook.vercel.app)
- [NPM Packages](https://www.npmjs.com/~luisvelito)
