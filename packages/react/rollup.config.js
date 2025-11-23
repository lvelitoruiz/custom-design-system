import postcss from 'rollup-plugin-postcss';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (config) => {
  // Add PostCSS plugin for processing styles
  config.plugins.push(
    postcss({
      extract: resolve('dist/packages/react/styles.css'),
      config: {
        path: resolve(__dirname, 'postcss.config.cjs'),
      },
      minimize: true,
      sourceMap: true,
    })
  );

  // Ensure external dependencies are properly handled
  const currentExternal = Array.isArray(config.external) ? config.external : [];
  config.external = [
    ...currentExternal,
    'react',
    'react-dom',
    'react/jsx-runtime',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
  ];

  return config;
};