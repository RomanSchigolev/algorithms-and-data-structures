let randomNumber = () => Math.floor(Math.random() * 100);
/**
 *
 * @param {number} length
 * @param {number} max
 * @return {number[]}
 */
const randomArray = (length, max) =>
  [...new Array(length)].map((_) => Math.round(Math.random() * max));

const sortedArray = () =>
  Array.from({ length: randomNumber() }, (_, idx) => idx);
