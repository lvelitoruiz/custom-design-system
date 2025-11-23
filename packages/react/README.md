# @luisvelito/react

Sistema de diseño de componentes React construido con TypeScript y Tailwind CSS, siguiendo principios de diseño atómico.

## 📦 Instalación

```bash
npm install @luisvelito/react @luisvelito/tokens
# o
yarn add @luisvelito/react @luisvelito/tokens
# o
pnpm add @luisvelito/react @luisvelito/tokens
```

### Dependencias Peer

Este paquete requiere las siguientes dependencias peer:

```bash
npm install react react-dom tailwindcss postcss autoprefixer
```

## 🚀 Configuración Rápida

### 1. Configurar Tailwind CSS

Crea o actualiza tu `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@luisvelito/react/**/*.js", // ← Escanea los componentes
  ],
  presets: [require("@luisvelito/tokens/tailwind-preset")], // ← Usa el preset compartido
  darkMode: 'class',
  plugins: [],
}
```

### 2. Importar los Tokens CSS

En tu archivo CSS principal (ej: `src/index.css` o `src/styles.css`):

```css
/* Importa los tokens del design system (valores por defecto) */
@import "@luisvelito/tokens/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Usar los Componentes

```tsx
import { Button, Input, Card } from '@luisvelito/react';

function App() {
  return (
    <div>
      <Card title="Bienvenido" padding="lg">
        <Input placeholder="Ingresa tu nombre" />
        <Button variant="primary" size="md">
          Enviar
        </Button>
      </Card>
    </div>
  );
}
```

## 🎨 Personalización

### Sobrescribir Tokens

Puedes sobrescribir cualquier valor de diseño en tu CSS:

```css
@import "@luisvelito/tokens/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Sobrescribe los valores por defecto */
:root {
  --primary: 350 89% 60%; /* Nuevo color primario */
  --radius: 1rem; /* Bordes más redondeados */
}
```

### Modo Oscuro

El sistema incluye soporte para modo oscuro. Actívalo agregando la clase `dark` al elemento raíz:

```tsx
// Ejemplo con un toggle
function App() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Switch 
      checked={isDark} 
      onChange={setIsDark}
      label="Modo Oscuro"
    />
  );
}
```

## 📚 Componentes Disponibles

### Átomos
- `Avatar` - Avatar de usuario con imagen o fallback
- `Badge` - Insignias y etiquetas
- `Button` - Botones con múltiples variantes
- `Checkbox` - Casillas de verificación
- `Chip` - Chips removibles
- `Divider` - Separadores horizontales/verticales
- `Icon` - Contenedor para íconos
- `Input` - Campos de entrada
- `KBD` - Teclas de teclado
- `Progress` - Barras de progreso
- `Radio` - Botones de radio
- `Select` - Selectores desplegables
- `Skeleton` - Placeholders de carga
- `Slider` - Controles deslizantes
- `Spinner` - Indicadores de carga
- `Switch` - Interruptores toggle
- `Tag` - Etiquetas removibles
- `Textarea` - Áreas de texto

### Moléculas
- `Accordion` - Paneles expandibles
- `Alert` - Alertas y notificaciones
- `Breadcrumbs` - Migas de pan
- `Card` - Tarjetas de contenido
- `Dropdown` - Menús desplegables
- `FormField` - Campos de formulario con label
- `InputGroup` - Grupos de inputs
- `ListItem` - Items de lista
- `SearchBar` - Barras de búsqueda
- `Tabs` - Pestañas

### Organismos
- `CardList` - Listas de tarjetas en grid
- `Drawer` - Paneles laterales
- `EmptyState` - Estados vacíos
- `Footer` - Pie de página
- `Header` - Cabecera
- `KpiCard` - Tarjetas de indicadores
- `ListGroup` - Grupos de listas
- `Modal` - Modales y diálogos
- `Navbar` - Barra de navegación
- `Pagination` - Paginación
- `Sidebar` - Barra lateral
- `Table` - Tablas de datos
- `Toolbar` - Barras de herramientas
- `UserMenu` - Menú de usuario

## 💡 Ejemplos de Uso

### Botones

```tsx
import { Button } from '@luisvelito/react';

<Button variant="primary" size="md">
  Guardar
</Button>

<Button variant="secondary" size="lg" disabled>
  Deshabilitado
</Button>

<Button variant="ghost" loading>
  Cargando...
</Button>
```

### Formularios

```tsx
import { Input, FormField, Button } from '@luisvelito/react';

<form>
  <FormField 
    label="Email" 
    hint="Ingresa tu correo electrónico"
    required
  >
    <Input 
      type="email" 
      placeholder="tu@email.com"
    />
  </FormField>

  <FormField 
    label="Password" 
    error="La contraseña debe tener al menos 8 caracteres"
  >
    <Input 
      type="password" 
      invalid
    />
  </FormField>

  <Button type="submit" variant="primary">
    Iniciar Sesión
  </Button>
</form>
```

### Tarjetas

```tsx
import { Card, Button } from '@luisvelito/react';

<Card
  title="Título de la tarjeta"
  description="Descripción breve"
  padding="lg"
  shadow="md"
  footer={
    <Button variant="primary">Ver más</Button>
  }
>
  <p>Contenido de la tarjeta</p>
</Card>
```

## 🎯 TypeScript

Todos los componentes están completamente tipados. Importa los tipos cuando los necesites:

```tsx
import { ButtonProps, InputProps } from '@luisvelito/react';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 🛠️ Desarrollo

### Estructura del Proyecto

```
packages/react/
├── src/
│   ├── components/
│   │   ├── atoms/       # Componentes básicos
│   │   ├── molecules/   # Componentes compuestos
│   │   └── organisms/   # Componentes complejos
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilidades
│   ├── preset.js        # Preset de Tailwind
│   └── tokens.css       # Variables CSS
├── dist/                # Build output
└── package.json
```

## 📄 Licencia

MIT

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor abre un issue primero para discutir los cambios propuestos.

## 🔗 Links

- [GitHub Repository](https://github.com/lvelitoruiz/custom-design-system)
- [NPM Package](https://www.npmjs.com/package/@luisvelito/react)

---

**Hecho con ❤️ usando React, TypeScript y Tailwind CSS**

