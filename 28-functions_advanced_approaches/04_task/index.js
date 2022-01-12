const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

export const compose = (...funcs) => value =>
  funcs.reduce((acc, func) => func(acc), value)

const superFunc = compose(add2, square, half)
superFunc(2)
console.log(superFunc(2))