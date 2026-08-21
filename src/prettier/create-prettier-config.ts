import type { Config } from 'prettier';
import { checkModuleInstalled } from '../utils';

export function createPrettierConfig(sortImports?: boolean) {
  const config = {
    printWidth: 100,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    arrowParens: 'avoid',
    trailingComma: 'none',
    overrides: [
      {
        files: '*.{css,sass,scss,less,styl}',
        options: {
          singleQuote: false
        }
      }
    ],
    plugins: []
  } satisfies Config;

  if (sortImports) {
    checkModuleInstalled('@ianvs/prettier-plugin-sort-imports');

    (config.plugins as string[]).push('@ianvs/prettier-plugin-sort-imports');
  }

  return config;
}
