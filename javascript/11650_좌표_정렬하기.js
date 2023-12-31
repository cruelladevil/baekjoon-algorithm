const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

input.sort(([ax, ay], [bx, by]) => {
  if (ax === bx) {
    return ay - by;
  }
  return ax - bx;
});

console.log(input.map(([x, y]) => `${x} ${y}`).join('\n'));
