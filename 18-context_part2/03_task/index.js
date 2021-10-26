export function sumOfSquares(...args) {
  return ([...args])
    .reduce((acc, el) => acc + el*el, 0)
}

console.log(sumOfSquares(4, 3, 6, 34))