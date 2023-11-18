const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .flatMap((string) => string.split(' ').map(Number));

const withdrawalTimes = input.sort((a, b) => a - b);

withdrawalTimes.forEach((_, i) => {
  withdrawalTimes[i] += withdrawalTimes[i - 1] ?? 0;
});

console.log(withdrawalTimes.reduce((acc, cur) => acc + cur, 0));
