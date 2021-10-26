const isPrime = num => {
  for(let i = 2; i < num; i += 1) {
    if(num === 2) {
      return num
    } 
    if(num % i === 0) {
      return false;
    }
  }
  console.log(num)
  return num > 1
}

const getPrimes = num => {
  for(let i = 2; i <= num; i +=1) {
    isPrime(i)
  }
}