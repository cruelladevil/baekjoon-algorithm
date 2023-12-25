const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(' ').map(BigInt);
const [a, b, c] = input;

const pow = (n, k) => {
  if (k === 0n) return 1n;
  if (k === 1n) return n % c;

  const half = pow(n, k / 2n) % c;

  if (k % 2n === 0n) {
    return (half * half) % c;
  } else {
    return (half * half * (n % c)) % c;
  }
};

console.log(pow(a, b).toString());
