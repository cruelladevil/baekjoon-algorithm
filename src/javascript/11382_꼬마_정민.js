const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [a, b, c] = input;

console.log(a + b + c);
