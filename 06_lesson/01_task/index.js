function getArrayBounds(arr) {
  if(!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length-1]];
}

console.log(getArrayBounds([1, 10, 9, 11]));
console.log(getArrayBounds(10, 12, 14));
console.log(getArrayBounds([1]));
console.log([2, 4, 6])
