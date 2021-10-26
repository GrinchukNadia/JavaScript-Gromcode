import reverseArray from './reverseArray'

it('if array is empty function return null', () => {
  expect(reverseArray([])).toBeNull()
})
it('if argument not an array function return null', () => {
  expect(reverseArray('some text')).toBeNull()
})
it('array should be reversed', () => {
  expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]))
    .toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
})
it('array should not be changed', () => {
  const arrBefore = [1, 2, 3, 4, 5, 6, 7, 8];
  const arrAfter = reverseArray(arrBefore);
  expect(arrBefore)
    .not.toEqual(arrAfter);
})