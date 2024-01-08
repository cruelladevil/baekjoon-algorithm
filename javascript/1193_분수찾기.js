const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const x = Number(input);

let num = x;
let count = 1;

while (num > count) {
  num -= count;
  count += 1;
}

const ascendingNumber = num;
const descendingNumber = count + 1 - num;

if ((count & 1) === 0) {
  console.log(`${ascendingNumber}/${descendingNumber}`);
} else {
  console.log(`${descendingNumber}/${ascendingNumber}`);
}
