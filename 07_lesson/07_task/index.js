const increaseEvenEl = (arr, delta) => {
  if(!Array.isArray(arr)) {
    return null
  }

  return arr.map(el => el % 2 === 0 ? el + delta : el)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(increaseEvenEl(numbers, 2))