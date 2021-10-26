// old
/*
const getKeys = obj => {
  Object.keys(obj).forEach(el => {
    console.log(el)
  })
}
*/ 

// refactored
const getKeys = obj => Object.keys(obj)
  .forEach(el => console.log(el))

// tests
const usesrs = {
  nadia: 15,
  olia: 19,
  luba: 34,
  elia: 23,
}
getKeys(usesrs)