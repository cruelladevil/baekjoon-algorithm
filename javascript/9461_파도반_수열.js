const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').slice(1).map(Number);
const max = Math.max(...input);

const dp = Array.from({ length: max + 1 }, () => 0);

dp[0] = 0;
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

for (let i = 6; i <= max; i += 1) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

console.log(input.map((n) => dp[n]).join('\n'));
