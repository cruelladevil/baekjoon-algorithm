const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split(/\n/)
  .slice(1)
  .map((string) => string.split(' ').map(Number));

input.forEach(([h, , n]) => {
  const remainder = n % h;
  const quotient = n / h;

  const yy = remainder !== 0 ? remainder.toString() : h;
  const xx = Math.ceil(quotient).toString().padStart(2, '0');

  console.log(`${yy}${xx}`);
});
