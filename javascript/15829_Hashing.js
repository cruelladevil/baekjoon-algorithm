const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [n, string] = input;

const MOD = 1234567891;

let hash = 0;

for (let i = 0; i < n; i += 1) {
  const charCode = string.charCodeAt(i) - 'a'.charCodeAt() + 1;
  let r = 1;

  for (let j = 0; j < i; j += 1) {
    r *= 31;
    r %= MOD;
  }

  hash += charCode * r;
}

console.log(hash % MOD);
