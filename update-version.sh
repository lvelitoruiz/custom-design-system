#!/bin/bash

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "❌ Error: Especifica una versión"
  echo ""
  echo "Uso: ./update-version.sh <version>"
  echo "Ejemplos:"
  echo "  ./update-version.sh 1.0.0"
  echo "  ./update-version.sh 1.1.0"
  echo "  ./update-version.sh 2.0.0"
  exit 1
fi

echo "🔄 Actualizando versión a $VERSION..."
echo ""

# Actualizar cada paquete
echo "📦 Actualizando packages/react/package.json..."
cd packages/react && npm version $VERSION --no-git-tag-version
cd ../..

echo "📦 Actualizando packages/vue/package.json..."
cd packages/vue && npm version $VERSION --no-git-tag-version
cd ../..

echo "📦 Actualizando packages/angular/package.json..."
cd packages/angular && npm version $VERSION --no-git-tag-version
cd ../..

echo "📦 Actualizando packages/tokens/package.json..."
cd packages/tokens && npm version $VERSION --no-git-tag-version
cd ../..

echo "📦 Actualizando packages/utils/package.json..."
cd packages/utils && npm version $VERSION --no-git-tag-version
cd ../..

echo ""
echo "✅ Todos los paquetes actualizados a versión $VERSION"
echo ""
echo "Próximos pasos:"
echo "  1. Revisar los cambios: git diff"
echo "  2. Commit: git add . && git commit -m \"chore: bump version to $VERSION\""
echo "  3. Tag: git tag v$VERSION"
echo "  4. Push: git push && git push --tags"
echo "  5. Publicar: ./publish-all.sh"

