const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

for (let i = 1; i <= 9; i += 1) {
  console.log(`${n} * ${i} = ${n * i}`);
}
