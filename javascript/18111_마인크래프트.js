const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .map((string) => string.split(' ').map(Number));
const [[n, m, b], ...matrix] = input;

const DIG_TIME = 2;
const PLACE_TIME = 1;

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    min = Math.min(min, matrix[row][col]);
    max = Math.max(max, matrix[row][col]);
  }
}

let minTime = Number.MAX_SAFE_INTEGER;
let maxHeight = min;

for (let height = min; height <= max; height += 1) {
  let blockCount = b;
  let currTime = 0;

  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < m; col += 1) {
      const curr = matrix[row][col];
      const diff = Math.abs(curr - height);

      if (curr > height) {
        blockCount += diff;
        currTime += diff * DIG_TIME;
      } else if (curr < height) {
        blockCount -= diff;
        currTime += diff * PLACE_TIME;
      }
    }
  }

  if (blockCount >= 0 && minTime >= currTime) {
    minTime = currTime;
    maxHeight = height;
  }
}

console.log(minTime, maxHeight);
