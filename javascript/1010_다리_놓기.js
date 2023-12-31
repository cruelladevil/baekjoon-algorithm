const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const calCombinationCount = (n, r) => {
  const dp = Array.from({ length: r + 1 }, () => {
    return Array.from({ length: n + 1 }, () => 0);
  });

  for (let j = 1; j <= n; j += 1) {
    dp[1][j] = j;
  }

  for (let i = 2; i <= r; i += 1) {
    for (let j = i; j <= n; j += 1) {
      let sum = 0;

      for (let k = 1; k < j; k += 1) {
        sum += dp[i - 1][k];
      }

      dp[i][j] = sum;
    }
  }

  return dp[r][n];
};

console.log(input.map(([r, n]) => calCombinationCount(n, r)).join('\n'));
