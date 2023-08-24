// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(array: T[], callback: (arg: T) => boolean) {
  let result;
  for (const element of array) {
    if (callback(element)) {
      result = element;
      break;
    }
  }
  return result;
  // body
}
