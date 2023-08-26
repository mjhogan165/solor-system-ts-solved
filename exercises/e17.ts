export function minBy<T>(array: T[], cb: (arg: T) => number) {
  array.sort((a, b) => (cb(b) > cb(a) ? -1 : 1));
  return array[0];
}

export function maxBy<T>(array: T[], cb: (arg: T) => number) {
  array.sort((a, b) => (cb(b) < cb(a) ? -1 : 1));
  return array[0];
}
