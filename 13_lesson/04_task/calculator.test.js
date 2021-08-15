import {calc} from './calculator'

it('addition of 2 numbers', () => {
  expect(calc('2 + 3')).toEqual('2 + 3 = 5')
})
it('subtaction of 2 numbers', () => {
  expect(calc('12 - 3')).toEqual('12 - 3 = 9')
})
it('multiplication of 2 numbers', () => {
  expect(calc('3 * 3')).toEqual('3 * 3 = 9')
})
it('division of 2 numbers', () => {
  expect(calc('12 / 4')).toEqual('12 / 4 = 3')
})
it('null if argument not a string', () => {
  expect(calc(true)).toBeNull()
})