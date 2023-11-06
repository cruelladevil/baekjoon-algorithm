const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [a, b] = input;

const diff = (a, b) => Math.abs(a - b);

console.log(diff(a, b));
