const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

const notAssignedSet = new Set(Array.from({ length: 30 }, (_, i) => i + 1));

input.forEach((number) => notAssignedSet.delete(number));

console.log(Array.from(notAssignedSet).join('\n'));
