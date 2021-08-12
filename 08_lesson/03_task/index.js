const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

console.log(transaction.currency)

console.log(transaction['value']) // eslint-disable-line

const key = 'operation';
console.log(transaction[key])

console.log(transaction.agent['company']) // eslint-disable-line

console.log(transaction.agent.country)

console.log(transaction['operation time']);
