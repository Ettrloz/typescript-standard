import type { OxlintConfig } from 'oxlint';

export const oxlintEslintRules = {} satisfies OxlintConfig;

export const oxlintConfig = {
  plugins: [
    'eslint',
    'import',
    'jest',
    'jsx-a11y',
    'node',
    'promise',
    'react',
    'react-perf',
    'typescript',
    'unicorn',
    'vitest',
    'vue'
  ],
  env: {
    browser: true,
    builtin: true
  },
  rules: {
    ...oxlintEslintRules
  }
} satisfies OxlintConfig;
