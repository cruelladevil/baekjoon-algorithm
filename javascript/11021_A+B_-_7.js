const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

console.log(input.map(([a, b], i) => `Case #${i + 1}: ${a + b}`).join('\n'));
