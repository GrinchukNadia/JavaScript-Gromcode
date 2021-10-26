// old
// const sortDesc = arr => {
//   const copyOfArr = [...arr]
//   return copyOfArr.sort((a, b) => b-a)
// }

// refactored 
const sortDesc = (arr) =>
  [...arr].sort((a, b) => b - a)

// tests
const numbers = [3, 6, 1, 15, 4, 23, 78, 99, 33]
console.log(sortDesc(numbers))