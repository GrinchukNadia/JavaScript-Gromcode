const uniqueCount = (arr) => {
  if(!Array.isArray(arr)) {
    return null;
  }

  let counter = 0;
  const sortedArr = arr

  for(let i = 0; i < arr.length; i += 1) {
    for(let n = 0; n < arr.length; n += 1) {
      if (arr[i] === arr[n] && i < n && i !== n) {
        sortedArr[i] = null
      }
    }
  }
  for (let j = 0; j < sortedArr.length; j += 1) {
    if (sortedArr[j] !== null) {
      counter += 1;
    }
  }
  console.log(counter)
  return counter
}

uniqueCount([1, 4, 1, 8, 8, 8, 8, 8, 3, 4, 8, 9, 9, 9, 5, 8])