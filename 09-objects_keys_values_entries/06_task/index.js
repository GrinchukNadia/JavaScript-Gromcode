// old
/*
const getPeople = obj => {
  let names = [];

  Object.values(obj).forEach(roomEl => 
    Object.values(roomEl).forEach(nameEl => { 
      names = [...names, nameEl.name] 
    })
  )

  return names
}

const getPeople = (obj) => Object.values(obj)
  .reduce((acc, rooms) => {
    console.log(...rooms.name)
    rooms.forEach((names) => acc.push(names.name));
    return acc;
  }, []);
*/

// refactored

const getPeople = obj => {
  console.log(Object.values(obj)
    .reduce((acc, el) => acc.concat(el), [])
    .map((el) => el.name)
)}

// tests
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [
    { name: 'Dan' }
  ],
  room3: [
    { name: 'Denis' }, 
    { name: 'Max' }, 
    { name: 'Alex' }
  ],
};

console.log(getPeople(rooms));
