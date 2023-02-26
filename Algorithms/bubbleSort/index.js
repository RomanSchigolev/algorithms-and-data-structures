/**
 *
 * @param {number[]} array
 * @return {number[]}
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];

        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}

console.log(bubbleSort([4, 3, 2, 1, 9, -11, 33, 2, 4]));
