const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

let numString = input;
let count = 0;

while (numString >= 10) {
  const digitSum = numString
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0)
    .toString();

  numString = digitSum;
  count += 1;
}

console.log(count);
console.log(Number(numString) % 3 === 0 ? 'YES' : 'NO');
