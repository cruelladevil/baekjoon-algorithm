const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const DIVISOR = 10007;

const calTileCaseCount = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i < dp.length; i += 1) {
    dp[i] = (2 * dp[i - 2] + dp[i - 1]) % DIVISOR;
  }

  return dp[n];
};

console.log(calTileCaseCount(n));
