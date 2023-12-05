const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1);

console.log(input.map((string, i) => `${i + 1}. ${string}`).join('\n'));
