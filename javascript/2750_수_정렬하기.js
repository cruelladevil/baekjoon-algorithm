const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1).map(Number);

input.sort((a, b) => a - b);

console.log(input.join('\n'));
