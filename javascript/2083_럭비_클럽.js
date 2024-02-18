const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\r?\n/)
  .slice(0, -1)
  .map((string) => string.split(' '));

console.log(
  input
    .map(([name, age, weight]) => {
      const isSenior = Number(age) > 17 || Number(weight) >= 80;
      return isSenior ? `${name} Senior` : `${name} Junior`;
    })
    .join('\n'),
);
