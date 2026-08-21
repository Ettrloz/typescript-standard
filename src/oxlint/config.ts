import type { OxlintConfig } from 'oxlint';

export const oxlintConfig = {
  plugins: ['import', 'jsdoc', 'jsx-a11y', 'react', 'typescript', 'unicorn'],
  env: {
    browser: true,
    builtin: true
  },
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level-if-only-type-imports'],
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'error',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/lang': 'error',
    'react/exhaustive-deps': 'error',
    'react/forward-ref-uses-ref': 'error',
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx']
      }
    ],
    'react/jsx-fragments': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/prefer-function-component': 'error',
    'react/rules-of-hooks': 'error',
    'react/style-prop-object': 'error',
    'typescript/array-type': 'error',
    'typescript/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as'
      }
    ],
    'typescript/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports'
      }
    ],
    'typescript/no-namespace': 'error',
    'typescript/prefer-function-type': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/filename-case': [
      'warn',
      {
        case: 'kebabCase'
      }
    ]
  }
} satisfies OxlintConfig;
