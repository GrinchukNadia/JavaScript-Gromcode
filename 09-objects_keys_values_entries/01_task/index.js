// old
/*
const getAdults = obj => {
  const adults = []
  Object.entries(obj)
    .forEach((el) => {
    if(el[1] >= 18) {
      adults.push(el[0])
    }
  })
  return adults
}
*/

// refactored
const getAdults = (obj) => {
  const adults = []
  const MIN_AGE = 18
  const NAME = 0
  const AGE = 1

  Object.entries(obj)
    .forEach(el => el[AGE] >= MIN_AGE ? adults.push(el[NAME]) : null)

  return adults
};

// tests
const users = { 
  'John Doe': 19, 
  'Tom': 17, 
  'Bob': 18,
}
console.log(getAdults(users))