import withdraw from './withdraw'

it('withdraw money from count', () => {
  expect(withdraw(['Ann', 'Jon', 'Suzan'], [23, 99, 78], 'Suzan', 18))
    .toBe(60)
});

it('function return -1 if not enough money', () => {
  expect(withdraw(['Ann', 'Jon', 'Suzan'], [23, 99, 78], 'Ann', 25))
    .toBe(-1)
})

it('array with balanse should changed', () => {
  const beforeChanges = [23, 99, 78]
  const willBeChanged = [23, 99, 78]
  withdraw(['Ann', 'Jon', 'Suzan'], willBeChanged, 'Suzan', 25)

  expect(beforeChanges).not.toEqual(willBeChanged)
})

it('array not changing if not enough money on bill', () => {
  const arrayForCompare = [23, 99, 78]
  const arrNotChanging = [23, 99, 78]
  withdraw(['Ann', 'Jon', 'Suzan'], arrNotChanging, 'Ann', 25);

  expect(arrayForCompare).toEqual(arrNotChanging);
})