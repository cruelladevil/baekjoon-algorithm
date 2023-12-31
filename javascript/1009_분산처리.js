const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .slice(1)
  .map((string) => string.split(' ').map(Number));

const computerNumbers = input.map(([a, b]) => {
  let computerNumber = 1;

  for (let i = 0; i < b; i += 1) {
    computerNumber *= a;
    computerNumber %= 10;
  }

  return computerNumber === 0 ? 10 : computerNumber;
});

console.log(computerNumbers.join('\n'));
