const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [a, b] = input;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const calQuotient = (a, b) => Math.floor(a / b);
const calRemainder = (a, b) => a % b;

console.log(plus(a, b));
console.log(minus(a, b));
console.log(multiply(a, b));
console.log(calQuotient(a, b));
console.log(calRemainder(a, b));
