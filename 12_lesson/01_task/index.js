const calc = expretion => {
  const[a, operator, b] = expretion.split(' ')
  let result = 0;

  switch(operator) {
    case '+' :
      result = +a + +b
      break;
      
    case '-' :
      result = +a - +b
      break;
        
    case '/' :
      result = +a / +b
      break;
          
    case '*' :
      result = +a * +b
      break;

    default: 
    console.log('Error')
  }

  return `${expretion} = ${result}`
}

calc('2 * 3')
// console.log(`${expretion} = ${result}`);