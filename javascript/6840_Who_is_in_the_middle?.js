const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).map(Number);

input.sort((a, b) => a - b);

const [, motherBear] = input;

console.log(motherBear);
