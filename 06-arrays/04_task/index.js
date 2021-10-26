function swap(numbers) {
  const [first, ...arr] = numbers;
  return [...arr, first]
}


function swapManual(numbers) {
  const newNumbers = [];
  for(let i = 1; i < numbers.length; i +=1) {
    newNumbers.push(numbers[i])
  }
  newNumbers.push(numbers[0])
  return newNumbers;
}

console.log(swap([1, 10, 9, 11]));
console.log(swapManual([1, 10, 9, 11]));