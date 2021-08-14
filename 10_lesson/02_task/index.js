const getParsedIntegers = arr => [...arr]
  .map(el => Number.parseInt(el)) // eslint-disable-line

const getParsedIntegersV2 = arr => [...arr]
  .map(el => parseInt(el)) // eslint-disable-line

const getParsedFloats = arr => [...arr]
  .map(el => Number.parseFloat(el)) 

const getParsedFloatsV2 = arr => [...arr]
  .map(el => parseFloat(el)) 

const numbers = [2.3, 5.2345, 67.89, 45.56, 4, 99, '12px', '   3.4lsdh', 'aldskf 3.456.4', null, undefined, 'text', Infinity]

console.log(getParsedFloats(numbers));