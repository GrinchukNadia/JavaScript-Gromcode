// old
/*
const reverseArray = arr => {
  if(!Array.isArray(arr)) {
    return null
  }
  return [...arr].reverse();
}
*/

// refactored
const reverseArray = (arr) =>
  !Array.isArray(arr)? null : [...arr].reverse()

// tests
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(reverseArray(numbers))