const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));
const [numbers, [n]] = input;

numbers.sort((a, b) => a - b);

const maxIndex = numbers.findIndex((num) => num > n);
const max = numbers[maxIndex];
const min = numbers[maxIndex - 1] ?? 0;

const count = (n - min - 1) * (max - n) + (max - 1 - n);

console.log(min === n ? 0 : count);
