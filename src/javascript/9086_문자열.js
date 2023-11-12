const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').slice(1);

console.log(input.map((string) => `${string.charAt(0)}${string.charAt(string.length - 1)}`).join('\n'));
