// old
const withdraw = (clients, balances, client, amount) => {
  const balanceOfClient = balances[clients.indexOf(client)]
  return balanceOfClient > amount ? balanceOfClient - amount : -1 
}