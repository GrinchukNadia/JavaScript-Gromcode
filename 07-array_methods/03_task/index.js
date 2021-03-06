// old
/*
const flatArray = arr => 
  [...arr].reduce((acc, i) => 
    acc.concat(i)
  , []).sort((a, b) => a - b);
*/

// refactored
const flatArray = (arr) =>
  [...arr]
    .reduce((accumulator, index) => accumulator.concat(index), [])
    .sort((a, b) => a - b)

// tests
const arrWithArr = [1, 2, [3, 45, 5], 4, [6, 34, 99], 41]
const result = flatArray(arrWithArr);
console.log(result)
