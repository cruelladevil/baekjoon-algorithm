const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();

let reversed = '';

for (let i = input.length - 1; i >= 0; i -= 1) {
  reversed += input.charAt(i);
}

console.log(reversed);
