const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .flatMap((string) => string.split(' ').map(Number));

const sortedUniqueNumbers = Array.from(new Set(input)).sort((a, b) => a - b);
const numberOrderMap = new Map(sortedUniqueNumbers.map((number, index) => [number, index]));

console.log(input.map((number) => numberOrderMap.get(number)).join(' '));
