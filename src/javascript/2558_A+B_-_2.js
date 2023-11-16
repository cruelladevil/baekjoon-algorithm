const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);
const [a, b] = input;

const plus = (a, b) => a + b;

console.log(plus(a, b));
