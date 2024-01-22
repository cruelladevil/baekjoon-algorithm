const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ');
const [a, b] = input;

const reverse = (string) => {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed += string.charAt(i);
  }

  return reversed;
};

const sum = Number(reverse(a)) + Number(reverse(b));

console.log(Number(reverse(String(sum))));
