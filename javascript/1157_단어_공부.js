const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const upperString = input.toUpperCase();

const charCountMap = new Map(
  Array.from({ length: 26 }, (_, i) => {
    const charCode = 'A'.charCodeAt() + i;
    return [String.fromCharCode(charCode), 0];
  }),
);

for (const char of upperString) {
  charCountMap.set(char, charCountMap.get(char) + 1);
}

const charCountList = Array
  .from(charCountMap, ([char, count]) => ({ char, count }))
  .sort(({ count: a }, { count: b }) => b - a);
const { char: maxChar, count: maxCount } = charCountList[0];

const hasMultiMaxCount = charCountList.filter(({ count }) => count === maxCount).length > 1;

console.log(hasMultiMaxCount ? '?' : maxChar);
