import { globSync } from 'glob';
import { defineConfig } from 'rolldown';

const base = {
  input: globSync('src/**/*.ts'),
  external: ['oxfmt', 'oxlint']
};

export default defineConfig([
  {
    ...base,
    output: {
      dir: 'dist/esm',
      format: 'es',
      cleanDir: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].mjs',
      sourcemap: true
    }
  },
  {
    ...base,
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      cleanDir: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs',
      sourcemap: true
    }
  }
]);
