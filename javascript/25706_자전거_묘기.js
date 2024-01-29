const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], slopes] = input;

const dp = Array.from({ length: n }, () => 0);

for (let i = n - 1; i >= 0; i -= 1) {
  dp[i] = (dp[i + 1 + slopes[i]] ?? 0) + 1;
}

console.log(dp.join(' '));
