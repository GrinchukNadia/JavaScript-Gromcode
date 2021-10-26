// old
/*
const splitString = (str, num=10) => {
  if(typeof(str) !== 'string') {
    return null
  }

  const arrWithChunks = []
  let step = 0

  while(true) {
    const chunk = str.substr(step, num)

    if(chunk.length < num) {
      arrWithChunks.push(`${chunk}${'.'.repeat(num - chunk.length)}`)
      break
    }

    arrWithChunks.push(chunk)
    step += num
  }
  return arrWithChunks
}
*/

// refactored
const splitString = (str, num=10) => {
  if(typeof(str) !== 'string') {
    return null
  }

  let step = 0
  const arrWithChunks = []
  
  while (str.substr(step, num)) {
    arrWithChunks.push(str.substr(step, num).padEnd(num, '.'));
    step += num;
  }

  return arrWithChunks
}


// tests
console.log(splitString('lsjlfoidfsjdf sfijsdfi sddfijsdfj dsofjosdjf'))