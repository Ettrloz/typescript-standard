import type { OxfmtConfig } from 'oxfmt';

export const oxfmtConfig = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  trailingComma: 'none',
  sortImports: {
    newlinesBetween: false
  },
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: ['*.{css,sass,scss,less}'],
      options: {
        singleQuote: false
      }
    }
  ]
} satisfies OxfmtConfig;
