const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i <= n; i += 1) {
  dp[i] = dp[i - 1] + 1;

  for (let j = 1; j * j <= i; j += 1) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[n]);
