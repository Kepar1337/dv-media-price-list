import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript files — parser + recommended TS rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Spread flat/recommended rules directly (no type-checking needed)
      ...tsPlugin.configs['flat/recommended'][1].rules,
      ...tsPlugin.configs['flat/recommended'][2].rules,

      // Relax rules that are noisy for production code
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Next.js App Router rules
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.flatConfig.recommended.rules,
    },
    settings: {
      next: {
        rootDir: '.',
      },
    },
  },

  // Ignore build output, generated files, and prototype source
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'project/**',
      'out/**',
      'next-env.d.ts',
    ],
  },
];
