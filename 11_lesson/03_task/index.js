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

splitString('lsjlfoidfsjdf sfijsdfi sddfijsdfj dsofjosdjf')