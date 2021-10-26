const increaser = (a, index) => {
  if(a > index) {
    return a + index
  }
  return a
}
console.log(increaser(2, 6))
console.log(increaser(10, 9))