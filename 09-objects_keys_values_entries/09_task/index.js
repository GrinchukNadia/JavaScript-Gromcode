// old
/*
function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, el, i) => {
    acc[el] = valuesList[i]
    return acc
  }, {})
}
*/

// refactored
const buildObject = (keysList, valuesList) =>
   keysList.reduce((acc, key, index) => {
     acc[key] = valuesList[index]
     return acc
    }, {})

// tests
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); 