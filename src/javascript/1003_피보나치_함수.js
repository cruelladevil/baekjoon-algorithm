const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1).map(Number);

const generateFibonacciCountString = (number) => {
  const dp = Array.from({ length: number + 1 }, () => {
    return Array.from({ length: 2 }, () => [0, 0]);
  });

  dp[0] = [1, 0];
  dp[1] = [0, 1];

  for (let i = 2; i < number + 1; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      dp[i][j] = dp[i - 1][j] + dp[i - 2][j];
    }
  }

  return dp[number].join(' ');
};

console.log(input.map(generateFibonacciCountString).join('\n'));
