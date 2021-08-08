const m = 15;
const n = 25;
let result = 1;

for(let i = m; i <= n; i++) {
  if(i % 2 == 0) {
    continue;
  }
  result *= i;
}
console.log(result)