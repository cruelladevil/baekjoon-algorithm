const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n, m], ...rest] = input;
const numbers = rest.slice(0, n);
const coordinations = rest.slice(n, n + m);

const dp = Array.from({ length: n }, (_, i) => {
  return Array.from({ length: n }, (_, j) => numbers[i][j]);
});

const calMatrixSum = (matrix, row, col) => {
  return (matrix[row - 1]?.[col] ?? 0) + (matrix[row][col - 1] ?? 0) - (matrix[row - 1]?.[col - 1] ?? 0);
};

for (let row = 0; row < n; row += 1) {
  for (let col = 0; col < n; col += 1) {
    dp[row][col] += calMatrixSum(dp, row, col);
  }
}

console.log(
  coordinations
    .map(([x1, y1, x2, y2]) => {
      const leftTopSum = dp[x1 - 2]?.[y1 - 2] ?? 0;
      const leftDownSum = dp[x2 - 1][y1 - 2] ?? 0;
      const rightTopSum = dp[x1 - 2]?.[y2 - 1] ?? 0;
      const rightDownSum = dp[x2 - 1][y2 - 1];

      return rightDownSum - leftDownSum - rightTopSum + leftTopSum;
    })
    .join('\n'),
);
