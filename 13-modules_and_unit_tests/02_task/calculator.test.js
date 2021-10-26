import sumOfNumbers, {getOddNumbers, getSquaredArray} from "./calculator"

it('sum of two numbers', () => {
  const result = sumOfNumbers(2, 2)
  expect(result).toBe(4)
})

it('numbers in array to squared numbers', () => {
  const result = getSquaredArray([1, 2, 3, 4])
  expect(result).toEqual([1, 4, 9, 16])
})

it('filter only odd numbers in array', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5, 6, 7])
  expect(result).toEqual([1, 3, 5, 7])
})