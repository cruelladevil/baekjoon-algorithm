const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);

const ASCENDING = 'ascending';
const DESCENDING = 'descending';
const MIXED = 'mixed';

const ascendingGroup = {
  0: DESCENDING,
  7: ASCENDING,
};

const ascendingCount = input.filter((_, i) => input[i] < input[i + 1] ?? Number.MAX_SAFE_INTEGER).length;

console.log(ascendingGroup[ascendingCount] ?? MIXED);
