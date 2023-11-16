const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);
const [, ...stairs] = input;

const dp = [];

dp[0] = stairs[0];
dp[1] = stairs[0] + stairs[1];
dp[2] = Math.max(dp[0] + stairs[2], stairs[1] + stairs[2]);

for (let i = 3; i < stairs.length; i += 1) {
  dp[i] = stairs[i] + Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]);
}

console.log(stairs.length > 2 ? dp[dp.length - 1] : stairs.reduce((acc, cur) => acc + cur, 0));
