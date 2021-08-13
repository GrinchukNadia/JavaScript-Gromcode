const getKeys = obj => {
  Object.keys(obj).forEach(el => {
    console.log(el)
  })
}

const usesrs = {
  nadia: 15,
  olia: 19,
  luba: 34,
  elia: 23,
}

getKeys(usesrs)