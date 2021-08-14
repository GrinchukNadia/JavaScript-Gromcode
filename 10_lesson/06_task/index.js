const getRandomNumbers = (length, from, to) => {
  if(to - from < 1) {
    return null
  }

  const array = Array(length)
    .fill(null)
    .map(() => Math.ceil(Math.random() * (to - from) + from))

  return array
};

getRandomNumbers(5, 1.4, 3.22);
getRandomNumbers(5, 1.4, 3.22);
getRandomNumbers(5, 1.4, 3.22);