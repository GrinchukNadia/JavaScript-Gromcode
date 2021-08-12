/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const concatProps = obj => {
  const arr = []
  for(const key in obj) {
    arr.push(obj[key])
  }
  return arr
};

// examples
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']
