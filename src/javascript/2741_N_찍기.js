const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const sequence = Array.from({ length: n }, (_, i) => i + 1);

console.log(sequence.join('\n'));
