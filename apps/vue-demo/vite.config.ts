import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/vue-demo',
  plugins: [vuePlugin(), nxViteTsPaths()],
  resolve: {
    alias: {
      '@luisvelito/tokens/tokens.css': path.resolve(__dirname, '../../packages/tokens/src/tokens.css'),
      '@luisvelito/tokens/tailwind-preset': path.resolve(__dirname, '../../packages/tokens/src/tailwind-preset.js'),
      '@luisvelito/tokens': path.resolve(__dirname, '../../packages/tokens/src'),
      '@luisvelito/vue': path.resolve(__dirname, '../../dist/packages/vue'),
    },
  },
  server: {
    port: 4201,
    host: 'localhost'
  },
  build: {
    outDir: '../../dist/apps/vue-demo',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});