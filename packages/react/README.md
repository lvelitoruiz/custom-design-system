# @luisvelito/react

Sistema de diseño completo construido con React, TypeScript y Tailwind CSS. Incluye componentes atómicos, moleculares y organismales siguiendo los principios de Atomic Design, con funcionalidades avanzadas como validación, auto-resize, navegación por teclado y dropdowns personalizados.

## 🎨 Características

- ✅ **Componentes completos**: Atoms, Molecules y Organisms
- 🎯 **TypeScript**: Tipado completo para mejor experiencia de desarrollo
- 🎨 **Tailwind CSS**: Estilos utilitarios con preset personalizado
- 🌓 **Dark Mode**: Soporte completo para modo oscuro
- ♿ **Accesible**: Cumple con los estándares WCAG
- ⌨️ **Navegación por teclado**: Soporte completo en todos los componentes interactivos
- 🔥 **Flowbite aesthetic**: Diseño moderno y limpio inspirado en Flowbite
- 📦 **Tree-shakeable**: Solo importa lo que necesitas

## 📦 Instalación

```bash
npm install @luisvelito/react @luisvelito/tokens
# o
yarn add @luisvelito/react @luisvelito/tokens
# o
pnpm add @luisvelito/react @luisvelito/tokens
```

### Dependencias peer requeridas

```bash
npm install react react-dom tailwindcss lucide-react
```

## ⚙️ Configuración

### 1. Configurar Tailwind CSS

Agrega el preset de tokens a tu `tailwind.config.js`:

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
  // ... resto de tu configuración
}
```

### 2. Importar estilos CSS

Importa los tokens CSS en tu archivo de entrada principal:

```css
/* src/styles.css o src/index.css */
@import "@luisvelito/tokens/tokens.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Usar los componentes

```tsx
import { Button, Input, Card } from '@luisvelito/react';

function App() {
  return (
    <Card title="Mi Aplicación">
      <Input placeholder="Escribe algo..." />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

## 🧩 Componentes Disponibles

### ⚛️ Atoms (Componentes Básicos)

#### Button
Botón con múltiples variantes, tamaños y estado de carga.

```tsx
import { Button } from '@luisvelito/react';

<Button variant="primary" size="md">Click Me</Button>
<Button variant="secondary" size="lg" loading>Loading...</Button>
<Button variant="ghost" disabled>Disabled</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'ghost' | 'danger'`
- `size`: `'sm' | 'md' | 'lg' | 'icon'`
- `loading`: `boolean` - Muestra spinner de carga
- `fullWidth`: `boolean` - Ocupa todo el ancho disponible

#### Input
Input con validación avanzada, estados de carga, clearable y debounce.

```tsx
import { Input } from '@luisvelito/react';
import { User } from 'lucide-react';

// Input básico
<Input placeholder="Nombre de usuario" />

// Con validación email
<Input 
  placeholder="Email" 
  validation={[{ type: 'email', message: 'Email inválido' }]}
  validateOnBlur
  onValidationChange={(valid, errors) => console.log(valid, errors)}
/>

// Con iconos y clearable
<Input 
  placeholder="Buscar..."
  leftIcon={<User className="w-4 h-4" />}
  clearable
/>

// Con loading y debounce
<Input 
  placeholder="Buscar con delay..."
  loading={isLoading}
  debounceMs={300}
  onChange={(value) => console.log(value)}
/>
```

**Props avanzadas:**
- `validation`: Array de reglas de validación (`email`, `url`, `number`, `phone`, o custom)
- `validateOnChange`: Valida mientras el usuario escribe
- `validateOnBlur`: Valida al perder el foco
- `onValidationChange`: Callback con estado de validación
- `loading`: Muestra spinner de carga
- `clearable`: Muestra botón para limpiar el input
- `debounceMs`: Retraso en milisegundos para el onChange
- `leftIcon`: Icono a la izquierda
- `rightIcon`: Icono a la derecha

#### Textarea
Textarea con auto-resize y control de redimensionamiento.

```tsx
import { Textarea } from '@luisvelito/react';

