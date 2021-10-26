/* eslint-disable no-restricted-syntax */

const checkSum = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }

  if (sum > 100) {
    return true
  }
  return false
};

console.log(checkSum([3, 4, 6, 22, 6]))
console.log(checkSum([3, 4, 6, 22, 688]))