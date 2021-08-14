const getTotalPrice = arr => {
  let totalPrice = (arr.reduce((acc, el) => acc + el, 0))
  totalPrice = Math.floor(totalPrice * 100) / 100
  return `$${totalPrice}`;
}

const prices = [2.4, 5.67, 9.1234567, 0.2]

console.log(getTotalPrice(prices))