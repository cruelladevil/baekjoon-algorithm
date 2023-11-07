const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .map((string) => string.split(' '));

input.forEach(([count, string]) => {
  if (string) {
    let repeated = '';

    for (const char of string) {
      repeated += char.repeat(Number(count));
    }

    console.log(repeated);
  }
});
