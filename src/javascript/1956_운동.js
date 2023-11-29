const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...roads] = input;

const matrix = Array.from({ length: n }, () => {
  return Array.from({ length: n }, () => Infinity);
});

roads.forEach(([start, end, weight]) => {
  matrix[start - 1][end - 1] = weight;
});

for (let k = 0; k < n; k += 1) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
    }
  }
}

const minCycleDistance = matrix.reduce((acc, _, i) => Math.min(acc, matrix[i][i]), Infinity);

console.log(minCycleDistance !== Infinity ? minCycleDistance : -1);
