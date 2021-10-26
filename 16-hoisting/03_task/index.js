// old
/*
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
*/

// refactored
export function createArrayOfFunctions(num) {
  if (typeof num === 'undefined') {
    return [];
  } 
  if(typeof num !== 'number') {
    return null
  }

  return new Array(num)
    .fill(null)
    .map((el, i) => function() {return i})
}

// tests
console.log(createArrayOfFunctions(12))
