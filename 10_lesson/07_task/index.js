const superRound = (num, prec) => [
    Math.floor(num * 10**prec) / 10**prec,
    Math.trunc(num * 10**prec) / 10**prec,
    Math.ceil(num * 10**prec) / 10**prec,
    Math.round(num * 10**prec) / 10**prec,
    +num.toFixed(prec),
]

console.log(superRound(11.12556, 2));
console.log(superRound(6.11, 3));
