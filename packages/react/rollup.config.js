export default (config) => {
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