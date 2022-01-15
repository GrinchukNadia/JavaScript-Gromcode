const asyncNumbersCreater = (value, delay) => new Promise(resolve =>{
  setTimeout(() => {
    resolve(value)
  }, delay)
})
const asyncNumber1 = asyncNumbersCreater(56, 1000)
const asyncNumber2 = asyncNumbersCreater('slj', 3000)
const asyncNumber3 = asyncNumbersCreater(739, 2000)

const getSum = (numbers) => 
  numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + +num, 0)


export const asyncSum = (...asyncNumbers) => Promise.all(asyncNumbers)
    .then(asyncNumber => getSum(asyncNumber))
    .catch(() => new Error('Can\'t calcultate'))


asyncSum(asyncNumber1, Promise.reject(), asyncNumber3)
  .then(value => console.log(value))
  .catch(error => console.log(error))