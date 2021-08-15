export default arr => {
  if(!Array.isArray(arr) || arr.length < 1) {
    return null
  }

  let smallest = Infinity;

  arr.forEach(el => {
    if(Math.abs(el) < smallest) {
      smallest = Math.abs(el)
    }
  })

  return smallest * smallest;
}