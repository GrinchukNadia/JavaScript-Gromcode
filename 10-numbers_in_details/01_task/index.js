// old
/*
const getFiniteNumbers = (arr) => {
  let filteredArr = []
  arr.forEach(el => {
    if(Number.isFinite(el)) {
      filteredArr = [...filteredArr, el]
    }
  })
  return filteredArr
}

const getFiniteNumbersV2 = (arr) => {
  let filteredArr = []
  arr.forEach(el => {
    if(isFinite(el)) {
      filteredArr = [...filteredArr, el]
    }
  })
  return filteredArr
}

const getNaN = arr => {
  let filteredArr = [];
  arr.forEach((el) => {
    if (Number.isNaN(el)) {
      filteredArr = [...filteredArr, el];
    }
  });
  return filteredArr;
}

const getNaNV2 = arr => {
  let filteredArr = [];
  arr.forEach((el) => {
    if (isNaN(el)) {
      filteredArr = [...filteredArr, el];
    }
  });
  return filteredArr;
}

const getIntegers = arr => {
  let filteredArr = [];
  arr.forEach((el) => {
    if (Number.isInteger(el)) {
      filteredArr = [...filteredArr, el];
    }
  });
  return filteredArr;
}
*/

// refactored
const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));
const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));
const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));


// tests
const numbers = [2, 3, 4, 5, 4.64, 2.36, null, NaN, undefined, 'text']

console.log(getFiniteNumbers(numbers));
console.log(getFiniteNumbersV2(numbers));
console.log(getNaN(numbers));
console.log(getNaNV2(numbers));
console.log(getIntegers(numbers));