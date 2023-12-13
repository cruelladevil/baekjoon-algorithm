const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split('').map(Number));

const PATH = 0;
const MARKED = -1;
const m = input.length;
const n = input[0].length;

const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

const dfs = (row, col) => {
  if (input[row][col] !== PATH) {
    return;
  }

  input[row][col] = MARKED;

  directions.forEach(([dRow, dCol]) => {
    const newRow = row + dRow;
    const newCol = col + dCol;
    const isInMatrix = newRow >= 0 && newRow < m && newCol >= 0 && newCol < n;

    if (isInMatrix) {
      dfs(newRow, newCol);
    }
  });
};

for (let col = 0; col < n; col += 1) {
  dfs(0, col);
}

console.log(input[m - 1].some((cell) => cell === MARKED) ? 'YES' : 'NO');