// Básico
<Textarea placeholder="Escribe tu mensaje..." />

// Con auto-resize
<Textarea 
  placeholder="Se ajusta automáticamente" 
  autoResize
  minRows={2}
  maxRows={6}
/>

// No redimensionable
<Textarea 
  placeholder="Tamaño fijo" 
  resizable={false}
/>
```

**Props:**
- `autoResize`: Ajusta altura automáticamente según contenido
- `minRows`: Número mínimo de filas (con autoResize)
- `maxRows`: Número máximo de filas (con autoResize)
- `resizable`: Permite redimensionar manualmente

#### Select
Select personalizado con búsqueda, teclado y múltiples opciones.

```tsx
import { Select } from '@luisvelito/react';

const options = [
  { label: 'Opción 1', value: '1' },
  { label: 'Opción 2', value: '2' },
  { label: 'Opción 3 (Deshabilitada)', value: '3', disabled: true },
];

// Select básico
<Select
  options={options}
  placeholder="Selecciona una opción"
  onChange={(value) => console.log(value)}
/>

// Con búsqueda y clearable
<Select
  options={options}
  placeholder="Buscar países..."
  searchable
  clearable
/>

// Con loading
<Select
  options={options}
  loading
  disabled
/>

// Custom height para el menú
<Select
  options={options}
  maxMenuHeight={200}
/>
```

**Props:**
- `options`: Array de `{ label, value, disabled? }`
- `searchable`: Habilita búsqueda con teclado
- `clearable`: Muestra botón para limpiar selección
- `loading`: Muestra spinner de carga
- `maxMenuHeight`: Altura máxima del dropdown
- `filterFunction`: Función personalizada para filtrar opciones
- `renderOption`: Función para renderizar opciones personalizadas

**Navegación por teclado:**
- `ArrowDown/ArrowUp`: Navegar entre opciones
- `Enter`: Seleccionar opción resaltada
- `Escape`: Cerrar dropdown
- `Typing`: Buscar opciones (con searchable)

#### Checkbox
Checkbox con estado indeterminado para "Select All".

```tsx
import { Checkbox } from '@luisvelito/react';

// Básico
<Checkbox 
  checked={isChecked}
  onChange={setIsChecked}
  label="Acepto los términos"
/>

// Indeterminado (para Select All)
<Checkbox
  checked={allSelected}
  indeterminate={someSelected}
  onChange={handleSelectAll}
  label="Seleccionar todo"
/>

// Inline
<Checkbox checked={true} label="Opción" inline />
```

**Props:**
- `checked`: Estado actual
- `onChange`: Callback que recibe el nuevo estado booleano
- `indeterminate`: Estado indeterminado (visual)
- `label`: Etiqueta del checkbox
- `inline`: Muestra en línea en lugar de bloque

#### Radio, Switch, Slider
```tsx
// Radio
<Radio 
  name="option" 
  value="1" 
  checked={selected === '1'}
  onChange={() => setSelected('1')}
  label="Opción 1"
/>

// Switch
<Switch 
  checked={enabled}
  onChange={setEnabled}
  label="Habilitar notificaciones"
  inline={false}
/>

// Slider
<Slider
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
/>
```

#### Badge, Tag, Chip
```tsx
// Badge
<Badge variant="primary" size="md" rounded>New</Badge>

// Tag (removable)
<Tag 
  variant="success" 
  removable 
  onRemove={() => console.log('Removed')}
>
  React
</Tag>

// Chip
<Chip 
  label="Active" 
  variant="primary"
  onRemove={() => console.log('Removed')}
/>
```

#### Progress, Avatar, Icon
```tsx
// Progress
<Progress value={65} variant="primary" label="65% Complete" />

// Avatar
<Avatar 
  size="md" 
  src="https://i.pravatar.cc/150?img=1" 
  alt="User"
  fallback="JD"
/>

// Icon
<Icon size={24}>
  <Heart className="w-full h-full" />
