const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((acc, el) => acc + el, 0) / arr.length
};

console.log(arrAverage([2, 5, 6, 3]))