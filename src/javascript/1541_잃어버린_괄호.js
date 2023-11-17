const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

const minOutput = input
  .split('-')
  .map((string) =>
    string
      .split('+')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0),
  )
  .reduce((acc, cur) => acc - cur);

console.log(minOutput);
