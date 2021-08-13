function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, el, i) => {
    acc[el] = valuesList[i]
    return acc
  }, {})
}

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); 