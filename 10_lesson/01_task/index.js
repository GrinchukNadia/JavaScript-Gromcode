const getFiniteNumbers = arr => {
  let filteredArr = []
  arr.forEach(el => {
    if(Number.isFinite(el)) {
      filteredArr = [...filteredArr, el]
    }
  })
  return filteredArr
}

const getFiniteNumbersV2 = arr => {
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

const numbers = [2, 3, 4, 5, 4.64, 2.36, null, NaN, undefined, 'text']

getIntegers(numbers)