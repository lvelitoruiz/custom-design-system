# Design System Monorepo

Sistema de diseño completo construido con Nx, TypeScript, React y Tailwind CSS. Incluye componentes para múltiples frameworks (React, Angular, Vue) con design tokens compartidos.

## 🏗️ Estructura del Monorepo

```
design-system/
├── apps/
│   ├── react-demo/          # Demo de componentes React
│   ├── angular-demo/        # Demo de componentes Angular (en desarrollo)
│   └── vue-demo/            # Demo de componentes Vue (en desarrollo)
├── packages/
│   ├── react/               # 📦 Componentes React
│   ├── angular/             # 📦 Componentes Angular (en desarrollo)
│   ├── vue/                 # 📦 Componentes Vue (en desarrollo)
│   ├── tokens/              # 🎨 Design tokens compartidos
│   ├── utils/               # 🛠️ Utilidades compartidas
│   └── icons/               # 🎭 Iconos compartidos
├── nx.json                  # Configuración de Nx
├── tsconfig.base.json       # TypeScript base config
└── package.json             # Dependencies del workspace
```

## 📦 Paquetes

### [@luisvelito/react](./packages/react)
Librería de componentes React completa con:
- ⚛️ **Atoms**: Button, Input, Textarea, Select, Checkbox, Radio, Switch, etc.
- 🧪 **Molecules**: FormField, Card, InputGroup, Alert, Tabs, Accordion, etc.
- 🏗️ **Organisms**: Navbar, Sidebar, Modal, Drawer, Table, UserMenu, etc.
- 🔥 **Features avanzadas**: Validación, auto-resize, navegación por teclado, custom dropdowns

### [@luisvelito/tokens](./packages/tokens)
Design tokens y configuración de Tailwind CSS:
- 🎨 Variables CSS (colores, spacing, typography, shadows)
- 🌓 Soporte para dark mode
- ⚙️ Preset de Tailwind personalizado
- 📐 Framework-agnostic (React, Vue, Angular)

### @luisvelito/angular *(en desarrollo)*
Componentes Angular usando los mismos design tokens.

### @luisvelito/vue *(en desarrollo)*
Componentes Vue usando los mismos design tokens.

### @luisvelito/utils
Utilidades compartidas entre todos los paquetes.

### @luisvelito/icons
Iconos compartidos entre todos los paquetes.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd design-system

# Instalar dependencias
npm install
```

### Comandos principales

#### Desarrollo

```bash
# Iniciar demo de React
npx nx serve react-demo
# o
npm run dev:react

# La app estará en http://localhost:4200
```

#### Compilación

```bash
# Compilar el paquete React
npx nx build react

# Compilar el paquete de tokens
npx nx build tokens

# Compilar todos los paquetes
npx nx run-many --target=build --all
# o
npm run build
```

#### Testing

```bash
# Ejecutar tests del paquete React
npx nx test react

# Ejecutar todos los tests
npx nx run-many --target=test --all
```

#### Linting

```bash
# Lint del paquete React
npx nx lint react

# Lint de todo
npx nx run-many --target=lint --all
```

## 🎨 Uso de los paquetes

### En una aplicación externa

#### 1. Instalar los paquetes

```bash
npm install @luisvelito/react @luisvelito/tokens
```

#### 2. Configurar Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@luisvelito/tokens/tailwind-preset')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@luisvelito/react/**/*.{js,ts,jsx,tsx}',
  ],
}
```

#### 3. Importar estilos

```css
/* src/styles.css */
@import "@luisvelito/tokens/tokens.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4. Usar los componentes

```tsx
import { Button, Input, Card } from '@luisvelito/react';

