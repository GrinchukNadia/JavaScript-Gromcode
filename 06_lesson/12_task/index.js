const sortAsc = arr => {
  for (let n = 0; n < arr.length; n += 1) {
    for (let i = 0; i < arr.length - 1 - n; i += 1) {
      if (arr[i] > arr[i + 1]) {
        const buff = arr[i];
        const arrCopy = arr;
        arrCopy[i] = arr[i + 1];
        arrCopy[i + 1] = buff;
      }
    }
  }
  return arr
}

const sortDesc = arr => {
  for (let n = 0; n < arr.length; n += 1) {
    for (let i = 0; i < arr.length - 1 - n; i += 1) {
      if (arr[i] < arr[i + 1]) {
        const buff = arr[i];
        const arrCopy = arr;
        arrCopy[i] = arr[i + 1];
        arrCopy[i + 1] = buff;
      }
    }
  }
  return arr
}

const arrRandomNumb = Array(100).fill(null).map(() => Math.floor(Math.random() * 1000 -100))

console.log(sortAsc(arrRandomNumb))
console.log(sortDesc(arrRandomNumb))