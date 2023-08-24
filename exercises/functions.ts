export const sumArray = (array: number[]) => {
  return array.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );
};
