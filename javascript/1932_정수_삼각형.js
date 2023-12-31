const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...triangle] = input;

const dp = Array.from({ length: n }, (_, i) => {
  return Array.from({ length: i + 1 }, () => 0);
});

dp[n - 1] = [...triangle[n - 1]];

for (let i = n - 2; i >= 0; i -= 1) {
  triangle[i].forEach((number, j) => {
    dp[i][j] = number + Math.max(dp[i + 1][j], dp[i + 1][j + 1] ?? 0);
  });
}

console.log(dp[0][0]);
