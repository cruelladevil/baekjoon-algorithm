const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').slice(1).map(Number);

const PUSH = '+';
const POP = '-';

const stack = [];
const commands = [];
let curr = 1;

for (let i = 0; i < input.length; i += 1) {
  const number = input[i];

  while (curr <= number) {
    stack.push(curr);
    commands.push(PUSH);
    curr += 1;
  }

  if (stack[stack.length - 1] === number) {
    stack.pop();
    commands.push(POP);
  } else {
    break;
  }
}

console.log(stack.length === 0 ? commands.join('\n') : 'NO');
