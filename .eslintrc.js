module.exports = {
    ignorePatterns: ['**/*.js', '**/*.d.ts'],
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-use-before-define': [0],
      '@typescript-eslint/no-empty-function': [1],
      '@typescript-eslint/ban-ts-ignore': [0],
      '@typescript-eslint/no-var-requires': [1],
      '@typescript-eslint/explicit-module-boundary-types': 0
    }
  };
