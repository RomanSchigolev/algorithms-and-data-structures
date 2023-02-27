let randomNumber = () => Math.floor(Math.random() * 100);
/**
 *
 * @param {number} length
 * @param {number} max
 * @return {number[]}
 */
const randomArray = (length, max) =>
  [...new Array(length)].map((_) => Math.round(Math.random() * max));

/**
 *
 * @param {number[]} array
 * @return {number[]}
 */
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivotElement = array[pivotIndex];

  const less = [];
  const greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] <= pivotElement) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivotElement, ...quickSort(greater)];
}

console.log(quickSort(randomArray(randomNumber(), randomNumber())));
