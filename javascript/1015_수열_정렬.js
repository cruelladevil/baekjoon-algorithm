const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .flatMap((string) => string.split(' ').map(Number));

const sorted = [...input].sort((a, b) => a - b);
const map = new Map();

sorted.forEach((value, index) => {
  if (!map.has(value)) {
    map.set(value, []);
  }
  map.get(value).push(index);
});

console.log(input.map((value) => map.get(value).shift()).join(' '));
