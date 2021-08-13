const getAdults = obj => {
  const adults = []
  Object.entries(obj).forEach((el) => {
    if(el[1] >= 18) {
      adults.push(el[0])
    }
  })
  return adults
}

const users = { 
  'John Doe': 19, 
  'Tom': 17, 
  'Bob': 18,
}

getAdults(users)