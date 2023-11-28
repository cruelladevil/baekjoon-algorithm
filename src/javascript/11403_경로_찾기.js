const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...matrix] = input;

for (let k = 0; k < n; k += 1) {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][k] && matrix[k][j]) {
        matrix[i][j] = 1;
      }
    }
  }
}

console.log(matrix.map((rows) => rows.join(' ')).join('\n'));
