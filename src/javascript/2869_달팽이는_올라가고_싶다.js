const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [climb, slip, target] = input;

console.log(Math.ceil((target - slip) / (climb - slip)));
