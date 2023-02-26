const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

/**
 *
 * @param {number[]} array
 * @param {number} element
 * @return {number}
 */
function binarySearch(array, element) {
  let left = 0;
  let right = array.length;

  while (right - left > 1) {
    const middle = Math.floor((right + left) / 2);

    if (element === array[middle]) {
      return middle;
    }

    if (element < array[middle]) {
      right = middle;
    } else {
      left = middle;
    }
  }

  return -1;
}

console.log(binarySearch(array, 6)); // 5
