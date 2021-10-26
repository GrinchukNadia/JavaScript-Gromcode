const cloneArr = arr => {
  if(!Array.isArray(arr)) {
    return null
  }

  const [...coppiedArr] = arr
  return [...coppiedArr]
}

const firstArr = [1, 2, 3, 4, 5, 6]

const secondArr = cloneArr(firstArr)

console.log(firstArr === secondArr)