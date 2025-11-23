import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-demo',
  plugins: [react(), nxViteTsPaths()],
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.cjs')
  },
  resolve: {
    alias: [
      {
        find: '@luisvelito/react/tokens.css',
        replacement: path.resolve(__dirname, '../../packages/react/src/tokens.css')
      },
      {
        find: '@luisvelito/react/preset',
        replacement: path.resolve(__dirname, '../../packages/react/src/preset.js')
      },
      {
        find: '@luisvelito/react',
        replacement: path.resolve(__dirname, '../../packages/react/src/index.ts')
      },
      {
        find: 'react',
        replacement: path.resolve(__dirname, '../../node_modules/react')
      },
      {
        find: 'react-dom',
        replacement: path.resolve(__dirname, '../../node_modules/react-dom')
      }
    ]
  },
  server: {
    port: 4200,
    host: 'localhost'
  },
  build: {
    outDir: '../../dist/apps/react-demo',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});