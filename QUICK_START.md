# 🚀 Guía Rápida de Publicación

## Pasos para Publicar a NPM

### 1. Preparación (Solo primera vez)

```bash
# Login en NPM
npm login

# Verificar que estás logueado
npm whoami
```

### 2. Actualizar Versión

```bash
# Actualizar versión en todos los paquetes
./update-version.sh 1.0.0

# Ver cambios
git diff

# Commit y tag
git add .
git commit -m "chore: bump version to 1.0.0"
git tag v1.0.0
git push && git push --tags
```

### 3. Compilar y Publicar

```bash
# Compilar todos los paquetes
npm run build

# Publicar automáticamente
./publish-all.sh
```

## Probar en Proyectos Reales

### Opción 1: npm link (Desarrollo Local)

```bash
# En el paquete compilado
cd dist/packages/react
npm link

# En tu proyecto
cd ~/mi-proyecto
npm link @luisvelito/react
```

### Opción 2: Instalar desde NPM (Después de publicar)

```bash
# En tu proyecto
npm install @luisvelito/react@latest
```

### Opción 3: Instalar desde tarball

```bash
# Crear tarball
cd dist/packages/react
npm pack
# Genera: luisvelito-react-1.0.0.tgz

# En tu proyecto
npm install /ruta/a/luisvelito-react-1.0.0.tgz
```

## Comandos Útiles

```bash
# Compilar todos los paquetes
npm run build

# Compilar un paquete específico
nx build react
nx build vue
nx build angular

# Ejecutar demos
npm run serve:react   # http://localhost:4200
npm run serve:vue     # http://localhost:4201
npm run serve:angular # http://localhost:4202

# Ver info de un paquete en NPM
npm info @luisvelito/react

# Verificar versiones publicadas
npm view @luisvelito/react versions
```

## Estructura de Versiones

- **Patch** (1.0.X): Bug fixes
  ```bash
  ./update-version.sh 1.0.1
  ```

- **Minor** (1.X.0): Nuevas características
  ```bash
  ./update-version.sh 1.1.0
  ```

- **Major** (X.0.0): Breaking changes
  ```bash
  ./update-version.sh 2.0.0
  ```

## Checklist de Publicación

- [ ] Tests pasando
- [ ] Linter sin errores
- [ ] Versión actualizada
- [ ] Commit y tag en Git
- [ ] Paquetes compilados
- [ ] Publicado a NPM
- [ ] Verificado en npmjs.com
- [ ] Probado en proyecto real

## Recursos

- [README Principal](./README.md)
- [Guía de Desarrollo](./DEVELOPMENT.md)
- [Guía de Publicación](./PUBLISHING.md)
- [NPM: @luisvelito](https://www.npmjs.com/~luisvelito)

