const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .flatMap((string) => string.split(' '));

const maxScore = Math.max(...input);
const fakeAverage = input.reduce((acc, cur) => acc + (cur / maxScore) * 100, 0) / input.length;

console.log(fakeAverage);
