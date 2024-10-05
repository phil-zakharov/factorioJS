import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
// import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
// import eslintPluginSecurity from 'eslint-plugin-security';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['*.ts'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      // unicorn: eslintPluginUnicorn,
      // sonarjs: eslintPluginSonarjs,
      // security: eslintPluginSecurity,
    },
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',

      // // Best practices
      // eqeqeq: 'error',
      // curly: 'error',
      // 'no-console': 'error',
      // 'no-eval': 'error',
      // 'no-implicit-coercion': 'error',
      // 'no-useless-return': 'error',

      // // Import rules
      // 'import/order': [
      //   'error',
      //   {
      //     groups: [['builtin', 'external', 'internal']],
      //     'newlines-between': 'always',
      //   },
      // ],
      // 'import/no-unresolved': 'error',
      // 'import/no-duplicates': 'error',

      // // Unicorn rules
      // 'unicorn/prefer-ternary': 'error',
      // 'unicorn/no-array-for-each': 'error',
      // 'unicorn/filename-case': ['error', { case: 'kebabCase' }],

      // // SonarJS rules
      // 'sonarjs/no-duplicate-string': 'error',
      // 'sonarjs/no-identical-functions': 'error',

      // // Security rules
      // 'security/detect-object-injection': 'error',
      // 'security/detect-non-literal-fs-filename': 'error',

      // Prettier rules (integrates Prettier formatting as ESLint rules)
      'prettier/prettier': 'error',
    },
  },
];
