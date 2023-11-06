const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [a, b] = input;

const minus = (a, b) => a - b;

console.log(minus(a, b));
