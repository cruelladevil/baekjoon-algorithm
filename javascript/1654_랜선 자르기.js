const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));
const [[, k], ...cables] = input;

let left = 0;
let right = Math.max(...cables);
let maxLength = 0;

while (left <= right) {
  const middle = Math.floor((left + right) / 2);
  const cableCount = cables.reduce((acc, cur) => acc + Math.floor(cur / middle), 0);

  if (cableCount >= k) {
    maxLength = middle;
    left = middle + 1;
  } else {
    right = middle - 1;
  }
}

console.log(maxLength);
