const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [size, ...board] = input;
const [n, m] = size.split(' ').map(Number);

const HOLE = 'H';

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const dp = Array.from({ length: n }, () => {
  return Array.from({ length: m }, () => 0);
});

const visited = Array.from({ length: n }, () => {
  return Array.from({ length: m }, () => false);
});

let hasCycle = false;
let maxMoveCount = 0;

const dfs = (row, col, moveCount) => {
  maxMoveCount = Math.max(maxMoveCount, moveCount + 1);

  const curr = board[row][col];

  for (let i = 0; i < directions.length; i += 1) {
    const [dRow, dCol] = directions[i];
    const newRow = row + dRow * curr;
    const newCol = col + dCol * curr;
    const isInBoard = newRow >= 0 && newRow < n && newCol >= 0 && newCol < m;

    if (isInBoard && board[newRow][newCol] !== HOLE) {
      if (visited[newRow][newCol]) {
        hasCycle = true;
        return;
      }

      if (dp[newRow][newCol] < moveCount + 1) {
        dp[newRow][newCol] = moveCount + 1;
        visited[newRow][newCol] = true;
        dfs(newRow, newCol, moveCount + 1);
        visited[newRow][newCol] = false;
      }
    }
  }
};

dfs(0, 0, 0);

console.log(hasCycle ? -1 : maxMoveCount);
