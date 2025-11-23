# @luisvelito/tokens

Tokens de diseño compartidos para el sistema de diseño. Compatible con React, Angular, Vue y cualquier framework que use Tailwind CSS.

## 📦 Instalación

```bash
npm install @luisvelito/tokens tailwindcss
# o
yarn add @luisvelito/tokens tailwindcss
# o
pnpm add @luisvelito/tokens tailwindcss
```

## 🎨 Uso

Este paquete exporta dos archivos principales:

### 1. Preset de Tailwind

Configuración de colores, border-radius y otras utilidades de Tailwind.

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@luisvelito/tokens/tailwind-preset")],
  darkMode: 'class',
  plugins: [],
}
```

### 2. Variables CSS (Tokens)

Valores por defecto de colores, spacing, etc.

```css
/* styles.css */
@import "@luisvelito/tokens/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🎯 Tokens Disponibles

### Colores

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 220 14.3% 95.9%;
  --destructive: 0 84.2% 60.2%;
  --muted: 220 14.3% 88%;
  --accent: 187 85.7% 53.3%;
  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 221.2 83.2% 53.3%;
  /* ...más colores */
}
```

### Border Radius

```css
:root {
  --radius: 0.75rem;
}
```

Tailwind genera automáticamente:
- `rounded-sm` → `calc(var(--radius) - 4px)`
- `rounded-md` → `calc(var(--radius) - 2px)`
- `rounded-lg` → `var(--radius)`

## 🌙 Modo Oscuro

El paquete incluye valores para modo oscuro automáticamente:

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ...valores dark */
}
```

Actívalo agregando la clase `dark` al elemento raíz:

```js
document.documentElement.classList.add('dark');
```

## ✨ Personalización

### Sobrescribir Tokens

Puedes sobrescribir cualquier valor después de importar:

```css
@import "@luisvelito/tokens/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Sobrescribe valores */
:root {
  --primary: 350 89% 60%; /* Tu color personalizado */
  --radius: 1rem; /* Bordes más redondeados */
}
```

### Extender el Preset

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@luisvelito/tokens/tailwind-preset")],
  theme: {
    extend: {
      // Tus personalizaciones adicionales
      colors: {
        brand: '#ff6b6b',
      },
    },
  },
}
```

## 🚀 Uso Multi-Framework

### Con React

```bash
npm install @luisvelito/react @luisvelito/tokens
```

Los componentes de React ya vienen configurados para usar estos tokens.

### Con Angular (próximamente)

```bash
npm install @luisvelito/angular @luisvelito/tokens
```

### Con Vue (próximamente)

```bash
npm install @luisvelito/vue @luisvelito/tokens
```

### Solo con Tailwind (sin framework UI)

```bash
npm install @luisvelito/tokens tailwindcss
```

Úsalos como base para tu propia biblioteca de componentes.

## 📊 Estructura de Tokens

Los tokens están organizados en:

- **Colores Semánticos**: `primary`, `secondary`, `destructive`, `muted`, `accent`
- **Colores de UI**: `background`, `foreground`, `border`, `input`, `ring`
- **Colores de Componentes**: `card`, `popover`, `sidebar`
- **Espaciado**: `--radius` y derivados
- **Estados**: Cada color tiene su variante `-foreground`

## 🎨 Convenciones

Los colores usan formato HSL sin `hsl()`:

```css
/* ✅ Correcto */
--primary: 221.2 83.2% 53.3%;

/* ❌ Incorrecto */
--primary: hsl(221.2, 83.2%, 53.3%);
```

Esto permite que Tailwind genere variantes de opacidad automáticamente:

```jsx
<div className="bg-primary/50">50% opacity</div>
<div className="text-primary/20">20% opacity</div>
```

## 📄 Licencia

MIT

## 🔗 Links

- [Repositorio GitHub](https://github.com/lvelitoruiz/custom-design-system)
- [NPM Package](https://www.npmjs.com/package/@luisvelito/tokens)
- [React Components](https://www.npmjs.com/package/@luisvelito/react)

---

**Tokens compartidos para un sistema de diseño consistente** ✨

