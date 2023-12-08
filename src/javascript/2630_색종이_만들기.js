const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...matrix] = input;

const WHITE = 0;
const BLUE = 1;
const IS_NOT_ONE_COLORED = -1;

const counter = Array.from({ length: 2 }, () => 0);

const divideConquer = (row, col, n) => {
  let paperColor = matrix[row][col];

  matrixLoop: for (let i = row; i < row + n; i += 1) {
    for (let j = col; j < col + n; j += 1) {
      if (matrix[i][j] !== paperColor) {
        paperColor = IS_NOT_ONE_COLORED;
        break matrixLoop;
      }
    }
  }

  if (paperColor === WHITE) {
    counter[WHITE] += 1;
  } else if (paperColor === BLUE) {
    counter[BLUE] += 1;
  } else {
    divideConquer(row, col, n / 2);
    divideConquer(row, col + n / 2, n / 2);
    divideConquer(row + n / 2, col, n / 2);
    divideConquer(row + n / 2, col + n / 2, n / 2);
  }
};

divideConquer(0, 0, n);

console.log(counter[WHITE]);
console.log(counter[BLUE]);
