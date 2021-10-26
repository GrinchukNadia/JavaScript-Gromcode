import getAdults from "./getAdults";

it('returning Object with users elder than 18 years', () => {
  expect(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }))
  .toEqual({'John Doe': 19, 'Bob': 18,})
})

it('returning empty Object if argument empty Object', () => {
  expect(getAdults({}))
  .toEqual({})
})

it('Object shouldn\'n change', () => {
  const mainObject = { 'John Doe': 19, Tom: 17, Bob: 18 }
  const objectAsArgument = { 'John Doe': 19, Tom: 17, Bob: 18 }
  getAdults(objectAsArgument)

  expect(mainObject).toEqual(objectAsArgument)
})