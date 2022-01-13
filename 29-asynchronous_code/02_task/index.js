export const pinger = (count, period) => {
  let counter = count;
  console.log('Ping')

  const pingId = setInterval(() => {
    counter -= 1;
    return counter > 0 ? console.log('Ping') : clearInterval(pingId)
  }, period)
};

pinger(5, 100); 
pinger(7, 150);