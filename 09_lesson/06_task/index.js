const getPeople = obj => {
  let names = [];
  [ ...Object.values(obj) ].forEach(j => {
    Object.values(j).forEach(k => {
      names = [...names, ...Object.values(k)]
    })
  })
  return names
}

const rooms = {
    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' },
        { name: 'Vasyl' },
    ],
    room2: [
        { name: 'Dan' },
    ],
    room3: [
        { name: 'Denis' },
        { name: 'Max' },
        { name: 'Alex' },
    ],
}

getPeople(rooms)