</Icon>
```

#### Skeleton, Spinner, Divider, KBD
```tsx
// Skeleton
<Skeleton width="100%" height="20px" />
<Skeleton variant="circular" width="60px" height="60px" />

// Spinner
<Spinner size="md" />

// Divider
<Divider orientation="horizontal" />

// KBD (tecla de teclado)
<KBD>Ctrl</KBD> + <KBD>K</KBD>
```

---

### 🧪 Molecules (Componentes Compuestos)

#### FormField
Wrapper para inputs con label, hint y error.

```tsx
import { FormField, Input } from '@luisvelito/react';

<FormField
  id="email"
  label="Email"
  hint="Ingresa tu email corporativo"
  error="Este email ya está en uso"
  required
>
  <Input placeholder="email@example.com" />
</FormField>
```

#### Card
Tarjeta con header, footer y variantes de padding/shadow.

```tsx
import { Card, Button } from '@luisvelito/react';

<Card
  title="Mi Tarjeta"
  description="Descripción de la tarjeta"
  padding="md"
  shadow="sm"
  header={<div>Header personalizado</div>}
  footer={
    <div className="flex gap-2">
      <Button variant="ghost">Cancelar</Button>
      <Button variant="primary">Guardar</Button>
    </div>
  }
>
  <p>Contenido de la tarjeta</p>
</Card>
```

#### InputGroup
Agrupa inputs con addons (prefijos/sufijos).

```tsx
import { InputGroup, Input } from '@luisvelito/react';

// Con addon de texto
<InputGroup leftAddon={<span>$</span>}>
  <Input placeholder="0.00" />
</InputGroup>

// Con ambos addons
<InputGroup 
  leftAddon={<span>https://</span>}
  rightAddon={<CheckCircle className="text-success" />}
>
  <Input placeholder="example.com" />
</InputGroup>
```

#### Alert, Breadcrumbs, Tabs, Accordion, SearchBar, Dropdown, ListItem

```tsx
// Alert
<Alert
  variant="success"
  title="Éxito"
  description="Los cambios se guardaron correctamente"
  closable
  onClose={() => console.log('Closed')}
/>

// Breadcrumbs
<Breadcrumbs
  items={[
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/products' },
    { label: 'Detalles' }
  ]}
/>

// Tabs
<Tabs
  tabs={[
    { label: 'General', value: 'general' },
    { label: 'Avanzado', value: 'advanced' }
  ]}
  value={activeTab}
  onChange={setActiveTab}
  fullWidth
/>

// Accordion
<Accordion
  items={[
    { id: '1', title: '¿Qué es esto?', content: 'Respuesta...' },
    { id: '2', title: '¿Cómo funciona?', content: 'Respuesta...' }
  ]}
  multiple
  defaultOpen={['1']}
/>

// SearchBar
<SearchBar
  value={search}
  onChange={setSearch}
  placeholder="Buscar..."
/>

// ListItem
<ListItem
  title="Configuración"
  description="Administra tu cuenta"
  leftIcon={<Settings />}
  rightIcon={<ChevronRight />}
  clickable
  onClick={() => console.log('Clicked')}
/>
```

---

### 🏗️ Organisms (Componentes Complejos)

#### Navbar
```tsx
<Navbar
  logo={<span className="font-bold">Brand</span>}
  links={[
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/products' },
  ]}
  rightContent={<Button size="sm">Sign In</Button>}
  sticky
/>
```

#### Sidebar
```tsx
<Sidebar
  header={<span>My App</span>}
  items={[
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: <Home />, 
      href: '#', 
      active: true 
    },
    { id: 'settings', label: 'Settings', icon: <Settings />, href: '#' }
  ]}
  footer={<Button>Logout</Button>}
  collapsed={false}
/>
```

#### Modal
```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmar acción"
  size="md"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleConfirm}>
        Confirmar
      </Button>
    </>
  }
>
  <p>¿Estás seguro de realizar esta acción?</p>
