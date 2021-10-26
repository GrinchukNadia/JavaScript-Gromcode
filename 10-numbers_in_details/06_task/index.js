// old
/*
const getRandomNumbers = (length, from, to) => {
  if(to - from < 1) {
    return null
  }

  const array = Array(length)
    .fill(null)
    .map(() => Math.ceil(Math.random() * (to - from) + from))

  return array
};
*/

// refactored
const getRandomNumbers = (length, from, to) =>
  to - from < 1 
    ? null
    : Array(length).fill(null)
        .map(() => Math.ceil(Math.random() * (to - from) + from));

// tests
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));