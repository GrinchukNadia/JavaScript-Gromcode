// old
/*
export default (clients, balances, client, amount) => {
  const balanceOfClient = balances[clients.indexOf(client)]
  let result = 0

  if (balanceOfClient > amount) {
    balances[clients.indexOf(client)] = balanceOfClient - amount; // eslint-disable-line
    result = balanceOfClient - amount;
  } else {
    result = -1
  }
  return result
}
*/

// refactored
export default (clients, balances, client, amount) => {
  const balanceOfClient = balances[clients.indexOf(client)]
  return balanceOfClient > amount ? balanceOfClient - amount : -1 
}