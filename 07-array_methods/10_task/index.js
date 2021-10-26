// old
/*
const sum = arr => {
  if(!Array.isArray(arr)) {
    return null
  }
  return arr.reduce((acc, el) => acc + el, 0)
}
*/

// refactored
const sum = arr => 
  !Array.isArray(arr) ? 
    null : 
    arr.reduce((acc, el) => acc + el, 0)