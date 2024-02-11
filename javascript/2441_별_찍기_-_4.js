const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

const stars = Array.from({ length: n }, (_, i) => ' '.repeat(i) + '*'.repeat(n - i));

console.log(stars.join('\n'));
