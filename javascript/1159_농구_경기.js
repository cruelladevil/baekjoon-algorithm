const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\r?\n/).slice(1);

const counter = Array.from({ length: 26 }, () => 0);

input.forEach((name) => {
  const charCode = name.charCodeAt(0) - 'a'.charCodeAt();

  counter[charCode] += 1;
});

const picked = [];

counter.forEach((count, i) => {
  const char = String.fromCharCode(i + 'a'.charCodeAt());

  if (count >= 5) {
    picked.push(char);
  }
});

console.log(picked.length === 0 ? 'PREDAJA' : picked.join(''));
