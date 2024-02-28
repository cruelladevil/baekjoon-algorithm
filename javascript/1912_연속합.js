const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], numbers] = input;

const dp = Array.from({ length: n }, () => 0);

dp[0] = numbers[0];

for (let i = 1; i < n; i += 1) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
}

console.log(Math.max(...dp));
