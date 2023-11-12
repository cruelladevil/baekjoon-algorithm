const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);
const [x, y] = input;

const quadrantMap = {
  '++': 1,
  '-+': 2,
  '--': 3,
  '+-': 4,
};

const xSign = x > 0 ? '+' : '-';
const ySign = y > 0 ? '+' : '-';
const quadrantKey = `${xSign}${ySign}`;

console.log(quadrantMap[quadrantKey]);
