let sum = 0;

for(let i = 0; i <=1000; i += 1)  {
  sum += i;
}

const divNum = Math.floor(sum/1234);
const modsNum = sum%1234;

divNum > modsNum ? console.log(true) : console.log(false)