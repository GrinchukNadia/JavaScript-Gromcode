const checker = arr => {
  if(!Array.isArray) {
    return null
  }

  let max = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if(max < arr[i]) {
      max = arr[i]
    }
  }
  
  let min = max;
  for(let i = 0; i < arr.length; i += 1) {
    if(min > arr[i]) {
      min = arr[i]
    }
  }
  return (max + min > 1000)
}

console.log(checker([1, 4, 23, 7, 9999]))
