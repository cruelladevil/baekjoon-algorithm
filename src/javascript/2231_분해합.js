const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const n = Number(input);

let generator = 0;

for (let num = 1; num <= n; num += 1) {
  const digitSum = num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);

  if (num + digitSum === n) {
    generator = num;
    break;
  }
}

console.log(generator);
