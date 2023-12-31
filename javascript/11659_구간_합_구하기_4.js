const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));

const [[n], numbers, ...ranges] = input;

const sums = Array.from({ length: n + 1 }, () => 0);

numbers.forEach((number, i) => {
  sums[i + 1] = (sums[i] ?? 0) + number;
});

console.log(ranges.map(([start, end]) => sums[end] - sums[start - 1]).join('\n'));
