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

console.log(splitText('kladfj aldsjfa o', 4))
splitText('lskjdflsdlfjlsdfjlksdjflsdjflsdkjfsd')