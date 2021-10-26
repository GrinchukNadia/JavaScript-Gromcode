// // old
// /*
// const transformToObject = arr => {
//   const obj = {}
//   arr.forEach(el => {
//     obj[el] = el
//   })
//   return obj
// };
// */

// // refactored
// const transformToObject = arr => {
//   const obj = {}
//   arr.forEach(el => {obj[el] = el})
//   return obj
// };


// // tests
// console.log(transformToObject(['a', 17.1, 'John Doe']));


function recFunc(value) {
  if (value <= 1) {
    return 1;
  }

  return recFunc(value - 1) + value;
}

console.log(recFunc(4));