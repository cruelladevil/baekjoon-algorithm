const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const MOD = 1_000_000_009;

const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = 1;
dp[2] = 1;
dp[3] = 2;

for (let i = 4; i <= n; i += 1) {
  dp[i] = (dp[i - 1] + dp[i - 3]) % MOD;
}

console.log(dp[n]);
