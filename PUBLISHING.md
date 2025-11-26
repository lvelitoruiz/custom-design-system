# Guía de Publicación a NPM

Esta guía explica cómo publicar los paquetes del sistema de diseño a NPM.

## 📋 Prerequisitos

### 1. Cuenta en NPM

```bash
# Crear cuenta en npmjs.com
# Luego login desde terminal
npm login
```

### 2. Verificar Login

```bash
npm whoami
# Debe mostrar tu usuario
```

### 3. Configurar Organización (Opcional)

Si quieres publicar bajo una organización:

```bash
# En npmjs.com, crear organización
# Ejemplo: @luisvelito
```

## 🔧 Preparación de Paquetes

### 1. Verificar package.json

Cada paquete debe tener un `package.json` correcto:

```json
{
  "name": "@luisvelito/react",
  "version": "1.0.0",
  "description": "Componentes React para el sistema de diseño",
  "main": "./dist/index.cjs.js",
  "module": "./dist/index.esm.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs.js",
      "types": "./dist/index.d.ts"
    },
    "./dist/styles.css": "./dist/styles.css"
  },
  "files": [
    "dist",
    "README.md"
  ],
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/usuario/design-system"
  },
  "keywords": [
    "react",
    "components",
    "design-system",
    "ui",
    "tailwind"
  ],
  "author": "Tu Nombre",
  "license": "MIT",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

### 2. Compilar Paquetes

```bash
# Compilar todos los paquetes
npm run build

# O individual
nx build react
nx build vue
nx build angular
nx build tokens
nx build utils
```

### 3. Verificar Contenido del Build

```bash
# Ver archivos que se publicarán
cd dist/packages/react
npm pack --dry-run

# Esto muestra:
# - Qué archivos se incluirán
# - Tamaño del paquete
# - Warnings o errores
```

## 📦 Publicación

### Método 1: Publicación Manual

#### React

```bash
cd dist/packages/react
npm publish --access public
```

#### Vue

```bash
cd dist/packages/vue
npm publish --access public
```

#### Angular

```bash
cd dist/packages/angular
npm publish --access public
```

#### Tokens

```bash
cd dist/packages/tokens
npm publish --access public
```

#### Utils

```bash
cd dist/packages/utils
npm publish --access public
```

### Método 2: Script Automatizado

Crear un script `publish-all.sh`:

```bash
#!/bin/bash

# Compilar todos los paquetes
echo "🔨 Compilando paquetes..."
npm run build

# Publicar cada paquete
echo "📦 Publicando @luisvelito/tokens..."
cd dist/packages/tokens && npm publish --access public
cd ../../..

echo "📦 Publicando @luisvelito/utils..."
cd dist/packages/utils && npm publish --access public
cd ../../..

echo "📦 Publicando @luisvelito/react..."
cd dist/packages/react && npm publish --access public
cd ../../..

echo "📦 Publicando @luisvelito/vue..."
cd dist/packages/vue && npm publish --access public
cd ../../..

echo "📦 Publicando @luisvelito/angular..."
cd dist/packages/angular && npm publish --access public
cd ../../..

echo "✅ Todos los paquetes publicados!"
```

```bash
# Dar permisos de ejecución
chmod +x publish-all.sh

# Ejecutar
./publish-all.sh
```

## 🔄 Actualizar Versiones

### Versionado Semántico (SemVer)

- **Patch** (1.0.x): Bug fixes → `npm version patch`
- **Minor** (1.x.0): Nuevas características → `npm version minor`
- **Major** (x.0.0): Breaking changes → `npm version major`

### Actualizar Versión

```bash
# En cada package.json de source (packages/react/package.json)
# Actualizar manualmente o usar:

cd packages/react
npm version minor
# Esto actualiza de 1.0.0 a 1.1.0

# Repetir para todos los paquetes
cd ../vue
npm version minor

cd ../angular
npm version minor
```

### Script de Versioning

`update-versions.sh`:

```bash
#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "❌ Error: Especifica una versión"
  echo "Uso: ./update-versions.sh 1.1.0"
  exit 1
