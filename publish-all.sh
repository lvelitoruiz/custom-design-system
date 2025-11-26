#!/bin/bash

set -e

echo "🚀 Iniciando proceso de publicación..."
echo ""

# Verificar que estás logueado en npm
if ! npm whoami > /dev/null 2>&1; then
  echo "❌ No estás logueado en npm"
  echo "Por favor ejecuta: npm login"
  exit 1
fi

echo "✅ Usuario npm: $(npm whoami)"
echo ""

# Compilar solo los paquetes publicables (no los demos)
echo "🔨 Compilando paquetes..."
npx nx run-many --target=build --projects=tokens,utils,react,vue,angular

if [ $? -ne 0 ]; then
  echo "❌ Error al compilar los paquetes"
  exit 1
fi

echo "✅ Paquetes compilados exitosamente"
echo ""

# Función para publicar un paquete
publish_package() {
  local package_name=$1
  local package_path="dist/packages/$package_name"
  
  echo "📦 Publicando $package_name..."
  
  if [ ! -d "$package_path" ]; then
    echo "❌ No se encontró el directorio: $package_path"
    return 1
  fi
  
  cd "$package_path"
  
  # Verificar si ya existe esta versión
  local current_version=$(node -p "require('./package.json').version")
  local package_full_name=$(node -p "require('./package.json').name")
  
  if npm view "$package_full_name@$current_version" version > /dev/null 2>&1; then
    echo "⚠️  La versión $current_version de $package_full_name ya está publicada"
    cd ../../..
    return 0
  fi
  
  npm publish --access public
  
  if [ $? -eq 0 ]; then
    echo "✅ $package_name publicado correctamente"
  else
    echo "❌ Error al publicar $package_name"
    cd ../../..
    return 1
  fi
  
  cd ../../..
  echo ""
}

# Publicar en orden (dependencias primero)
publish_package "tokens"
publish_package "utils"
publish_package "react"
publish_package "vue"
publish_package "angular"

echo ""
echo "🎉 ¡Proceso de publicación completado!"
echo ""
echo "Verifica tus paquetes en:"
echo "  - https://www.npmjs.com/package/@luisvelito/react"
echo "  - https://www.npmjs.com/package/@luisvelito/vue"
echo "  - https://www.npmjs.com/package/@luisvelito/angular"
echo "  - https://www.npmjs.com/package/@luisvelito/tokens"
echo "  - https://www.npmjs.com/package/@luisvelito/utils"

