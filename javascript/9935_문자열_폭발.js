const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/);
const [string, bombString] = input;

const stack = [];
const n = bombString.length;

for (const char of string) {
  stack.push(char);

  if (stack.slice(-n).join('') === bombString) {
    for (let i = 0; i < n; i += 1) {
      stack.pop();
    }
  }
}

const result = stack.join('');

console.log(result === '' ? 'FRULA' : result);
