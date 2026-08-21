export function checkModuleInstalled(name: string) {
  try {
    import(name);
  } catch (_) {
    throw new Error(`Could cannot find module '${name}' did you mean to install it first?`);
  }
}
