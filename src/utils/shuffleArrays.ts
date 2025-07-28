export default function shuffleArrays<T>(
  array1: T[],
  array2: T[],
  isFirstElementFixed: boolean
): T[] {
  const firstElement = array1[0];
  const array = [...array1, ...array2];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return isFirstElementFixed ? [firstElement, ...array] : array;
}
