const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(1).map(Number);

const stack = [];

input.forEach((number) => {
  if (number !== 0) {
    stack.push(number);
  } else {
    stack.pop();
  }
});

const sum = stack.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
