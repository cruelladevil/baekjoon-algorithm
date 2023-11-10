const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));
const [, numbers, , checkingNumbers] = input;

const set = new Set(numbers);

console.log(checkingNumbers.map((number) => (set.has(number) ? 1 : 0)).join('\n'));
