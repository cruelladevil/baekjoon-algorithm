const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n, m], ...farm] = input;

const directions = [
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
];

const visited = Array.from({ length: n }, () => {
  return Array.from({ length: m }, () => false);
});

let isPeak = true;

const dfs = (row, col) => {
  if (visited[row][col]) {
    return;
  }

  visited[row][col] = true;

  directions.forEach(([dRow, dCol]) => {
    const newRow = row + dRow;
    const newCol = col + dCol;
    const isInFarm = newRow >= 0 && newRow < n && newCol >= 0 && newCol < m;

    if (isInFarm) {
      if (farm[row][col] < farm[newRow][newCol]) {
        isPeak = false;
      }

      if (farm[row][col] === farm[newRow][newCol]) {
        dfs(newRow, newCol);
      }
    }
  });
};

let peakCount = 0;

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < m; col += 1) {
    if (!visited[row][col]) {
      isPeak = true;

      dfs(row, col);

      if (isPeak) {
        peakCount += 1;
      }
    }
  }
}

console.log(peakCount);
