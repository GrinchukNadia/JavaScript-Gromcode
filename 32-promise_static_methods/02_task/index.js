const servers = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au',
];

const randomDelay = (from, to) => Math.ceil(from + Math.random() * (to - from));

const request = url => new Promise(resolve => {
  const delay = randomDelay(1000, 3000)
  setTimeout(() => {
    resolve({
      userData: {
        name: 'Tom',
        age: 17,
      },
      sourse: url
    })
  }, delay)
})

export const getUserASAP = (userId) => {
  const userRequests = servers
    .map(server => request(`${server}/${userId}`))

    return Promise.race(userRequests);
}

getUserASAP('user_1').then(result => console.log(result))