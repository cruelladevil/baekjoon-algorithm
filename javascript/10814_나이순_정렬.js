const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' '));

input.sort(([ageA], [ageB]) => ageA - ageB);

console.log(input.map(([age, name]) => `${age} ${name}`).join('\n'));
