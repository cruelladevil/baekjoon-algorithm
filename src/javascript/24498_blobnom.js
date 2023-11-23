const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .flatMap((string) => string.split(' ').map(Number));

let max = Math.max(input[0], input[input.length - 1]);

for (let i = 1; i < input.length - 1; i += 1) {
  const height = input[i] + Math.min(input[i - 1], input[i + 1]);

  max = Math.max(max, height);
}

console.log(max);
