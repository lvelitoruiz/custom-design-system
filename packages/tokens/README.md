# @luisvelito/tokens

Design tokens y configuración de Tailwind CSS para el sistema de diseño. Este paquete contiene todas las variables de diseño (colores, espaciado, tipografía, etc.) y el preset de Tailwind que puede ser usado en cualquier proyecto, independientemente del framework (React, Vue, Angular, etc.).

## 📦 Instalación

```bash
npm install @luisvelito/tokens
# o
yarn add @luisvelito/tokens
# o
pnpm add @luisvelito/tokens
```

### Dependencias peer requeridas

```bash
npm install tailwindcss
```

## 🎨 Contenido del paquete

### 1. Design Tokens (CSS Variables)

Variables CSS que definen los colores, radios, sombras y otros valores de diseño del sistema.

**Archivo**: `tokens.css`

### 2. Tailwind Preset

Configuración preestablecida de Tailwind CSS con los colores y valores personalizados del sistema de diseño.

**Archivo**: `tailwind-preset.js`

## ⚙️ Uso

### Configurar Tailwind CSS

Agrega el preset a tu `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@luisvelito/tokens/tailwind-preset')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Agrega aquí las rutas de tus componentes
  ],
  // Puedes extender o sobrescribir valores aquí
  theme: {
    extend: {
      // Tus personalizaciones adicionales
    }
  }
}
```

### Importar CSS Variables

Importa los tokens CSS en tu archivo de estilos principal:

```css
/* src/styles.css o src/index.css */
@import "@luisvelito/tokens/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎨 Design Tokens Disponibles

### Colores

El sistema incluye los siguientes colores con sus variantes:

#### Colores base
- `--background` - Color de fondo principal
- `--foreground` - Color de texto principal
- `--card` - Fondo de tarjetas
- `--card-foreground` - Texto en tarjetas

#### Colores semánticos
- `--primary` / `--primary-foreground` - Color primario y su texto
- `--secondary` / `--secondary-foreground` - Color secundario y su texto
- `--muted` / `--muted-foreground` - Color apagado y su texto
- `--accent` / `--accent-foreground` - Color de acento y su texto

#### Estados
- `--destructive` / `--destructive-foreground` - Para acciones destructivas
- `--success` / `--success-foreground` - Para éxito
- `--warning` / `--warning-foreground` - Para advertencias
- `--info` / `--info-foreground` - Para información

#### Elementos UI
- `--border` - Color de bordes
- `--input` - Fondo de inputs
- `--ring` - Color del focus ring

### Border Radius

- `--radius` - Radio de bordes por defecto (0.5rem / 8px)

Disponible en Tailwind como:
```tsx
className="rounded-lg"  // usa var(--radius)
```

### Uso en CSS

Puedes usar las variables CSS directamente:

```css
.mi-componente {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-radius: var(--radius);
}
```

### Uso con Tailwind

Usa las clases de utilidad de Tailwind que automáticamente usan los tokens:

```tsx
<div className="bg-primary text-primary-foreground rounded-lg">
  Contenido
</div>
```

## 🌓 Dark Mode

El sistema incluye soporte completo para modo oscuro. Las variables se redefinen automáticamente cuando la clase `dark` está presente en el elemento HTML:

```tsx
// Activa el dark mode
document.documentElement.classList.add('dark');

// Desactiva el dark mode
document.documentElement.classList.remove('dark');
```

En Tailwind, usa el prefijo `dark:`:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Contenido responsive al tema
</div>
```

## 🎨 Personalización

### Sobrescribir valores

Puedes sobrescribir los valores por defecto en tu `tailwind.config.js`:

```js
module.exports = {
  presets: [
    require('@luisvelito/tokens/tailwind-preset')
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(220 90% 55%)',  // Nuevo color primario
          foreground: 'hsl(0 0% 100%)'
        }
      },
      borderRadius: {
        lg: '1rem',  // Bordes más redondeados
      }
    }
  }
}
```

### Modificar tokens CSS

Crea un archivo CSS adicional para sobrescribir las variables:

```css
/* custom-tokens.css */
@layer base {
  :root {
    /* Sobrescribe el color primario */
    --primary: 220 90% 55%;
    --primary-foreground: 0 0% 100%;
    
    /* Sobrescribe el radio */
    --radius: 1rem;
  }
  
  .dark {
    /* Sobrescribe para dark mode */
    --primary: 220 85% 60%;
  }
}
```

Importa después de los tokens base:

```css
@import "@luisvelito/tokens/tokens.css";
@import "./custom-tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🔧 Desarrollo

Si estás trabajando en el monorepo:

### Compilar

```bash
npx nx build tokens
```

### Estructura de archivos

```
packages/tokens/
├── src/
│   ├── index.ts              # Entry point principal
│   ├── tokens.ts             # Tokens TypeScript
│   ├── tokens.css            # Variables CSS
│   └── tailwind-preset.js    # Preset de Tailwind
├── dist/                     # Archivos compilados
│   ├── index.esm.js
│   ├── index.cjs.js
│   ├── index.d.ts
│   ├── tokens.css
│   └── tailwind-preset.js
└── package.json
```

## 📦 Exports

El paquete exporta los siguientes módulos:

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs.js",
      "types": "./dist/index.d.ts"
    },
    "./tailwind-preset": "./dist/tailwind-preset.js",
    "./tokens.css": "./dist/tokens.css"
  }
}
```

### Importar

```js
// Preset de Tailwind
require('@luisvelito/tokens/tailwind-preset')

// CSS variables
import '@luisvelito/tokens/tokens.css'

// Tokens TypeScript (si los necesitas en JS)
import { tokens } from '@luisvelito/tokens'
```

## 🎯 Uso en diferentes frameworks

Este paquete es **framework-agnostic** y puede usarse con cualquier framework:

### React
```tsx
// Importa en tu entry point
import '@luisvelito/tokens/tokens.css';
```

### Vue
```js
// main.js
import '@luisvelito/tokens/tokens.css';
```

### Angular
```css
/* styles.css */
@import "@luisvelito/tokens/tokens.css";
```

### Next.js
```tsx
// _app.tsx
import '@luisvelito/tokens/tokens.css';
```

## 🎨 Colores incluidos

### Light Mode
- **Background**: Blanco (`hsl(0 0% 100%)`)
- **Primary**: Azul (`hsl(217 91% 60%)`)
- **Success**: Verde (`hsl(142 71% 45%)`)
- **Warning**: Amarillo (`hsl(38 92% 50%)`)
- **Danger/Destructive**: Rojo (`hsl(0 84% 60%)`)

### Dark Mode
- **Background**: Gris oscuro (`hsl(222 47% 11%)`)
- **Primary**: Azul claro (`hsl(217 91% 60%)`)
- **Success**: Verde (`hsl(142 71% 45%)`)
- **Warning**: Amarillo (`hsl(38 92% 50%)`)
- **Danger/Destructive**: Rojo (`hsl(0 84% 60%)`)

## 📝 Licencia

MIT

## 🤝 Contribuir

Este paquete es parte del monorepo del sistema de diseño. Para contribuir:

1. Fork el repositorio principal
2. Haz cambios en `packages/tokens/src/`
3. Compila: `npx nx build tokens`
4. Abre un Pull Request

## 📞 Soporte

Si encuentras algún problema o tienes preguntas, abre un issue en el repositorio principal.
