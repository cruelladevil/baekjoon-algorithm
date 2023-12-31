const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(BigInt);
const [a, b] = input;

console.log((a + b).toString());
