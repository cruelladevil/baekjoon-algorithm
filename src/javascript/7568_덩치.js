const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const frameRanks = input.map(([currWeight, currHeight]) => {
  return input.filter(([otherWeight, otherHeight]) => otherWeight > currWeight && otherHeight > currHeight).length + 1;
});

console.log(frameRanks.join(' '));
