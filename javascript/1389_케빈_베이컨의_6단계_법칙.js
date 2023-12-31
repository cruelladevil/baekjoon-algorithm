const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...edges] = input;

const matrix = Array.from({ length: n }, () => {
  return Array.from({ length: n }, () => Infinity);
});

edges.forEach(([from, to]) => {
  matrix[from - 1][to - 1] = 1;
  matrix[to - 1][from - 1] = 1;
});

for (let k = 0; k < n; k += 1) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
    }
  }
}

const kevinBaconNumbers = matrix.map((row) => row.reduce((acc, cur) => acc + cur, 0));

console.log(kevinBaconNumbers.indexOf(Math.min(...kevinBaconNumbers)) + 1);
