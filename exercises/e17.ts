export function minBy<T>(array: T[], cb: (arg: T) => number | string) {
  if (array.length === 0) {
    return undefined;
  }
  let min = array[0];
  for (let el of array) {
    if (cb(el) < cb(min as T)) {
      min = el;
    }
  }
  return min;
  // array.sort((a, b) => (cb(b) > cb(a) ? -1 : 1));
  // return array[0];
}

export function maxBy<T>(array: T[], cb: (arg: T) => number | string) {
  if (array.length === 0) {
    return undefined;
  }
  let min = array[0];
  for (const element of array) {
    if (cb(element) > cb(min as T)) {
      min = element;
    }
  }
  return min;
  // array.sort((a, b) => (cb(b) < cb(a) ? -1 : 1));
  // return array[0];
}
