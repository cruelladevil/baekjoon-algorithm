const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], , ...buses] = input;

const matrix = Array.from({ length: n }, (_, row) => {
  return Array.from({ length: n }, (_, col) => (row === col ? 0 : Infinity));
});

buses.forEach(([start, end, weight]) => {
  matrix[start - 1][end - 1] = Math.min(matrix[start - 1][end - 1], weight);
});

for (let k = 0; k < n; k += 1) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
    }
  }
}

const minCosts = matrix.map((rows) => rows.map((col) => (col === Infinity ? 0 : col)));

console.log(minCosts.map((row) => row.join(' ')).join('\n'));
