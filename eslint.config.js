import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/.react-router/**/*.ts'],
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // (Optional) Re-specify which files these rules apply to
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    rules: {
      'no-console': 'warn', // Turn on console.log warnings
      'no-unused-vars': 'warn', // Show warnings for unused vars
      // Add any other rules you want
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
