/* eslint-disable no-restricted-syntax */

const pickProps = (obj, props) => {
  const filteredObj = {}
  for(const key in obj) {
    if(props.includes(key)) {
      filteredObj[key] = obj[key]
    }
  }
  return filteredObj
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }