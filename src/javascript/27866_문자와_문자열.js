const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/);
const [string, index] = input;

console.log(string.charAt(Number(index) - 1));
