const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], numbers] = input;

const dp = Array.from({ length: n }, () => 1);

for (let i = 1; i < n; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] > numbers[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
