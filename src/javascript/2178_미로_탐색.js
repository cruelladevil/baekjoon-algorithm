const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [target, ...numbers] = input;
const [n, m] = target.split(' ').map(Number);
const maze = numbers.map((string) => string.split('').map(Number));

const PATH = 1;
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const bfs = (row, col) => {
  const queue = [[row, col]];

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    if (row === n - 1 && col === m - 1) {
      break;
    }

    directions.forEach(([dRow, dCol]) => {
      const newRow = row + dRow;
      const newCol = col + dCol;
      const isInMaze = newRow >= 0 && newRow < n && newCol >= 0 && newCol < m;

      if (isInMaze && maze[newRow][newCol] === PATH) {
        queue.push([newRow, newCol]);
        maze[newRow][newCol] = maze[row][col] + 1;
      }
    });
  }

  return maze[n - 1][m - 1];
};

console.log(bfs(0, 0));
