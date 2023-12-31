const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).map(BigInt);
const [a, b] = input;

const plus = (a, b) => (a + b).toString();
const minus = (a, b) => (a - b).toString();
const multiply = (a, b) => (a * b).toString();

console.log(plus(a, b));
console.log(minus(a, b));
console.log(multiply(a, b));
