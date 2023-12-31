const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(Number);
const [m, n] = input;

const eratos = Array.from({ length: n + 1 }, () => true).fill(false, 0, 2);

for (let i = 2; i * i <= n; i += 1) {
  if (eratos[i]) {
    for (let j = i * i; j <= n; j += i) {
      eratos[j] = false;
    }
  }
}

for (let i = m; i <= n; i += 1) {
  if (eratos[i]) {
    console.log(i);
  }
}
