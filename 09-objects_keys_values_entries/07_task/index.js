// old
/*
const getTotalRevenue = arr => {
  let totalAmount = 0
  arr.forEach(el => {
    totalAmount += el.amount;
  })
  return totalAmount
}
*/

// refactored
const getTotalRevenue = arr => arr.reduce((acc, el) =>  acc + el.amount, 0)


// tests
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions);
console.log(result)