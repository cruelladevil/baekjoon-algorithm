const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(1);

const [string, target] = input;
const numbers = string.split(' ');

console.log(numbers.filter((number) => number === target).length);
