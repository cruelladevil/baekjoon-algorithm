const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(0, -1);

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

console.log(
  input
    .map((string) => {
      let count = 0;

      for (const char of string) {
        if (vowels.has(char.toLowerCase())) {
          count += 1;
        }
      }

      return count;
    })
    .join('\n'),
);
