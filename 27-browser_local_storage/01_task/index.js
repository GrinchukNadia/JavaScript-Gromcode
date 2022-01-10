localStorage.clear();

localStorage.setItem('keyh', JSON.stringify({ name: 'values' }));
localStorage.setItem('name', JSON.stringify('Name'));
localStorage.setItem('phrm', JSON.stringify(false));
localStorage.setItem('age', JSON.stringify({ pr: 'kdr' }));

export function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value)
    } catch(e) {
      newValue = value
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());