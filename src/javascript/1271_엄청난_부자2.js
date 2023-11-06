const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(BigInt);
const [a, b] = input;

const quotient = (a / b).toString();
const remainder = (a % b).toString();

console.log(quotient);
console.log(remainder);
