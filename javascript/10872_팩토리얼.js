const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

let factorial = 1;

for (let i = 2; i <= n; i += 1) {
  factorial *= i;
}

console.log(factorial);
