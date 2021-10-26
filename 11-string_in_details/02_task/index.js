// old
/*
const sortContacts = (arr, order=true) => {
  if(!Array.isArray(arr)) {
    return null
  }
  
  arr.sort((a, b) => {
    if(order === true) {
      return a.name.localeCompare(b.name)
    }
    
    return b.name.localeCompare(a.name)
  })
  return arr
}
*/

// refactored
const sortContacts = (arr, order = true) => {
  if (!Array.isArray(arr)) {
    return null
  }

  return arr.sort( (a, b) =>
    order === true
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  )
}

// tests
const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Kate',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Luise',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Richard',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Ann',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Robert',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Nensi',
    phoneNumber: '777-77-77'
  },
  {
    name: 'Daniel',
    phoneNumber: '777-77-77'
  },
]

console.log(sortContacts(contacts, false))