</Modal>
```

#### Drawer
```tsx
<Drawer
  open={isOpen}
  onClose={() => setIsOpen(false)}
  position="right"
  title="Configuración"
  footer={<Button fullWidth>Guardar</Button>}
>
  <p>Contenido del drawer</p>
</Drawer>
```

#### Table, Pagination, CardList, KpiCard, EmptyState, UserMenu

```tsx
// Table
<Table
  columns={[
    { key: 'name', label: 'Nombre' },
    { key: 'email', label: 'Email' },
  ]}
  data={[
    { name: 'Juan', email: 'juan@example.com' },
  ]}
/>

// Pagination
<Pagination
  page={currentPage}
  totalPages={10}
  onChange={setCurrentPage}
/>

// KpiCard
<KpiCard
  label="Ventas Totales"
  value="$45,231"
  icon={<DollarSign />}
  trend="up"
  trendValue="+12.5%"
/>

// EmptyState
<EmptyState
  title="Sin datos"
  description="No hay elementos para mostrar"
  icon={<FileX />}
  action={<Button>Crear nuevo</Button>}
/>

// UserMenu
<UserMenu
  user={{ 
    name: "Juan Pérez", 
    email: "juan@example.com",
    avatarSrc: "https://..." 
  }}
  items={[
    { label: 'Perfil', value: 'profile', icon: <User /> },
    { label: 'Salir', value: 'logout', icon: <LogOut /> }
  ]}
  onSelect={(value) => console.log(value)}
/>
```

---

## 🚀 Desarrollo en el Monorepo

Si estás trabajando en el monorepo, puedes desarrollar y ver los cambios en tiempo real.

### Estructura del proyecto

```
design-system/
├── apps/
│   └── react-demo/          # Aplicación de demo
├── packages/
│   ├── react/               # Componentes React
│   │   ├── src/
│   │   │   ├── components/  # Todos los componentes
│   │   │   ├── hooks/       # Custom hooks
│   │   │   └── tokens/      # Design tokens (colores, spacing, etc)
│   │   └── dist/            # Archivos compilados
│   └── tokens/              # Tokens compartidos (preset + CSS)
│       ├── src/
│       │   ├── tailwind-preset.js
│       │   └── tokens.css
│       └── dist/
```

### Comandos de desarrollo

#### 1. Iniciar servidor de desarrollo

Levanta la aplicación demo con hot reload:

```bash
npx nx serve react-demo
# o
npm run dev:react
```

La demo estará disponible en `http://localhost:4200`

#### 2. Compilar el paquete React

Compila todos los componentes a JavaScript y genera tipos TypeScript:

```bash
npx nx build react
# o
npm run build:react
```

Esto genera:
- `packages/react/dist/index.esm.js` - Módulo ESM
- `packages/react/dist/index.cjs.js` - Módulo CommonJS
- `packages/react/dist/src/**/*.d.ts` - Definiciones TypeScript
- `packages/react/dist/styles.css` - Estilos compilados

#### 3. Compilar tokens

Compila el paquete de tokens (preset de Tailwind + CSS):

```bash
npx nx build tokens
# o
npm run build:tokens
```

#### 4. Compilar todo

Compila todos los paquetes del monorepo:

```bash
npx nx run-many --target=build --all
# o
npm run build
```

#### 5. Limpiar builds

Elimina todos los archivos compilados:

```bash
rm -rf packages/react/dist packages/tokens/dist dist/
```

### Flujo de trabajo típico

1. **Hacer cambios en los componentes**: Edita archivos en `packages/react/src/components/`

2. **Ver cambios en la demo**: Si el servidor está corriendo (`nx serve react-demo`), verás los cambios inmediatamente gracias al hot reload.

3. **Compilar para producción**: 
   ```bash
   npx nx build react
   ```

4. **Probar tipos TypeScript**: Después de compilar, verifica que los tipos generados sean correctos revisando `packages/react/dist/src/`.

### Troubleshooting

#### Los estilos no se aplican en la demo

