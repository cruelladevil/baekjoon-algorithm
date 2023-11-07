const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).slice(1);

const wordSet = new Set();

input.forEach((word) => wordSet.add(word));

const byLength = (a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
};

const sortedWords = Array.from(wordSet).sort(byLength);

console.log(sortedWords.join('\n'));
