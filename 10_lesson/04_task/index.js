const getMaxAbsoluteNumber = arr => {
  if(!Array.isArray(arr) || arr.length < 1) {
    return null
  }

  const absoluteNum = arr.map(el => Math.abs(el))
  return Math.max(...absoluteNum)
}

const numbers = [-777, 3, -2, 45, -20]
console.log(getMaxAbsoluteNumber(numbers))