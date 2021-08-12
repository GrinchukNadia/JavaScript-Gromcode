/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

const getKeys = obj => {
  for(const key in obj) {
    console.log(key)
  }
}