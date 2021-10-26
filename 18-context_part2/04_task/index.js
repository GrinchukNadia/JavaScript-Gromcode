export function saveCalls(fn) {

  function withMemory(...args) {
    withMemory.calls.push(args)
    return fn.apply(this, args)
  }
  withMemory.calls = []
  return withMemory
}

// -----------------------------------------------------------
// function test(a, b) {
//   return Math.sqrt(a * a + b * b);
// }

// const testWithMemory = saveCalls(test);
// testWithMemory(4, 2);
// console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]
// testWithMemory(9, 1);
// console.log(testWithMemory.calls); // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

// const user = {
//   name: 'John',
//   sayHi(age, city) {
//     return `${this.name}, is ${age} year old, from ${city}`;
//   },
// };

// const methodWithMemory = saveCalls(user.sayHi);
// methodWithMemory.apply({ name: 'Tom' }, [32, 'Kyiv']); 
// methodWithMemory.apply({ name: 'Jhon' }, [22, 'Lviv']); 
// console.log(methodWithMemory.calls)