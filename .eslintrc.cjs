// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  globals: {
    __app_id: 'readonly', // Indica que __app_id es una variable global de solo lectura
    // Si usas __firebase_config o __initial_auth_token en otros hooks, también podrías agregarlas aquí:
    // __firebase_config: 'readonly',
    // __initial_auth_token: 'readonly',
  },
};