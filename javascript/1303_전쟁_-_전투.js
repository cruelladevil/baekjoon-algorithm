const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [size, ...rest] = input;
const [n, m] = size.split(' ').map(Number);
const matrix = rest.map((string) => string.split(''));

const WHITE = 'W';
const BLUE = 'B';

const visited = Array.from({ length: m }, () => {
  return Array.from({ length: n }, () => false);
});

const getSoldierArea = (row, col, soldier) => {
  const isOutOfMatrix = row < 0 || col < 0 || row >= m || col >= n;

  if (isOutOfMatrix || visited[row][col] || matrix[row][col] !== soldier) {
    return 0;
  }

  visited[row][col] = true;

  const upArea = getSoldierArea(row - 1, col, soldier);
  const downArea = getSoldierArea(row + 1, col, soldier);
  const leftArea = getSoldierArea(row, col - 1, soldier);
  const rightArea = getSoldierArea(row, col + 1, soldier);

  return 1 + upArea + downArea + leftArea + rightArea;
};

let white = 0;
let blue = 0;

for (let row = 0; row < m; row += 1) {
  for (let col = 0; col < n; col += 1) {
    if (matrix[row][col] === WHITE) {
      const area = getSoldierArea(row, col, WHITE);
      white += Math.pow(area, 2);
    }
    if (matrix[row][col] === BLUE) {
      const area = getSoldierArea(row, col, BLUE);
      blue += Math.pow(area, 2);
    }
  }
}

console.log(`${white} ${blue}`);
