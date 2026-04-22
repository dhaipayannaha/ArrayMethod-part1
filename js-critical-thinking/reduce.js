const numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log(sum); // Output: 15

// Using reduce to find the maximum number
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity); // -Infinity is the initial value

console.log(max); // Output: 5

// Using reduce to flatten an array of arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []); // [] is the initial value

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Using reduce to count the frequency of each number
const frequency = numbers.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {}); // {} is the initial value

console.log(frequency); // Output: { '1': 1, '2': 1, '3': 1, '4': 1, '5': 1 }