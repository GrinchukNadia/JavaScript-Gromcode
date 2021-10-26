import getMinSquaredNumber from './getMinSquaredNumber';

it('smallest squared number in array', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toBe(4)
})

it('null if array is empty', () => {
  const emptyArr = getMinSquaredNumber([])
  expect(emptyArr).toBeNull()
})

it('null if argument is string instead of array', () => {
  const string = getMinSquaredNumber('some text')
  expect(string).toBeNull()
})