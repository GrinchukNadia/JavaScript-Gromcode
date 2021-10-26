// old
/*
const cleanTransactionsList = arr => {
  const clearedArr = []

  arr.forEach(el => {
    if(+el) {
      const formatedEl = `${+el + 0.001}`;
      const dotIndex = formatedEl.indexOf('.')
      
        clearedArr.push(`$${+el + 0.001}`.substring(0, dotIndex + 4))
    }
  })

  return clearedArr
}
*/

// refactored
const cleanTransactionsList = (arr) =>
  arr
    .filter((el) => Boolean(+el) === true)
    .map((el) => `$${Number.parseFloat(el).toFixed(2)}`);

// tests
const list = ['  1.9 ', 'lsdkjf', '16.4', 17, '23.56', '1 dollar '];
const copyList = cleanTransactionsList(list)
console.log(copyList)
console.log(copyList === list)