/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

const addPropertyV1 = (userData, userId) => {
  userData.id = userId
  return userData
}

const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, {id: userId})

const addPropertyV3 = (userData, userId) => {
  const newUserData = {...userData}
  return Object.assign(newUserData, {id: userId})
}

const addPropertyV4 = (userData, userId) => ({...userData, id: userId})

const user = {
  name: 'Sam',
};
addPropertyV1(user, '1234567');
