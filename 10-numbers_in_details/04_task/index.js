// old
/*
const getMaxAbsoluteNumber = arr => {
  if(!Array.isArray(arr) || arr.length < 1) {
    return null
  }

  const absoluteNum = arr.map(el => Math.abs(el))
  return Math.max(...absoluteNum)
}
*/

// refactored
const getMaxAbsoluteNumber = arr =>
  !Array.isArray(arr) || arr.length < 1
    ? null
    : Math.max( ...arr.map(el => Math.abs(el)) );


// tests
const numbers = [-777, 3, -2, 45, -20]
console.log(getMaxAbsoluteNumber(numbers))
console.log(getMaxAbsoluteNumber('numbers'))
console.log(getMaxAbsoluteNumber([]))