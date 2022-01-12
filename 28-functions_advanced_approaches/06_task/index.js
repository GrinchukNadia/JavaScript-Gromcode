export const maxFibonacci = (maxValue) => {
  let first  = 0;
  let second = 1
  let result = 0;


  while(first + second <= maxValue) {
    result = first + second;
    first = second
    second = result 
  }
  
  return result
}

console.log(maxFibonacci(8))