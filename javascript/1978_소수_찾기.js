const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .trim()
  .split('\n')
  .slice(1)
  .flatMap((string) => string.split(' ').map(Number));

const max = Math.max(...input);
const eratos = Array.from({ length: max + 1 }, () => true).fill(false, 0, 2);

for (let i = 2; i * i <= max; i += 1) {
  if (eratos[i]) {
    for (let j = i * i; j <= max; j += i) {
      eratos[j] = false;
    }
  }
}

console.log(input.filter((number) => eratos[number]).length);
