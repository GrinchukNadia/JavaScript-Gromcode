// old
/*
const reverseString = str => {
  if(typeof(str) !== 'string') {
    return null
  }

  return str.split('').reverse().join('')
}
*/

// refactored
const reverseString = str => 
  typeof(str) !== 'string' 
    ? null
    : str.split('').reverse().join('')

// tests
console.log(reverseString('Nadia'))