const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

console.log(Array.from({ length: n }, (_, i) => n - i).join('\n'));
