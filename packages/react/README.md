# @luisvelito/react

Componentes React del sistema de diseño Verve, construidos con TypeScript y Tailwind CSS.

## 📦 Instalación

```bash
npm install @luisvelito/react
# o
yarn add @luisvelito/react
# o
pnpm add @luisvelito/react
```

## 🚀 Uso Básico

### 1. Importar Estilos

```tsx
// En tu archivo principal (App.tsx o main.tsx)
import '@luisvelito/react/dist/styles.css';
```

### 2. Importar Componentes

```tsx
import { Button, Input, Card } from '@luisvelito/react';

function App() {
  return (
    <Card title="Bienvenido">
      <Input placeholder="Escribe algo..." />
      <Button variant="primary">Enviar</Button>
    </Card>
  );
}
```

## 📚 Componentes Disponibles

### Atoms (18 componentes)

#### Button

```tsx
import { Button } from '@luisvelito/react';

<Button variant="primary" size="md" onClick={() => console.log('Click!')}>
  Click me
</Button>

// Variantes: primary, secondary, outline, ghost, danger, success
// Tamaños: sm, md, lg
// Props adicionales: disabled, loading, fullWidth, leftIcon, rightIcon
```

#### Input

```tsx
import { Input } from '@luisvelito/react';
import { User } from 'lucide-react';

<Input
  placeholder="Email"
  type="email"
  leftIcon={<User size={16} />}
  validation={[{ type: 'email', message: 'Email inválido' }]}
  validateOnBlur
  clearable
/>
```

#### Select

```tsx
import { Select } from '@luisvelito/react';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

<Select
  options={options}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Choose option..."
  searchable
  clearable
/>
```

#### Checkbox

```tsx
import { Checkbox } from '@luisvelito/react';

<Checkbox
  label="Accept terms"
  checked={accepted}
  onChange={setAccepted}
/>
```

#### Radio

```tsx
import { Radio } from '@luisvelito/react';

<Radio
  name="option"
  label="Option 1"
  value="1"
  checked={selected === '1'}
  onChange={() => setSelected('1')}
/>
```

### Molecules (10 componentes)

#### Card

```tsx
import { Card, Button } from '@luisvelito/react';

<Card
  title="My Card"
  description="Card description"
  padding="md"
  shadow="sm"
  header={<div>Header Content</div>}
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  }
>
  Card content goes here
</Card>
```

#### Alert

```tsx
import { Alert } from '@luisvelito/react';
import { Info } from 'lucide-react';

<Alert
  variant="info"
  title="Information"
  description="This is an informational message"
  icon={<Info size={20} />}
  closable
  onClose={() => console.log('Closed')}
/>
```

#### Tabs

```tsx
import { Tabs } from '@luisvelito/react';

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Settings', value: 'settings' },
];

<Tabs
  tabs={tabs}
  value={activeTab}
  onChange={setActiveTab}
  fullWidth
/>
```

#### Accordion

```tsx
import { Accordion } from '@luisvelito/react';

const items = [
  {
    id: '1',
    title: 'Question 1',
    content: 'Answer 1'
  },
  {
    id: '2',
    title: 'Question 2',
    content: 'Answer 2'
  }
];

<Accordion
  items={items}
  defaultOpen={['1']}
  multiple // Allow multiple open
/>
```

### Organisms (14 componentes)

#### Modal

```tsx
import { Modal, Button } from '@luisvelito/react';

const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open Modal</Button>
  
  <Modal
    open={open}
    onClose={() => setOpen(false)}
    title="Modal Title"
    size="md"
    footer={
      <>
        <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </>
    }
  >
    <p>Modal content</p>
  </Modal>
</>
```

#### Navbar

```tsx
import { Navbar, Button } from '@luisvelito/react';

<Navbar
  logo={<span className="font-bold">Brand</span>}
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]}
  rightContent={<Button size="sm">Sign In</Button>}
/>
```

#### Sidebar

```tsx
import { Sidebar } from '@luisvelito/react';
import { Home, Settings } from 'lucide-react';

const items = [
  {
    id: 'home',
    label: 'Home',
    icon: <Home size={20} />,
    href: '/',
    active: true
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={20} />,
    href: '/settings'
  }
];

<Sidebar items={items} collapsed={false} />
```

## 🎨 Personalización

### Dark Mode

El sistema soporta dark mode automáticamente:

```tsx
// En tu componente principal
useEffect(() => {
  document.documentElement.classList.toggle('dark', isDark);
}, [isDark]);
```

### Tailwind Config

Extiende tu `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@luisvelito/react/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        // ...más colores
      },
    },
  },
  plugins: [],
};
```

### CSS Variables

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ...más variables */
}

.dark {
  --primary: 210 40% 98%;
  --secondary: 217.2 32.6% 17.5%;
  /* ...más variables */
}
```

## 🔧 TypeScript

Todos los componentes están completamente tipados:

```tsx
import { ButtonProps, InputProps, CardProps } from '@luisvelito/react';

// Props tipadas automáticamente
const MyButton: React.FC<{ customProp: string }> = ({ customProp }) => {
  return <Button variant="primary">{customProp}</Button>;
};
```

## 📖 Ejemplos Completos

### Formulario de Login

```tsx
import { Card, FormField, Input, Button } from '@luisvelito/react';
import { Mail, Lock } from 'lucide-react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Card title="Login" className="max-w-md mx-auto">
      <div className="space-y-4">
        <FormField label="Email" required>
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail size={16} />}
          />
        </FormField>
        
        <FormField label="Password" required>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<Lock size={16} />}
          />
        </FormField>
        
        <Button variant="primary" fullWidth>
          Sign In
        </Button>
      </div>
    </Card>
  );
}
```

### Dashboard Layout

```tsx
import { Navbar, Sidebar, Card, KpiCard } from '@luisvelito/react';
import { DollarSign, Users } from 'lucide-react';

function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar logo={<span className="font-bold">Dashboard</span>} />
      
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard
              label="Revenue"
              value="$45,231"
              icon={<DollarSign size={24} />}
              trend="up"
              trendValue="+12.5%"
            />
            <KpiCard
              label="Users"
              value="1,234"
              icon={<Users size={24} />}
              trend="up"
              trendValue="+8.2%"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
```

## 🤝 Contribuir

Ver [Guía de Desarrollo](../../DEVELOPMENT.md)

## 📄 Licencia

MIT © Luis Velito
