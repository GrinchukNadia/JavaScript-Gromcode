const getSum = (start, final) => {
  let sum = 0;
  for(let i = start; i <= final; i += 1) {
    if(i%2 === 0) {
      sum += i;
    }
  }
  return sum
}