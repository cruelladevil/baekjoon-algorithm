const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...matrix] = input;

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visitSafeArea = (row, col, h, visited) => {
  const isOutOfMatrix = row < 0 || row >= n || col < 0 || col >= n;

  if (isOutOfMatrix || visited[row][col] || matrix[row][col] < h) {
    return;
  }

  visited[row][col] = true;

  directions.forEach(([dRow, dCol]) => {
    const newRow = row + dRow;
    const newCol = col + dCol;

    visitSafeArea(newRow, newCol, h, visited);
  });
};

let maxSafeAreaCount = 0;

for (let height = 1; height < 101; height += 1) {
  const visited = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => false);
  });

  let safeAreaCount = 0;

  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if (!visited[row][col] && matrix[row][col] >= height) {
        visitSafeArea(row, col, height, visited);
        safeAreaCount += 1;
      }
    }
  }

  maxSafeAreaCount = Math.max(maxSafeAreaCount, safeAreaCount);
}

console.log(maxSafeAreaCount);
