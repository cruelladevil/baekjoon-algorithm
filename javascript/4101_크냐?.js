const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number))
  .slice(0, -1);

console.log(input.map(([a, b]) => (a > b ? 'Yes' : 'No')).join('\n'));
