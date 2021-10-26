// old
/*
const splitText = (str, num=10) => {
  if(typeof(str) !== 'string') {
    return null
  }

  let step = 0;
  const arr = []

  while (true) {
    if(!str.substr(step + 1, num - 1)) {
      break
    }
  
      arr.push(str[step].toUpperCase() + str.substr(step + 1, num - 1))
      step += num
  }
  return arr.join('\n')
}
*/

// refactored
const splitText = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }

  let chunk = 0;
  const chunksArr = [];

  
  while (str.substr(chunk, num)) {
    chunksArr.push(str[chunk].toUpperCase() + str.substr(chunk + 1, num-1));
    chunk += num;
  }

  return chunksArr.join('\n');
};

// tests
console.log(splitText('kladfj aldsjfa o', 5))
console.log(splitText('lskjdflsdlfjlsdfjlksdjflsdjflsdkjfsd'))