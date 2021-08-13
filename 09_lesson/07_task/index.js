const getTotalRevenue = arr => {
  let totalAmount = 0
  arr.forEach(el => {
    totalAmount += el.amount;
  })
  return totalAmount
}

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310