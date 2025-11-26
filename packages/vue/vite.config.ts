import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [
    vuePlugin(),
    {
      name: 'copy-files',
      closeBundle() {
        // Copiar package.json y README.md al dist
        copyFileSync(
          resolve(__dirname, 'package.json'),
          resolve(__dirname, '../../dist/packages/vue/package.json')
        );
        copyFileSync(
          resolve(__dirname, 'README.md'),
          resolve(__dirname, '../../dist/packages/vue/README.md')
        );
      },
    },
  ],
  build: {
    outDir: '../../dist/packages/vue',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'LuisvelitoVue',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

