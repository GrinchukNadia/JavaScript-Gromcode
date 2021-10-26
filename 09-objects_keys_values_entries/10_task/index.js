// old
/*
function compareObjects(obj1, obj2) {
  const flattenObj1 = [...Object.keys(obj1), ...Object.values(obj1)].sort();
  const flattenObj2 = [...Object.keys(obj2), ...Object.values(obj2)].sort();
  let counter = 0;

  if (flattenObj2.length === flattenObj1.length) {
    for (let i = 0; i < flattenObj2.length; i += 1) {
      if (flattenObj2[i] !== flattenObj1[i]) {
        counter += 1;
      }
    }
    return counter <= 0;
  }
  return false;
}
*/

// refactored
const compareObjects = (obj1, obj2) => {
  const lineFromObj1 = [...Object.keys(obj1), ...Object.values(obj1)]
    .sort().join('')

  const lineFromObj2 = [...Object.keys(obj2), ...Object.values(obj2)]
    .sort().join('')
    
  return lineFromObj1 === lineFromObj2 
}

// tests
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));