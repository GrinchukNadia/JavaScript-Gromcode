// old
/*
const countOccurrences = (strMain='', strKey) => {
  if(strKey.length < 1) {
    return null
  }
  
  console.log(strMain.split(strKey));
  if(strMain.includes(strKey)) {
    return (strMain.split(strKey).length - 1)
  }
  return 0
}
*/

// refactored
const countOccurrences = (strMain='', strKey) => {
  if(strKey.length < 1) {
    return null
  }
  
  return strMain.includes(strKey)
    ? strMain.split(strKey).length - 1
    : 0
}

// tests
console.log(countOccurrences('monwo1enoefsn w1oenm1omoun', 'm'))