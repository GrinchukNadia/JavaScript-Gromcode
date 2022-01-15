export const makePromise = (data) => new Promise(resolve => resolve(data))

makePromise(17).then((number) => {
  console.log(number); // 17
});
