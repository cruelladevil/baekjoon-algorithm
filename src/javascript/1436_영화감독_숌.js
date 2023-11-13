const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

let count = 0;
let num = 0;

while (count < n) {
  num += 1;

  if (num.toString().includes('666')) {
    count += 1;
  }
}

console.log(num);
