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

const list = ['  1.9 ', '16.4', 17, '23.56', '1 dollar '];
console.log(cleanTransactionsList(list))