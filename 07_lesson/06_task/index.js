const reverseArray = arr => {
  if(!Array.isArray(arr)) {
    return null
  }

  return [...arr].reverse();
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(reverseArray(numbers))