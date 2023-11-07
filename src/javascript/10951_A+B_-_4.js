const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .map((string) => string.split(' ').map(Number));

const plus = (a, b) => a + b;

input.forEach(([a, b]) => {
  console.log(plus(a, b));
});
