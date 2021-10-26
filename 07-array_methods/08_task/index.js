// old
/*
const cloneArr = arr => {
  if(!Array.isArray(arr)) {
    return null
  }
  return [...arr]
}
*/

// refactored
const cloneArr = arr => !Array.isArray(arr) ? null : [...arr]