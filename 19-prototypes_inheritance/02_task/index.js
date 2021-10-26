// old
/*
export function getOwnProps(obj) {
  const arr = []
  for(let el in obj) {
    if(obj.hasOwnProperty(el) && typeof obj[el] !== 'function') {
      arr.push(el)
    }
  }
  return arr
}
*/

// refactored
export function getOwnProps(obj) {
  return Object.keys(obj).filter(el => typeof obj[el] !== 'function')
}

const obj1 = {
  n: 12,
  b: 23,
  slf() {
    console.log(23)
  }
}

const obj2 = {
  slr() {
    console.log(1)
  },
  st: 34
}

Object.setPrototypeOf(obj1, obj2)

console.log(getOwnProps(obj1))