const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).map(Number);

const DIVISOR = 42;

const remainderSet = new Set();

input.forEach((number) => {
  remainderSet.add(number % DIVISOR);
});

console.log(remainderSet.size);
