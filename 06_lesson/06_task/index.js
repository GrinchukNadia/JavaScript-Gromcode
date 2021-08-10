/* eslint-disable no-restricted-syntax */

const squareArray = (arr) => {
  if(!Array.isArray(arr)) {
    return null
  }
  const arrSquared = []
  for (const num of arr) {
    arrSquared.push(num*num)
  }
  return arrSquared
}
console.log(squareArray([2, 3, 4, 5, 6, 7, 8]));