function App() {
  return (
    <Card title="Mi App">
      <Input placeholder="Escribe algo..." />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

### En el monorepo

Cuando desarrollas dentro del monorepo, los cambios se reflejan automáticamente:

1. **Inicia el servidor de desarrollo**:
   ```bash
   npx nx serve react-demo
   ```

2. **Edita componentes** en `packages/react/src/components/`

3. **Los cambios se reflejan automáticamente** en el navegador gracias al hot reload

4. **Compila cuando termines**:
   ```bash
   npx nx build react
   ```

## 🏗️ Arquitectura

### Nx Workspace

Este proyecto usa [Nx](https://nx.dev/) como herramienta de monorepo, que proporciona:

- 📦 **Gestión de dependencias** entre paquetes
- ⚡ **Caché inteligente** de builds y tests
- 🔄 **Affected commands** - solo ejecuta lo que cambió
- 📊 **Dependency graph** - visualiza dependencias entre proyectos

### Design Tokens

Los design tokens están centralizados en `@luisvelito/tokens` y son compartidos entre todos los frameworks:

```
@luisvelito/tokens
    ↓
├── @luisvelito/react
├── @luisvelito/angular
└── @luisvelito/vue
```

Esto garantiza **consistencia visual** entre todos los frameworks.

### Atomic Design

Los componentes React siguen el patrón de [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/):

- **Atoms**: Componentes básicos individuales (Button, Input, Badge)
- **Molecules**: Combinaciones simples de atoms (FormField, Card, Alert)
- **Organisms**: Componentes complejos (Navbar, Modal, Table)

## 🛠️ Desarrollo

### Crear un nuevo componente

```bash
# En el paquete React
cd packages/react/src/components/atoms
mkdir NewComponent
touch NewComponent/NewComponent.tsx
touch NewComponent/types.ts
touch NewComponent/index.ts
```

**NewComponent.tsx**:
```tsx
import React from 'react';
import { NewComponentProps } from './types';
import { cn } from '../../lib/utils';

export const NewComponent = React.forwardRef<
  HTMLDivElement,
  NewComponentProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('base-classes', className)}
      {...props}
    >
      {children}
    </div>
  );
});

NewComponent.displayName = 'NewComponent';
```

**types.ts**:
```tsx
export interface NewComponentProps 
  extends React.HTMLAttributes<HTMLDivElement> {
  // tus props personalizadas
}
```

**index.ts**:
```tsx
export * from './NewComponent';
export * from './types';
```

### Exportar el componente

Agrega a `packages/react/src/components/index.ts`:

```tsx
export * from './atoms/NewComponent';
```

### Agregar al demo

Agrega un ejemplo en `apps/react-demo/src/app/App.tsx`.

### Compilar y probar

```bash
npx nx build react
npx nx serve react-demo
```

## 📊 Visualizar el grafo de dependencias

```bash
npx nx graph
```

Esto abre una interfaz web que muestra cómo están conectados todos los proyectos.

## 🧪 Testing

### Agregar tests

```bash
# En el paquete correspondiente
cd packages/react
mkdir -p src/components/atoms/Button/__tests__
touch src/components/atoms/Button/__tests__/Button.test.tsx
```

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Ejecutar tests

```bash
npx nx test react
```

## 📤 Publicación a NPM

### 1. Compilar todos los paquetes

```bash
npx nx run-many --target=build --all
```

### 2. Actualizar versiones

Actualiza `version` en los `package.json`:
- `packages/tokens/package.json`
- `packages/react/package.json`

### 3. Publicar tokens primero

```bash
cd packages/tokens
npm publish --access public
```

### 4. Publicar React

```bash
cd packages/react
npm publish --access public
```

### 5. Verificar publicación

```bash
npm info @luisvelito/tokens
npm info @luisvelito/react
```

## 🔧 Configuración

### TypeScript

La configuración base está en `tsconfig.base.json` y define los paths del monorepo:

```json
{
  "compilerOptions": {
    "paths": {
      "@luisvelito/react": ["packages/react/src/index.ts"],
      "@luisvelito/tokens": ["packages/tokens/src/index.ts"],
      "@luisvelito/utils": ["packages/utils/src/index.ts"]
    }
  }
}
```

### Nx

La configuración de Nx está en `nx.json` y define:
- Caché de tasks
- Configuración de affected
- Default options

Cada proyecto tiene su `project.json` con:
- Targets (build, test, lint, serve)
- Dependencias entre proyectos
- Configuración específica

## 🐛 Troubleshooting

### Error: "Cannot find module '@luisvelito/react'"

**En desarrollo**:
Verifica los aliases en `tsconfig.base.json` y `vite.config.ts`.

**En producción**:
Asegúrate de haber compilado el paquete:
```bash
npx nx build react
```

### Los estilos no se aplican

1. Verifica que el preset esté configurado en `tailwind.config.js`
2. Verifica que imports `@luisvelito/tokens/tokens.css`
3. Verifica que el `content` incluya las rutas correctas

### Errores de TypeScript al compilar

Asegúrate de que todos los tipos estén correctos. TypeScript en modo build es más estricto que en desarrollo.

### Nx caché causando problemas

Limpia la caché:
```bash
npx nx reset
```

## 📚 Recursos

- [Documentación de Nx](https://nx.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Documentation](https://react.dev/)

## 📝 Licencia

MIT

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Convenciones

- **Commits**: Usa [Conventional Commits](https://www.conventionalcommits.org/)
  - `feat:` para nuevas funcionalidades
  - `fix:` para correcciones de bugs
  - `docs:` para documentación
  - `refactor:` para refactorización
  - `test:` para tests

- **Código**: 
  - Usa TypeScript
  - Sigue las reglas de ESLint
  - Escribe tests para componentes nuevos
  - Documenta props y componentes

## 👥 Equipo

Desarrollado por [Luis Velito](https://github.com/luisvelito)

---

**¿Preguntas?** Abre un issue en el repositorio.

