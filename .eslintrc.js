module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    // Prevent incorrect nesting of elements and improper indentation
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }],
    
    // This is critical for preventing the specific errors we were facing
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    
    // Ensure consistent nesting within JSX elements
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-spacing': ['error', {'when': 'never', 'children': true}],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', {'maximum': 1, 'when': 'multiline'}],
    
    // Check for common errors in JSX
    'react/no-unescaped-entities': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-key': 'error',
    'react/jsx-uses-vars': 'error',
    'react/self-closing-comp': 'error',
    
    // Enforce proper prop types and default props
    'react/prop-types': 'off', // We're using TypeScript, so we can disable this
    
    // Enforce consistent indentation
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    
    // Prevent stray console logs in production code
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    
    // Prevent multiple empty lines
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    
    // Enforce semicolons
    'semi': ['error', 'always'],
    
    // Allow TypeScript declarations
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};