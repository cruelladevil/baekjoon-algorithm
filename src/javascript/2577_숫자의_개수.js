const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).map(Number);

const multiple = input.reduce((acc, cur) => acc * cur, 1);
const digitCountMap = new Map(Array.from({ length: 10 }, (_, i) => [i.toString(), 0]));

for (const num of multiple.toString()) {
  digitCountMap.set(num, digitCountMap.get(num) + 1);
}

digitCountMap.forEach((count) => console.log(count));
