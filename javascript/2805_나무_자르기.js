const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));

const [[, m], trees] = input;

let left = 0;
let right = Math.max(...trees);
let maxCutHeight = 0;

while (left <= right) {
  const middle = Math.floor((left + right) / 2);
  const totalCutHeight = trees.reduce((acc, cur) => (cur - middle > 0 ? acc + cur - middle : acc), 0);

  if (totalCutHeight >= m) {
    maxCutHeight = middle;
    left = middle + 1;
  } else {
    right = middle - 1;
  }
}

console.log(maxCutHeight);
