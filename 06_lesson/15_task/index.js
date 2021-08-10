const includes = (arr, num) => {
  let isIncludes;
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === num) {
      isIncludes = true
    } else {
      isIncludes = false
    }
  }
  return isIncludes
};

console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 5));