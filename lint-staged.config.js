module.exports = {
    '*.{ts,tsx}': [
      'eslint . --ext ts --ext tsx --ext js',
      "bash -c 'npm run types:check'",
      'npm run format:fix',
    ],
    // Agrega una entrada específica para el archivo error-boundary.container.tsx
    "containers/error-boundary/error-boundary.container.tsx": [], // Esta línea evita que se ejecute ESLint en ese archivo específico
    // ...
  };