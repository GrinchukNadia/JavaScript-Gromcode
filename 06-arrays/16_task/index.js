const removeDuplicates = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  const sortedArr = array;
  const newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let n = 0; n < array.length; n += 1) {
      if (array[i] === array[n] && n !== i && i > n) {
        sortedArr[i] = null;
      }
    }
  }

  for (let i = 0; i < sortedArr.length; i += 1) {
    if (sortedArr[i] !== null) {
      console.log(sortedArr[i]);
      newArr.push(sortedArr[i]);
    }
  }
  return newArr;
};

const numbersArray = [5, 3, 4, 4, 4, 2, 3, 7, 4, 9, 2, 5];
removeDuplicates(numbersArray);
