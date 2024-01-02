const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n, k], ...bags] = input;

const dp = Array.from({ length: n + 1 }, () => {
  return Array.from({ length: k + 1 }, () => 0);
});

for (let row = 1; row <= n; row += 1) {
  const [w, v] = bags[row - 1];

  for (let col = 1; col <= k; col += 1) {
    if (col - w >= 0) {
      dp[row][col] = Math.max(dp[row - 1][col], dp[row - 1][col - w] + v);
    } else {
      dp[row][col] = dp[row - 1][col];
    }
  }
}

console.log(dp[n][k]);
