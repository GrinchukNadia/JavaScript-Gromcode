function getSum(arr) {
  let sum = 0;
  if(!Array.isArray(arr)) {
    return null;
  }
  for(let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }
  return sum;
}

console.log(getSum([1, 10, -10, 4]));
console.log(getSum([1]));
console.log(getSum([-8, 8]));
console.log(getSum(10, 12, 14));
