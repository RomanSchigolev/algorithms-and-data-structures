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
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMinNum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMinNum]) {
        indexMinNum = j;
      }
    }
    if (indexMinNum !== i) {
      // let tmp = array[i];
      // array[i] = array[indexMinNum];
      // array[indexMinNum] = tmp;
      [array[i], array[indexMinNum]] = [array[indexMinNum], array[i]];
    }
  }
  return array;
}

console.log(selectionSort(randomArray(randomNumber(), randomNumber())));
