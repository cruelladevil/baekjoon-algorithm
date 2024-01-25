const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [text1, text2] = input;

const n = text1.length;
const m = text2.length;

const dp = Array.from({ length: n + 1 }, () => {
  return Array.from({ length: m + 1 }, () => 0);
});

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= m; j += 1) {
    if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[n][m]);
