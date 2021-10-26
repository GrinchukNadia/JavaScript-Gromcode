const getSubArray = (arr, numberOfElements) => {
  const trimmedArr = []
  for(let i = 0; i < numberOfElements; i += 1) {
    trimmedArr.push(arr[i])
  }
  return trimmedArr
};

console.log(getSubArray([11, 4, 8, 3], 2))

console.log(getSubArray([1, 2, 3, 4, 5, 6], 3))