# @luisvelito/angular

Sistema de diseño completo construido con Angular 20, TypeScript y Tailwind CSS. Componentes standalone con soporte completo para formularios reactivos y template-driven forms.

## 🎨 Características

- ✅ **Componentes standalone**: No requiere módulos, 100% standalone
- 🎯 **Angular 20**: Utiliza las últimas características de Angular
- 🎨 **Tailwind CSS**: Estilos utilitarios con preset personalizado
- 🌓 **Dark Mode**: Soporte completo para modo oscuro
- ♿ **Accesible**: Cumple con los estándares WCAG
- 📋 **Forms**: ControlValueAccessor en todos los componentes de formulario
- 🔥 **Flowbite aesthetic**: Diseño moderno y limpio
- 📦 **Tree-shakeable**: Solo importa lo que necesitas

## 📦 Instalación

```bash
npm install @luisvelito/angular @luisvelito/tokens
# o
yarn add @luisvelito/angular @luisvelito/tokens
# o
pnpm add @luisvelito/angular @luisvelito/tokens
```

### Dependencias peer requeridas

```bash
npm install @angular/core @angular/common @angular/forms tailwindcss
```

## ⚙️ Configuración

### 1. Configurar Tailwind CSS

Crea o actualiza tu `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@luisvelito/tokens/tailwind-preset')
  ],
  content: [
    './src/**/*.{html,ts}',
    './node_modules/@luisvelito/angular/**/*.{html,ts,js}',
  ],
  darkMode: 'class',
  // ... resto de tu configuración
}
```

### 2. Configurar PostCSS

Crea `postcss.config.js` en la raíz de tu proyecto:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
```

### 3. Importar estilos CSS

En tu `src/styles.css`:

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Importar tokens del design system */
@import "@luisvelito/tokens/tokens.css";
```

### 4. Usar los componentes

Los componentes son standalone, así que puedes importarlos directamente:

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { ButtonComponent, InputComponent, CheckboxComponent } from '@luisvelito/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, InputComponent, CheckboxComponent],
  template: `
    <ui-button variant="primary">Click Me</ui-button>
    <ui-input placeholder="Enter text..." [(ngModel)]="value"></ui-input>
    <ds-checkbox label="Accept terms" [(ngModel)]="accepted"></ds-checkbox>
  `
})
export class AppComponent {
  value = '';
  accepted = false;
}
```

## 🧩 Componentes Disponibles

### ⚛️ Atoms (Componentes Básicos)

#### Button (`ui-button`)

```typescript
import { ButtonComponent } from '@luisvelito/angular';

@Component({
  imports: [ButtonComponent],
  template: `
    <ui-button variant="primary" size="md">Primary</ui-button>
    <ui-button variant="secondary" [loading]="true">Loading</ui-button>
    <ui-button variant="destructive" [disabled]="true">Disabled</ui-button>
  `
})
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'link'`
- `size`: `'sm' | 'md' | 'lg' | 'icon'`
- `loading`: `boolean`
- `disabled`: `boolean`
- `fullWidth`: `boolean`
- `type`: `'button' | 'submit' | 'reset'`

#### Input (`ui-input`)

Componente de input con validación, loading, y ControlValueAccessor.

```typescript
import { InputComponent } from '@luisvelito/angular';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [InputComponent, FormsModule],
  template: `
    <!-- Basic -->
    <ui-input placeholder="Enter text..." [(ngModel)]="value"></ui-input>
    
    <!-- Con validación -->
    <ui-input 
      type="email"
      placeholder="Email" 
      [(ngModel)]="email"
      [validation]="[{ type: 'email', message: 'Invalid email' }]"
      [validateOnBlur]="true"
      (validationChange)="onValidate($event)"
    ></ui-input>
    
    <!-- Con loading -->
    <ui-input 
      placeholder="Loading..." 
      [(ngModel)]="value"
      [loading]="true"
    ></ui-input>
    
    <!-- Clearable con debounce -->
    <ui-input 
      placeholder="Search..." 
      [(ngModel)]="search"
      [clearable]="true"
      [debounceMs]="300"
    ></ui-input>
  `
})
```

**Props:**
- `type`: `string` - Tipo de input HTML
- `placeholder`: `string`
- `disabled`: `boolean`
- `invalid`: `boolean`
- `error`: `string`
- `fullWidth`: `boolean`
- `loading`: `boolean`
- `clearable`: `boolean`
- `validation`: `ValidationRule[]`
- `validateOnChange`: `boolean`
- `validateOnBlur`: `boolean`
- `debounceMs`: `number`
- `leftIcon`: `boolean`
- `rightIcon`: `boolean`

**Outputs:**
- `(validationChange)`: Emite `{isValid: boolean, errors: string[]}`

#### Textarea (`ds-textarea`)

Textarea con auto-resize y ControlValueAccessor.

```typescript
import { TextareaComponent } from '@luisvelito/angular';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [TextareaComponent, FormsModule],
  template: `
    <!-- Basic -->
    <ds-textarea 
      placeholder="Enter message..." 
      [(ngModel)]="message"
    ></ds-textarea>
    
    <!-- Auto-resize -->
    <ds-textarea 
      placeholder="Auto-resize textarea" 
      [(ngModel)]="message"
      [autoResize]="true"
      [minRows]="2"
      [maxRows]="6"
    ></ds-textarea>
    
    <!-- Non-resizable -->
    <ds-textarea 
      placeholder="Fixed size" 
      [(ngModel)]="message"
      [resizable]="false"
    ></ds-textarea>
  `
})
```

**Props:**
- `placeholder`: `string`
- `disabled`: `boolean`
- `readonly`: `boolean`
- `invalid`: `boolean`
- `error`: `string`
- `fullWidth`: `boolean`
- `rows`: `number`
- `cols`: `number`
- `maxlength`: `number`
- `autoResize`: `boolean`
- `minRows`: `number`
- `maxRows`: `number`
- `resizable`: `boolean`

#### Select (`ds-select`)

Select nativo mejorado con ControlValueAccessor.

```typescript
import { SelectComponent, SelectOption } from '@luisvelito/angular';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [SelectComponent, FormsModule],
  template: `
    <ds-select 
      placeholder="Choose option..." 
      [options]="options"
      [(ngModel)]="selected"
    ></ds-select>
  `
})
export class MyComponent {
  options: SelectOption[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Disabled', value: '3', disabled: true },
  ];
  selected = '';
}
```

**Props:**
- `options`: `SelectOption[]` - Array de `{ label, value, disabled? }`
- `placeholder`: `string`
- `disabled`: `boolean`
- `invalid`: `boolean`
- `error`: `string`
- `fullWidth`: `boolean`

#### Checkbox (`ds-checkbox`)

Checkbox con soporte para estado indeterminado y ControlValueAccessor.

```typescript
import { CheckboxComponent } from '@luisvelito/angular';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CheckboxComponent, FormsModule],
  template: `
    <!-- Basic -->
    <ds-checkbox 
      label="Accept terms" 
      [(ngModel)]="accepted"
    ></ds-checkbox>
    
    <!-- Indeterminate (Select All) -->
    <ds-checkbox
      label="Select All"
      [(ngModel)]="allSelected"
      [indeterminate]="someSelected"
      (ngModelChange)="handleSelectAll($event)"
    ></ds-checkbox>
    
    <!-- Disabled -->
    <ds-checkbox 
      label="Disabled" 
      [disabled]="true"
    ></ds-checkbox>
    
    <!-- Inline -->
    <ds-checkbox 
      label="Option 1" 
      [inline]="true"
      [(ngModel)]="option1"
    ></ds-checkbox>
  `
})
```

**Props:**
- `label`: `string`
- `disabled`: `boolean`
- `invalid`: `boolean`
- `inline`: `boolean`
- `indeterminate`: `boolean`

---

## 📋 Integración con Formularios

Todos los componentes de formulario implementan `ControlValueAccessor`, por lo que funcionan con:

### Template-driven Forms

```typescript
import { FormsModule } from '@angular/forms';
import { InputComponent, CheckboxComponent } from '@luisvelito/angular';

