const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const plus = (a, b) => a + b;

const sums = input.map(([a, b]) => plus(a, b));

console.log(sums.join('\n'));