1. Verifica que `apps/react-demo/tailwind.config.js` tenga el preset correcto:
   ```js
   presets: [require('../../packages/tokens/src/tailwind-preset.js')]
   ```

2. Verifica que `apps/react-demo/src/styles.css` importe los tokens:
   ```css
   @import "../../../packages/tokens/src/tokens.css";
   ```

#### Error de tipos TypeScript

1. Recompila el paquete React:
   ```bash
   npx nx build react
   ```

2. Recarga el servidor TypeScript:
   - `Cmd+Shift+P` → "TypeScript: Restart TS Server"

#### Error de módulos no encontrados

Verifica que los aliases en `apps/react-demo/vite.config.ts` apunten correctamente:

```ts
resolve: {
  alias: {
    '@luisvelito/tokens/tailwind-preset': path.resolve(__dirname, '../../packages/tokens/src/tailwind-preset.js'),
    '@luisvelito/tokens/tokens.css': path.resolve(__dirname, '../../packages/tokens/src/tokens.css'),
    '@luisvelito/tokens': path.resolve(__dirname, '../../packages/tokens/src/index.ts'),
    '@luisvelito/react': path.resolve(__dirname, '../../packages/react/src/index.ts'),
  }
}
```

---

## 📤 Publicación a NPM

### Preparar para publicación

1. **Compilar todos los paquetes**:
   ```bash
   npx nx run-many --target=build --all
   ```

2. **Verificar package.json**:
   
   **packages/react/package.json**:
   ```json
   {
     "name": "@luisvelito/react",
     "version": "1.0.0",
     "main": "dist/index.cjs.js",
     "module": "dist/index.esm.js",
     "types": "dist/index.d.ts",
     "exports": {
       ".": {
         "import": "./dist/index.esm.js",
         "require": "./dist/index.cjs.js",
         "types": "./dist/index.d.ts"
       },
       "./styles.css": "./dist/styles.css"
     },
     "files": ["dist", "README.md"],
     "dependencies": {
       "@luisvelito/tokens": "^1.0.0"
     },
     "peerDependencies": {
       "react": "^18.0.0",
       "react-dom": "^18.0.0",
       "lucide-react": "^0.263.0"
     }
   }
   ```

   **packages/tokens/package.json**:
   ```json
   {
     "name": "@luisvelito/tokens",
     "version": "1.0.0",
     "main": "dist/index.cjs.js",
     "module": "dist/index.esm.js",
     "types": "dist/index.d.ts",
     "exports": {
       ".": {
         "import": "./dist/index.esm.js",
         "require": "./dist/index.cjs.js",
         "types": "./dist/index.d.ts"
       },
       "./tailwind-preset": "./dist/tailwind-preset.js",
       "./tokens.css": "./dist/tokens.css"
     },
     "files": ["dist", "README.md"]
   }
   ```

3. **Publicar**:
   ```bash
   cd packages/tokens
   npm publish --access public
   
   cd ../react
   npm publish --access public
   ```

---

## 🎨 Personalización

### Modificar colores y design tokens

Edita los archivos en `packages/tokens/src/`:

- `tokens.css` - Variables CSS (colores, radius, shadows)
- `tailwind-preset.js` - Configuración de Tailwind

```css
/* tokens.css */
@layer base {
  :root {
    --primary: 217 91% 60%;
    --primary-foreground: 0 0% 100%;
    --radius: 0.5rem;
  }
}
```

### Crear componentes personalizados

Usa los componentes base para crear tus propios componentes:

```tsx
import { Button, Card, Input } from '@luisvelito/react';

export function LoginCard() {
  return (
    <Card title="Iniciar Sesión" padding="lg">
      <div className="space-y-4">
        <Input placeholder="Email" />
        <Input type="password" placeholder="Contraseña" />
        <Button variant="primary" fullWidth>
          Ingresar
        </Button>
      </div>
    </Card>
  );
}
```

---

## 📝 Licencia

MIT

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 📞 Soporte

Si encuentras algún problema o tienes preguntas, abre un issue en el repositorio.
