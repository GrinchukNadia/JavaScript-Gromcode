const columns = 5;

for(let i = 1; i <= columns; i+=1) {
  console.log(`
  => ${i} <=
  `)
  for(let j = 1; j <= 10; j+=1) {
    console.log(`${i} x ${j} = ${j*i}`)
  }
}