const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).map(Number);

const [{ number: maxNumber, index: maxNumberIndex }] = input
  .map((number, index) => ({ number, index }))
  .sort(({ number: a }, { number: b }) => b - a);

console.log(maxNumber);
console.log(maxNumberIndex + 1);
