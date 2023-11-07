const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .flatMap((string) => string.split(' ').map(Number));

const minNumber = Math.min(...input);
const maxNumber = Math.max(...input);

console.log(`${minNumber} ${maxNumber}`);
