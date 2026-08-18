import type { OxlintConfig } from 'oxlint';

export const oxlintEslintRules = {} satisfies OxlintConfig['rules'];

export const oxlintImportRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level-if-only-type-imports'],
  'import/first': ['error', 'absolute-first'],
  'import/namespace': 'error',
  'import/no-absolute-path': 'error',
  'import/no-cycle': 'error',
  'import/no-default-export': 'off',
  'import/no-self-import': 'error'
} satisfies OxlintConfig['rules'];

export const oxlintJsdocRules = {
  'jsdoc/check-property-names': 'error',
  'jsdoc/require-param': 'error',
  'jsdoc/require-param-description': 'off',
  'jsdoc/require-param-name': 'error',
  'jsdoc/require-param-type': 'error'
} satisfies OxlintConfig['rules'];

export const oxlintJsxA11yRules = {
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/anchor-is-valid': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'warn',
  'jsx-a11y/lang': 'error'
} satisfies OxlintConfig['rules'];

export const oxlintNodeRules = {
  'node/exports-style': ['error', 'module.exports'],
  'node/no-new-require': 'error'
} satisfies OxlintConfig['rules'];

export const oxlintReactRules = {
  'react/exhaustive-deps': 'error',
  'react/forward-ref-uses-ref': 'error',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'function-expression',
      unnamedComponents: 'arrow-function'
    }
  ],
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
  'react/prefer-es6-class': 'deny',
  'react/prefer-function-component': 'error',
  'react/rules-of-hooks': 'error',
  'react/style-prop-object': 'error'
} satisfies OxlintConfig['rules'];

export const oxlintTypescriptRules = {
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
  'typescript/no-empty-interface': 'error',
  'typescript/no-empty-object-type': 'error',
  'typescript/no-namespace': 'error',
  'typescript/prefer-function-type': 'error'
} satisfies OxlintConfig['rules'];

export const oxlintUnicornRules = {
  'unicorn/empty-brace-spaces': 'error',
  'unicorn/filename-case': [
    'warn',
    {
      case: 'kebabCase'
    }
  ]
} satisfies OxlintConfig['rules'];

export const oxlintConfig = {
  plugins: [
    'eslint',
    'import',
    'jest',
    'jsdoc',
    'jsx-a11y',
    'node',
    'react',
    'typescript',
    'unicorn',
    'vitest'
  ],
  env: {
    browser: true,
    builtin: true
  },
  rules: {
    ...oxlintEslintRules,
    ...oxlintImportRules,
    ...oxlintJsdocRules,
    ...oxlintJsxA11yRules,
    ...oxlintNodeRules,
    ...oxlintReactRules,
    ...oxlintTypescriptRules,
    ...oxlintUnicornRules
  }
} satisfies OxlintConfig;
