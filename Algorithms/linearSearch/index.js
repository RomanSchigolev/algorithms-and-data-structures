const array = [2, 1, 5, 8, 10, 88, 3, 99, 100, 34, 12, 3, 6];

/**
 *
 * @param {number[]} array
 * @param {number} element
 * @return {number}
 */
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 10)); // 4
