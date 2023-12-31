const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(1).map(Number);

console.log(input.sort((a, b) => a - b).join('\n'));
