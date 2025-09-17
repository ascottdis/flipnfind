import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: 'lodash',
              message: 'Import specific lodash functions from lodash/<module> or prefer native APIs',
            },
            {
              name: 'moment',
              message: 'Moment is heavy. Prefer date-fns or Intl.DateTimeFormat',
            },
          ],
          patterns: [
            {
              group: ['lodash/*'],
              importNames: ['default'],
              message: 'Avoid default import from lodash subpaths; import named functions only',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/vite.config.*', '**/*.config.*', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-undef': 'off',
    },
  },
])
