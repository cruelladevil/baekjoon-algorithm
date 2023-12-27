const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const SPACE = ' ';

const tree = ['  *  ', ' * * ', '*****'];

const matrix = Array.from({ length: n }, () => {
  return Array.from({ length: 2 * n - 1 }, () => SPACE);
});

const divideConquer = (n, row, col) => {
  if (n === 1) {
    for (let i = 0; i < tree.length; i += 1) {
      for (let j = 0; j < tree[0].length; j += 1) {
        matrix[row + i][col + j] = tree[i][j];
      }
    }
    return;
  }

  divideConquer(n / 2, row, col + (3 * n) / 2);
  divideConquer(n / 2, row + (3 * n) / 2, col);
  divideConquer(n / 2, row + (3 * n) / 2, col + 3 * n);
};

divideConquer(n / 3, 0, 0);

console.log(matrix.map((rows) => rows.join('')).join('\n'));
