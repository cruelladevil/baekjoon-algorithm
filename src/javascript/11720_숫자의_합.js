const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/);
const [, numString] = input;

let sum = 0;

for (const numChar of numString) {
  sum += Number(numChar);
}

console.log(sum);
