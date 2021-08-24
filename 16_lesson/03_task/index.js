export function createArrayOfFunctions(num) {
  if (typeof num === 'undefined' && typeof num !== 'number') {
    return [];
  } 
  if(typeof num !== 'undefined' && typeof num !== 'number') {
    return null
  }

  const arr = []

  for(let i = 0; i < num; i += 1) {
    arr[i] = function() {
      return i
    }
  }
  return arr
}

console.log(createArrayOfFunctions('na'))
