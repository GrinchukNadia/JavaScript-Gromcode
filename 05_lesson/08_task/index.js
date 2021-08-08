const numSum = (start, end) => {
  let sum = 0;
  for(let i = start; i <= end; i += 1) {
    sum += i;
  }
  return sum
}

const compareSums = (a, b, c, d) => {
  const firstCompare = numSum(a, b)
  const secondCompare = numSum(c, d)

  if(firstCompare > secondCompare) {
    return true
  }
  return false
}
 console.log(compareSums(2, 5, 1, 3))