fi

echo "🔄 Actualizando a versión $VERSION..."

# Actualizar cada paquete
cd packages/react && npm version $VERSION --no-git-tag-version
cd ../vue && npm version $VERSION --no-git-tag-version
cd ../angular && npm version $VERSION --no-git-tag-version
cd ../tokens && npm version $VERSION --no-git-tag-version
cd ../utils && npm version $VERSION --no-git-tag-version
cd ../..

echo "✅ Versiones actualizadas a $VERSION"
```

```bash
chmod +x update-versions.sh
./update-versions.sh 1.1.0
```

## 🧪 Probar en Proyectos Reales

### Opción 1: npm link (Local)

```bash
# En el paquete
cd dist/packages/react
npm link

# En tu proyecto
cd ~/mi-proyecto
npm link @luisvelito/react
```

### Opción 2: Instalar desde tarball

```bash
# Crear tarball
cd dist/packages/react
npm pack
# Genera: luisvelito-react-1.0.0.tgz

# En tu proyecto
npm install /ruta/al/archivo/luisvelito-react-1.0.0.tgz
```

### Opción 3: Instalar desde NPM (Publicado)

```bash
# Después de publicar
npm install @luisvelito/react@latest
```

### Opción 4: Usar Verdaccio (Registry Local)

```bash
# Instalar Verdaccio
npm install -g verdaccio

# Ejecutar
verdaccio

# Publicar localmente
npm publish --registry http://localhost:4873

# En tu proyecto
npm install @luisvelito/react --registry http://localhost:4873
```

## 🔍 Verificación Post-Publicación

### 1. Verificar en NPM

```bash
# Ver info del paquete
npm info @luisvelito/react

# Ver versiones disponibles
npm view @luisvelito/react versions
```

### 2. Probar Instalación

```bash
# Crear proyecto de prueba
mkdir test-project
cd test-project
npm init -y
npm install @luisvelito/react
```

### 3. Verificar Exportaciones

```javascript
// test.js
const { Button } = require('@luisvelito/react');
console.log(Button); // Debe mostrar el componente
```

## 📝 Checklist de Publicación

- [ ] ✅ Código compilado sin errores
- [ ] ✅ Tests pasando
- [ ] ✅ Linter sin errores
- [ ] ✅ Version actualizada en package.json
- [ ] ✅ CHANGELOG.md actualizado
- [ ] ✅ README.md actualizado
- [ ] ✅ Commit y push a Git
- [ ] ✅ Tag de Git creado
- [ ] ✅ Packages compilados (`npm run build`)
- [ ] ✅ Publicado a NPM
- [ ] ✅ Verificado en npmjs.com
- [ ] ✅ Probado en proyecto real

## 🚨 Errores Comunes

### Error: "You do not have permission to publish"

```bash
# Verificar que estás logueado
npm whoami

# Re-login
npm logout
npm login
```

### Error: "Package name already exists"

- Cambiar el nombre en package.json
- O usar un scope: `@username/package-name`

### Error: "Version already published"

```bash
# Incrementar versión
npm version patch
# Luego publicar de nuevo
```

### Error: "402 Payment Required"

- Paquetes con scope privados requieren plan de pago
- Usar `"publishConfig": { "access": "public" }`

## 🔐 Seguridad

### Tokens de NPM

```bash
# Crear token
# En npmjs.com → Account Settings → Access Tokens

# Usar en CI/CD
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
```

### .npmignore

Crear `.npmignore` en cada paquete:

```
src/
*.test.ts
*.test.tsx
*.spec.ts
.git/
node_modules/
tsconfig.json
rollup.config.js
```

## 🤖 Automatización con CI/CD

### GitHub Actions

`.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - run: npm install
      - run: npm run build
      - run: cd dist/packages/react && npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 📚 Recursos

- [NPM Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [NPM Publishing Guide](https://docs.npmjs.com/cli/v9/commands/npm-publish)

