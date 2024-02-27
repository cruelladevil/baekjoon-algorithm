const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).map(Number);

input.sort((a, b) => a - b);

const average = input.reduce((acc, cur) => acc + cur, 0) / input.length;
const median = input[Math.floor(input.length / 2)];

console.log(average);
console.log(median);
