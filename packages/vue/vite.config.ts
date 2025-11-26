import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vuePlugin()],
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

