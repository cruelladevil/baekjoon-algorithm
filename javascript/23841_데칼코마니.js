const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [sizes, ...rest] = input;
const [n, m] = sizes.split(' ').map(Number);
const matrix = rest.map((string) => string.split(''));

const EMPTY = '.';

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    if (matrix[row][col] !== EMPTY) {
      matrix[row][m - col - 1] = matrix[row][col];
    }
  }
}

console.log(matrix.map((string) => string.join('')).join('\n'));
