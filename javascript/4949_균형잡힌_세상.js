const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\.\n/).slice(0, -1);

const strings = input.map((string) => string.replace(/[^\(\)\[\]]/g, ''));

const checkVPS = (string) => {
  const stack = [];

  for (const parenthesis of string) {
    const top = stack[stack.length - 1];

    if (top === '(' && parenthesis === ')') {
      stack.pop();
    } else if (top === '[' && parenthesis === ']') {
      stack.pop();
    } else {
      stack.push(parenthesis);
    }
  }

  return stack.length === 0;
};

console.log(strings.map((string) => (checkVPS(string) ? 'yes' : 'no')).join('\n'));
