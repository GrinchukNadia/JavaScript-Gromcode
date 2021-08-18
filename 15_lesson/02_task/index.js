export const createCalculator = () => {
  let memory = 0;

  function add(num) {
    memory += num
    return memory
  }

  
  function decrease(num) {
    memory -= num
    return memory
  }

  function reset() {
    memory = 0
    return memory
  }

  function getMemo() {
    return memory
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  }
};

const calculator1 = createCalculator()
const calculator2 = createCalculator()

console.log(calculator1.getMemo())
console.log(calculator1.add(2))
console.log(calculator1.add(2))
console.log(calculator1.getMemo())
console.log(calculator1.reset())
console.log(calculator2.add(2))
console.log(calculator2.add(2))
console.log(calculator2.add(2))
console.log(calculator2.getMemo())
console.log(calculator2.decrease(5))