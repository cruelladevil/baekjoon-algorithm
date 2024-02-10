const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const calGCD = (a, b) => {
  return a % b === 0 ? b : calGCD(b, a % b);
};

const calLCM = (a, b) => {
  return (a * b) / calGCD(a, b);
};

console.log(input.map(([a, b]) => calLCM(a, b)).join('\n'));
