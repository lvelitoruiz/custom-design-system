# @luisvelito/vue

Vue 3 component library for the design system.

## Installation

```bash
npm install @luisvelito/vue @luisvelito/tokens
```

## Setup

### 1. Import Tokens CSS

In your main entry file (`main.ts`):

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import '@luisvelito/tokens/tokens.css';

createApp(App).mount('#app');
```

### 2. Configure Tailwind CSS

Create or update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@luisvelito/tokens/tailwind-preset')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@luisvelito/vue/**/*.{vue,js,ts,jsx,tsx}',
  ],
};
```

### 3. Add Tailwind directives to your CSS

In your main CSS file (e.g., `styles.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

Components will be available soon. The library structure is ready and configured with:

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Tailwind CSS v3** for styling
- **Shared design tokens** for consistent theming

## Components

Coming soon! We'll be porting all 42 components from React and Angular:

### Atoms (18)
- Button, Input, Textarea, Select, Checkbox, Radio, Switch
- Badge, Tag, Avatar, Icon, Spinner, Progress, Slider
- Divider, Skeleton, Chip, KBD

### Molecules (10)
- Card, Alert, Tabs, Accordion, Dropdown
- FormField, InputGroup, SearchBar, ListItem, Breadcrumbs

### Organisms (14)
- Modal, Drawer, Table, Pagination, Navbar
- Sidebar, Header, Footer, Toolbar, UserMenu
- EmptyState, KpiCard, ListGroup, CardList

## Development

```bash
# Build the package
npm run build

# Run linter
npm run lint

# Run tests
npm run test
```

## License

MIT