@Component({
  imports: [FormsModule, InputComponent, CheckboxComponent],
  template: `
    <form #form="ngForm">
      <ui-input 
        name="email"
        [(ngModel)]="user.email"
        required
        email
      ></ui-input>
      
      <ds-checkbox 
        name="terms"
        label="I agree"
        [(ngModel)]="user.terms"
        required
      ></ds-checkbox>
      
      <button [disabled]="!form.valid">Submit</button>
    </form>
  `
})
export class MyComponent {
  user = { email: '', terms: false };
}
```

### Reactive Forms

```typescript
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InputComponent, CheckboxComponent } from '@luisvelito/angular';

@Component({
  imports: [ReactiveFormsModule, InputComponent, CheckboxComponent],
  template: `
    <form [formGroup]="form">
      <ui-input 
        formControlName="email"
        placeholder="Email"
      ></ui-input>
      
      <ds-checkbox 
        formControlName="terms"
        label="I agree to terms"
      ></ds-checkbox>
      
      <button [disabled]="!form.valid">Submit</button>
    </form>
  `
})
export class MyComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    terms: [false, Validators.requiredTrue]
  });
  
  constructor(private fb: FormBuilder) {}
}
```

---

## 🚀 Desarrollo en el Monorepo

Si estás trabajando en el monorepo:

```bash
# Iniciar demo de Angular
npx nx serve angular-demo
# http://localhost:4202

# Compilar paquete Angular
npx nx build angular
```

---

## 📤 Publicación a NPM

El paquete exporta componentes standalone listos para publicar:

```json
{
  "name": "@luisvelito/angular",
  "version": "1.0.0",
  "peerDependencies": {
    "@angular/common": "^20.0.0",
    "@angular/core": "^20.0.0",
    "@angular/forms": "^20.0.0",
    "@luisvelito/tokens": "^1.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

---

## 🎨 Personalización

Los componentes utilizan los tokens de `@luisvelito/tokens`. Para personalizar:

```css
/* Tu styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "@luisvelito/tokens/tokens.css";

/* Sobrescribe tokens */
@layer base {
  :root {
    --primary: 220 90% 55%;  /* Nuevo color primario */
  }
}
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module '@luisvelito/tokens'"

Asegúrate de haber instalado `@luisvelito/tokens`:
```bash
npm install @luisvelito/tokens
```

### Los estilos no se aplican

1. Verifica que tengas el preset en `tailwind.config.js`
2. Verifica que importes `@luisvelito/tokens/tokens.css` en tu `styles.css`
3. Verifica que el `content` incluya `node_modules/@luisvelito/angular/**/*.{html,ts,js}`

### Error de PostCSS

Asegúrate de tener `postcss.config.js` con Tailwind configurado.

---

## 📝 Licencia

MIT

---

## 🤝 Contribuir

Ve el [README principal](../../README.md) del monorepo para instrucciones de contribución.

---

## 📞 Soporte

Si encuentras algún problema o tienes preguntas, abre un issue en el repositorio.

