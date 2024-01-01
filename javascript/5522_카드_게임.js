const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).map(Number);

console.log(input.reduce((acc, cur) => acc + cur, 0));
