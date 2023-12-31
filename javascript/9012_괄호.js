const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(1);

const checkVPS = (string) => {
  const stack = [];

  for (const parenthesis of string) {
    if (stack[stack.length - 1] === '(' && parenthesis === ')') {
      stack.pop();
    } else {
      stack.push(parenthesis);
    }
  }

  return stack.length === 0;
};

const result = input.map((string) => (checkVPS(string) ? 'YES' : 'NO'));

console.log(result.join('\n'));
