const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ');

const squareSumRemainder = input.reduce((acc, cur) => (acc + Math.pow(cur, 2)) % 10, 0);

console.log(squareSumRemainder);
