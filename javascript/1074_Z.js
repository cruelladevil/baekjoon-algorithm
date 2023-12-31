const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [n, r, c] = input;

let size = Math.pow(2, n) * Math.pow(2, n);
let order = 0;
let row = 0;
let col = 0;

while (size > 1) {
  size /= 2;

  if (r < row + size && c < col + size) {
    order += size * size * 0;
  } else if (r < row + size) {
    order += size * size * 1;
    col += size;
  } else if (c < col + size) {
    order += size * size * 2;
    row += size;
  } else {
    order += size * size * 3;
    row += size;
    col += size;
  }
}

console.log(order);
