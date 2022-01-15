export const asyncCalculator = (numbr) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);

      resolve(numbr);
    }, 500);
  })
    .then(
      (num) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const squared = num * num;
            console.log(`Squared value: ${squared}`);
            resolve(squared);
          }, 500);
        })
    )
    .then((nums) => {
      const doubled = nums * 2;
      console.log(`Doubled value: ${doubled}`);
      return doubled;
    });

const result = asyncCalculator(5);
