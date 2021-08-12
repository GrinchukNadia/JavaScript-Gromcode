const getSpecialNumbers = arr => 
  arr.filter(num => num % 3 === 0)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(getSpecialNumbers(numbers))