const reverseArray = (arr) => {
  if(!Array.isArray(arr)) {
    return null
  }

  const reversedArr = []

  for(let i = arr.length -1; i >=0; i -= 1) {
    reversedArr.push(arr[i])
  }
  return reversedArr
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]))