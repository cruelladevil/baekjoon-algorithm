const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const pieces = [1, 1, 2, 2, 2, 8];
const diffs = input.map((count, i) => pieces[i] - count);

console.log(diffs.join(' '));
