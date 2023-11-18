const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' '));
const [[n, m], ...matrix] = input;

const START = '2';
const PATH = '1';
const NOT_REACHED = '-1';
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const bfs = (row, col) => {
  matrix[row][col] = 0;

  const queue = [[row, col]];

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    directions.forEach(([dRow, dCol]) => {
      const newRow = row + dRow;
      const newCol = col + dCol;
      const isInMatrix = newRow >= 0 && newRow < n && newCol >= 0 && newCol < m;

      if (isInMatrix && matrix[newRow][newCol] === PATH) {
        queue.push([newRow, newCol]);
        matrix[newRow][newCol] = matrix[row][col] + 1;
      }
    });
  }
};

bfsLoop: for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    if (matrix[row][col] === START) {
      bfs(row, col);
      break bfsLoop;
    }
  }
}

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    if (matrix[row][col] === PATH) {
      matrix[row][col] = NOT_REACHED;
    }
  }
}

console.log(matrix.map((row) => row.join(' ')).join('\n'));
