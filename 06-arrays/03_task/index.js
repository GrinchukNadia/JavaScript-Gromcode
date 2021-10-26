const getSpecialNumbers = (from, to) => {
  const arr = [];
  for(let i = from; i <= to; i +=1) {
    if(i % 3 === 0) {
      arr.push(i)
    }
  }
  return arr;
}
console.log(getSpecialNumbers(10, 30))