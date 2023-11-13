const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

let num = Number(input);
let count = 0;

while (num >= 5) {
  count += Math.floor(num / 5);
  num /= 5;
}

console.log(count);
