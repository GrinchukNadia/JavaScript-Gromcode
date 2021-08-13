const getCustomersList = obj => {
  const copyObj = {...obj}

  const idValues = Object.keys(copyObj)
  const usersArr = Object.values(copyObj)

  const arrWithUsers = []

  usersArr.forEach((el, i)=> {
    arrWithUsers.push({...el, id: idValues[i]})
  })

  arrWithUsers.sort((a, b) =>  a.age - b.age)
  return arrWithUsers
}

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};

getCustomersList(customers)