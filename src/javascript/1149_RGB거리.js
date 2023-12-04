const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map((string) => string.split(' ').map(Number));
const [[n], ...dp] = input;

for (let i = 1; i < n; i += 1) {
  const prevRed = dp[i - 1][0];
  const prevGreen = dp[i - 1][1];
  const prevBlue = dp[i - 1][2];

  dp[i][0] += Math.min(prevGreen, prevBlue);
  dp[i][1] += Math.min(prevRed, prevBlue);
  dp[i][2] += Math.min(prevRed, prevGreen);
}

console.log(Math.min(...dp[n - 1]));
