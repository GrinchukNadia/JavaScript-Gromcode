export const sum = (num) => {
  let result = 0;

  if(num === 0) {
    return result
  }
  
  result = num + sum(num - 1)
  return result
}

console.log(sum(4))