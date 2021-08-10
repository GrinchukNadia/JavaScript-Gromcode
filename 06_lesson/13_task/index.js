const withdraw = (clients, balances, client, ammount) => {
  let result;
  for(let i = 0; i < clients.length; i += 1) {
    if(clients[i] === client) {
      result = balances[i] > ammount ? balances[i] - ammount : -1
    }
  }
  return result
}


withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);