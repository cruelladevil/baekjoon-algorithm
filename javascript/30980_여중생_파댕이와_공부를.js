const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [size, ...paper] = input;
const [n, m] = size.split(' ').map(Number);
const matrix = paper.map((string) => string.split(''));

const ROW_UNIT = 3;
const COL_UNIT = 8;

const EMPTY = '.';
const SUCCESS = '*';
const FAIL = '/';

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    const string = matrix[row * ROW_UNIT + 1].slice(col * COL_UNIT + 1, col * COL_UNIT + 7).join('');
    const [calculation, c] = string.split('=');
    const [a, b] = calculation.split('+').map(Number);

    if (a + b === Number(c)) {
      const isOneDigit = string[5] === EMPTY;
      const maxCol = isOneDigit ? 6 : 7;

      for (let c = col * COL_UNIT + 1; c < col * COL_UNIT + maxCol; c += 1) {
        matrix[row * ROW_UNIT][c] = SUCCESS;
      }

      matrix[row * ROW_UNIT + 1][col * COL_UNIT] = SUCCESS;
      matrix[row * ROW_UNIT + 1][col * COL_UNIT + maxCol] = SUCCESS;

      for (let c = col * COL_UNIT + 1; c < col * COL_UNIT + maxCol; c += 1) {
        matrix[row * ROW_UNIT + 2][c] = SUCCESS;
      }
    } else {
      matrix[row * ROW_UNIT][col * COL_UNIT + 3] = FAIL;
      matrix[row * ROW_UNIT + 1][col * COL_UNIT + 2] = FAIL;
      matrix[row * ROW_UNIT + 2][col * COL_UNIT + 1] = FAIL;
    }
  }
}

console.log(matrix.map((rows) => rows.join('')).join('\n'));
