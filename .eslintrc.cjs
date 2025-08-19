module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/order': ['warn', { 'newlines-between': 'always', 'alphabetize': { 'order': 'asc' } }]
  },
  ignorePatterns: ['dist', 'typesense-data', 'playwright-report', 'coverage']
}