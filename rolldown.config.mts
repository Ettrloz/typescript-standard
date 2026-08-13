import { defineConfig } from 'rolldown';

const input = [
  'src/index.ts',
  'src/oxfmt/config.ts',
  'src/oxfmt/index.ts',
  'src/oxlint/config.ts',
  'src/oxlint/index.ts'
];

const base = {
  input,
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
